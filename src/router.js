const routes = {
    dashboard: "./pages/dashboard/dashboard.html",
    home: "./pages/home/home.html",
    about: "./pages/about/about.html",
    projects: "./pages/projects/projects.html",
    contact: "./pages/contact/contact.html",
    assets: "./pages/assets/assets.html",
    seo: "./pages/seo/seo.html",
    settings: "./pages/settings/settings.html"
};

export async function loadPage(pageName) {

    const response =
        await fetch(routes[pageName]);

    const html =
        await response.text();

    document.getElementById(
        "page-content"
    ).innerHTML = html;

    document.getElementById(
        "page-style"
    ).href =
        `./pages/${pageName}/${pageName}.css`;

    try {

        const module =
            await import(
                `./pages/${pageName}/${pageName}.js`
            );

        if (module.init) {
            module.init();
        }

        if (module.loadDashboard) {
            module.loadDashboard();
        }

    } catch (error) {

        console.log(
            `${pageName}.js not found`
        );
    }
}