// Toggle nav on mobile
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

const container = document.querySelector(".article-container");
const params = new URLSearchParams(location.search);
const id = params.get("id");

if (!id) {
  container.innerHTML = '<p class="error">No product ID provided.</p>';
} else {
  fetch("products.json")
    .then((r) => r.json())
    .then((products) => {
      const product = products.find((p) => String(p.id) === id);
      if (!product) {
        container.innerHTML = '<p class="error">Product not found.</p>';
        return;
      }

      // Build media carousel
      const media = [...(product.images || []), ...(product.videos || [])];
      let idx = 0;

      const mediaEl = document.createElement("div");
      mediaEl.className = "carousel-media";

      const update = () => {
        mediaEl.innerHTML = "";
        const cur = media[idx];
        if (cur.includes("youtube.com/watch") || cur.includes("youtu.be/")) {
          // extract ID
          let vid = cur.includes("v=")
            ? cur.split("v=")[1].split("&")[0]
            : cur.split("youtu.be/")[1].split("?")[0];
          const iframe = document.createElement("iframe");
          iframe.src = `https://www.youtube.com/embed/${vid}`;
          iframe.allow =
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          iframe.width = "100%";
          iframe.height = "400";
          mediaEl.appendChild(iframe);
        } else if (cur.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.src = cur;
          video.controls = true;
          mediaEl.appendChild(video);
        } else {
          const img = document.createElement("img");
          img.src = cur;
          img.alt = product.name;
          mediaEl.appendChild(img);
        }
      };

      update();

      const controls = document.createElement("div");
      controls.className = "carousel-controls";
      ["‹", "›"].forEach((symbol, i) => {
        const btn = document.createElement("button");
        btn.textContent = symbol;
        btn.addEventListener("click", () => {
          idx =
            i === 0
              ? (idx - 1 + media.length) % media.length
              : (idx + 1) % media.length;
          update();
        });
        controls.appendChild(btn);
      });

      const info = document.createElement("div");
      info.className = "product-info";
      info.innerHTML = `
        <h1>${product.name}</h1>
        <p><strong>Price:</strong> ${product.price} Fr</p>
        <p class="specs"><strong>Size:</strong> ${
          product.size || "–"
        } | <strong>Weight:</strong> ${product.weight || "–"} kg</p>
        <p>${product.description}</p>
      `;

      container.append(mediaEl, controls, info);
    })
    .catch(() => {
      container.innerHTML = '<p class="error">Failed to load product data.</p>';
    });
}
