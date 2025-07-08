fetch("products.json")
  .then((res) => res.json())
  .then((products) => {
    const grid = document.querySelector(".product-grid");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.setAttribute("data-category", product.category);
      card.setAttribute("data-id", product.id);

      const media = [...(product.images || []), ...(product.videos || [])];
      let currentIndex = 0;

      const mediaContainer = document.createElement("div");
      mediaContainer.className = "carousel-media";

      const updateMedia = () => {
        const current = media[currentIndex];
        mediaContainer.innerHTML = "";
        if (
          current.includes("youtube.com/watch") ||
          current.includes("youtu.be/")
        ) {
          const video = document.createElement("iframe");
          let videoId = "";

          if (current.includes("youtube.com/watch")) {
            videoId = current.split("v=")[1].split("&")[0];
          } else {
            videoId = current.split("youtu.be/")[1].split("?")[0];
          }

          video.src = `https://www.youtube.com/embed/${videoId}`;
          video.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          video.allowFullscreen = true;
          video.width = "100%";
          video.height = "200";
          mediaContainer.appendChild(video);
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
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + media.length) % media.length;
        updateMedia();
      });

      const nextBtn = document.createElement("button");
      nextBtn.className = "carousel-button next";
      nextBtn.textContent = "›";
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % media.length;
        updateMedia();
      });

      updateMedia();

      const carousel = document.createElement("div");
      carousel.className = "image-carousel";
      carousel.append(mediaContainer, prevBtn, nextBtn);

      const sizeWeightHtml = `
        ${product.size ? `<p><strong>Size:</strong> ${product.size}</p>` : ""}
        ${
          product.weight
            ? `<p><strong>Weight:</strong> ${product.weight} kg</p>`
            : ""
        }
      `;

      const info = document.createElement("div");
      info.className = "product-info";
      info.innerHTML = `
        <h4 class="product-name">${product.name}</h4>
        <p class="product-price">${product.price} Fr</p>
        <p class="product-description">${product.description}</p>
        ${sizeWeightHtml}
      `;

      const btn = document.createElement("button");
      btn.className = "add-to-cart-button";
      btn.textContent = "Add to Cart";

      card.append(carousel, info, btn);
      grid.appendChild(card);
    });

    setupFiltering();
    setupCartButtons();
  });

function setupFiltering() {
  const buttons = document.querySelectorAll(".category-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-category");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const cards = document.querySelectorAll(".product-card");
      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        card.style.display =
          selected === "all" || category === selected ? "block" : "none";
      });
    });
  });
}

const cart = [];

function setupCartButtons() {
  const buttons = document.querySelectorAll("add-to-cart-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const id = card.getAttribute("data-id");
      const name = card.querySelector(".product-name").textContent;
      const priceText = card.querySelector(".product-price").textContent;
      const price = parseFloat(priceText.replace("Fr", ""));

      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }

      updateCartDisplay();
    });
  });
}

function updateCartDisplay() {
  const cartList = document.querySelector(".cart-items");
  const totalEl = document.querySelector(".cart-total");
  cartList.innerHTML = "";

  let total = 0;
  cart.forEach((item) => {
    const lineTotal = item.price * item.quantity;
    total += lineTotal;

    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} — ${lineTotal.toFixed(
      2
    )} Fr`;
    cartList.appendChild(li);
  });

  totalEl.textContent = `Total: ${total.toFixed(2)} Fr`;
}

document.getElementById("toggleCart").addEventListener("click", () => {
  document.getElementById("cartPanel").classList.toggle("open");
});
