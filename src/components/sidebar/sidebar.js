export function renderSidebar() {

    return `
        <div class="sidebar">

            <div class="logo">
                HK CMS
            </div>

            <button data-page="dashboard">Dashboard</button>

            <button data-page="home">Home</button>

            <button data-page="about">About</button>

            <button data-page="projects">Projects</button>

            <button data-page="contact">Contact</button>

            <button data-page="assets">Assets</button>

            <button data-page="seo">SEO</button>

            <button data-page="settings">Settings</button>

        </div>
    `;
}