function renderProducts(categoryKey) {
  const category = PRODUCTS[categoryKey];
  const grid = document.getElementById("product-grid");

  document.getElementById("page-title").innerText = category.title;
  document.getElementById("page-desc").innerText = category.description;

  grid.innerHTML = "";

  category.items.forEach(p => {
    grid.innerHTML += `
    <a href="../../product-description.html?id=${p.id}" class="block group">

      <div class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-100 hover:border-brand-600/30 transform hover:-translate-y-1">

        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
          <img src="${p.image}" alt="${p.name}"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
          ${p.tag ? `
            <div class="absolute top-4 left-4">
              <span class="bg-white/90 px-3 py-1 rounded-md text-xs font-bold text-brand-600">
                ${p.tag}
              </span>
            </div>` : ""}
        </div>

        <div class="p-6 flex flex-col flex-1">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-slate-900 text-xl font-bold group-hover:text-brand-600">
              ${p.name}
            </h3>
          </div>

          <div class="mt-auto pt-4 border-t border-gray-100">
            <div class="flex justify-between text-xs text-gray-500 mb-4">
              <span>${p.origin}</span>
              <span>MOQ: ${p.moq}</span>
            </div>
            <button
  class="w-full py-3 rounded-lg bg-white text-gray-500 border border-gray-200 font-semibold transition hover:bg-brand-600 hover:text-white hover:border-brand-600">
  Enquire Now
</button>

          </div>
        </div>
      </div>
    </a>
    `;
  });
}

window.renderProducts = renderProducts;

function renderAllProducts() {
  const grid = document.getElementById("product-grid");

  document.getElementById("page-title").innerText = "All Products";
  document.getElementById("page-desc").innerText =
    "Explore our complete range of premium agricultural products.";

  grid.innerHTML = "";

  Object.keys(PRODUCTS).forEach(categoryKey => {
    const category = PRODUCTS[categoryKey];

    // Category heading
    grid.innerHTML += `
      <div class="col-span-full mt-10 mb-4">
        <h2 class="text-2xl font-bold text-brand-900">
          ${category.title}
        </h2>
        <p class="text-gray-600 text-sm">
          ${category.description}
        </p>
      </div>
    `;

    category.items.forEach(p => {
      grid.innerHTML += `
      <a href="${p.link}" class="block group">
        <div class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
          <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <img src="${p.image}" alt="${p.name}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          </div>

          <div class="p-6">
            <h3 class="font-bold text-slate-900">${p.name}</h3>
          </div>
        </div>
      </a>
      `;
    });
  });
}

window.renderAllProducts = renderAllProducts;

