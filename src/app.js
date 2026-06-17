import { renderSidebar } from "./components/sidebar/sidebar.js";

import { loadPage } from "./router.js";

document.getElementById("sidebar").innerHTML = renderSidebar();

loadPage("dashboard");

document.addEventListener("click", async (event) => {

    const page = event.target.dataset.page;

    if (!page) return;

    await loadPage(page);

});