export async function init() {

    await loadDashboard();

}

async function loadDashboard() {

    const projects =
        await window.portfolioAPI.getProjects();

    const technologies =
        await window.portfolioAPI.getTechnologies();

    const tags =
        await window.portfolioAPI.getTags();

    const timeline =
        await window.portfolioAPI.getTimeline();

    const socials =
        await window.portfolioAPI.getSocials();

    document.getElementById(
        "projectCount"
    ).textContent =
        Object.keys(projects).length;

    document.getElementById(
        "technologyCount"
    ).textContent =
        Object.keys(technologies).length;

    document.getElementById(
        "tagCount"
    ).textContent =
        Object.keys(tags).length;

    document.getElementById(
        "timelineCount"
    ).textContent =
        Object.keys(timeline).length;

    document.getElementById(
        "socialCount"
    ).textContent =
        Object.keys(socials).length;
}