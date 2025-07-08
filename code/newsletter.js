document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fname = this.querySelector('[name="fname"]').value;
    const lname = this.querySelector('[name="lname"]').value;

    const message = document.createElement("p");
    message.classList.add("subscribe-message");
    message.textContent = `Thanks for subscribing, ${fname || "Friend"}!`;

    const oldMsg = this.querySelector(".subscribe-message");
    if (oldMsg) oldMsg.remove();

    this.appendChild(message);
    this.reset();
  });
});

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("projects-container");
    data.forEach((product) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
          <img src="${product.images}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading products:", error);
  });

fetch("products.json")
  .then((res) => res.json())
  .then((products) => {
    const grid = document.querySelector(".product-grid");
    const limitedProducts = products.slice(0, 4); // ✅ Only first 4

    limitedProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.setAttribute("data-category", product.category || "");
      card.setAttribute("data-id", product.id);

      const media = [...(product.images || []), ...(product.videos || [])];
      let currentIndex = 0;

      const mediaContainer = document.createElement("div");
      mediaContainer.className = "carousel-media";

      const updateMedia = () => {
        const current = media[currentIndex];
        mediaContainer.innerHTML = "";

        if (current.includes("youtube.com") || current.includes("youtu.be")) {
          const videoId = current.includes("youtube.com")
            ? current.split("v=")[1].split("&")[0]
            : current.split("youtu.be/")[1].split("?")[0];

          const iframe = document.createElement("iframe");
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          iframe.width = "100%";
          iframe.height = "200";
          mediaContainer.appendChild(iframe);
        } else if (current.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.src = current;
          video.controls = true;
          video.style.maxWidth = "100%";
          mediaContainer.appendChild(video);
        } else {
          const link = document.createElement("a");
          link.href = `article.html?id=${product.id}`;
          const img = document.createElement("img");
          img.src = current;
          img.alt = product.name;
          img.style.maxWidth = "100%";
          img.style.borderRadius = "8px";
          link.appendChild(img);
          mediaContainer.appendChild(link);
        }
      };

      const prevBtn = document.createElement("button");
      prevBtn.className = "carousel-button prev";
      prevBtn.textContent = "‹";
      prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + media.length) % media.length;
        updateMedia();
      };

      const nextBtn = document.createElement("button");
      nextBtn.className = "carousel-button next";
      nextBtn.textContent = "›";
      nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % media.length;
        updateMedia();
      };

      updateMedia();

      const carousel = document.createElement("div");
      carousel.className = "image-carousel";
      carousel.append(mediaContainer, prevBtn, nextBtn);

      const info = document.createElement("div");
      info.className = "product-info";
      info.innerHTML = `
        <h4 class="product-name">${product.name}</h4>
        <p class="product-price">${product.price} Fr</p>
        <p class="product-description">${product.description}</p>
        ${product.size ? `<p><strong>Size:</strong> ${product.size}</p>` : ""}
        ${
          product.weight
            ? `<p><strong>Weight:</strong> ${product.weight} kg</p>`
            : ""
        }
      `;

      const btn = document.createElement("button");
      btn.className = "add-to-cart-button";
      btn.textContent = "Add to Cart";
      btn.addEventListener("click", () => {
        alert(`Added ${product.name} to cart!`);
      });

      card.append(carousel, info, btn);
      grid.appendChild(card);
    });
  })
  .catch((err) => console.error("Error loading products:", err));
