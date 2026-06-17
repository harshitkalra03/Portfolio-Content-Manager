export function renderSidebar() {

    return `
        <div class="sidebar">

            <div class="sidebar-logo">
                HK CMS
            </div>

            <div class="sidebar-section">

                <button
                    class="nav-btn"
                    data-page="dashboard"
                >
                    Dashboard
                </button>

            </div>

            <div class="sidebar-heading">
                CONTENT
            </div>

            <button
                class="nav-btn"
                data-page="home"
            >
                Home
            </button>

            <button
                class="nav-btn"
                data-page="about"
            >
                About
            </button>

            <button
                class="nav-btn"
                data-page="projects"
            >
                Projects
            </button>

            <button
                class="nav-btn"
                data-page="contact"
            >
                Contact
            </button>

            <div class="sidebar-heading">
                SYSTEM
            </div>

            <button
                class="nav-btn"
                data-page="assets"
            >
                Assets
            </button>

            <button
                class="nav-btn"
                data-page="seo"
            >
                SEO
            </button>

            <button
                class="nav-btn"
                data-page="settings"
            >
                Settings
            </button>

        </div>
    `;
}