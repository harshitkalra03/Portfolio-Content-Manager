let projects = {};
let selectedProjectKey = null;
let technologies = {};
let tags = {};
let currentTab = "general";


// let selectedProjectKey = null;

export async function init() {

    console.log("Projects Init");

    projects =
        await window.portfolioAPI.getProjects();

    technologies =
        await window.portfolioAPI.getTechnologies();

    tags =
        await window.portfolioAPI.getTags();
    console.log(projects);

    renderProjectList();
    renderGeneralTab();
    setupTabs();
}

function renderProjectList() {

    const container =
        document.getElementById("projectsList");

    container.innerHTML = "";

    Object.entries(projects).forEach(
        ([key, project]) => {

            container.innerHTML += `
                <div
                    class="project-item"
                    data-key="${key}"
                >
                    ${project.title}
                </div>
            `;
        }
    );

    document
        .querySelectorAll(".project-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    loadProject(
                        item.dataset.key
                    );
                }
            );
        });
}

function renderTechnologies(project) {

    const container =
        document.getElementById(
            "projectTechnologies"
        );

    container.innerHTML = "";

    Object.keys(
        technologies
    ).forEach(key => {

        const checked =
            project.techStack?.includes(key)
                ? "checked"
                : "";

        container.innerHTML += `
            <label>

                <input
                    type="checkbox"
                    value="${key}"
                    ${checked}
                >

                ${technologies[key].label}

            </label>
        `;
    });
}

function renderTags(project) {

    const container =
        document.getElementById(
            "projectTags"
        );

    container.innerHTML = "";

    Object.keys(tags)
        .forEach(key => {

            const checked =
                project.tags?.includes(key)
                    ? "checked"
                    : "";

            container.innerHTML += `
                <label>

                    <input
                        type="checkbox"
                        value="${key}"
                        ${checked}
                    >

                    ${tags[key].label}

                </label>
            `;
        });
}

function renderGeneralTab() {

    document.getElementById(
        "tabContent"
    ).innerHTML = `

        <label>Project Key</label>
        <input id="projectKey">

        <label>Title</label>
        <input id="projectTitle">

        <label>Short Description</label>
        <input id="projectShortDesc">

        <label>Description</label>
        <textarea
            id="projectDescription"
        ></textarea>

        <label>Github</label>
        <input id="projectGithub">

        <button id="saveProjectBtn">
            Save Changes
        </button>
    `;
}

function renderTechnologiesTab() {

    document.getElementById(
        "tabContent"
    ).innerHTML = `

        <h3>Technologies</h3>

        <div id="currentTechnologies">
        </div>

        <hr>

        <h4>Add Existing Technology</h4>

        <select
            id="technologySelect"
        >
        </select>

        <button
            id="addTechnologyBtn"
        >
            Add Technology
        </button>

        <hr>

        <button
            id="createTechnologyBtn"
        >
            + Create New Technology
        </button>
    `;

    if (selectedProjectKey) {

        renderCurrentTechnologies();
        populateTechnologyDropdown();
    }
}


function renderCurrentTechnologies() {

    const project =
        projects[selectedProjectKey];

    const container =
        document.getElementById(
            "currentTechnologies"
        );

    if (!container) return;

    container.innerHTML = "";

    (project.techStack || [])
        .forEach(tech => {

            const techKey =
                tech.key;

            const techLabel =
                technologies[techKey]?.label
                || techKey;

            container.innerHTML += `
                <div class="selected-item">

                    <span>
                        ${techLabel}
                    </span>

                    <button
                        class="remove-tech-btn"
                        data-key="${techKey}"
                    >
                        Remove
                    </button>

                </div>
            `;
        });

    document
        .querySelectorAll(
            ".remove-tech-btn"
        )
        .forEach(btn => {

            btn.addEventListener(
                "click",
                async () => {

                    removeTechnology(
                        btn.dataset.key
                    );
                }
            );
        });
}

async function removeTechnology(
    techKey
) {

    const project =
        projects[selectedProjectKey];

    project.techStack =
        project.techStack.filter(
            tech =>
                tech.key !== techKey
        );

    await window.portfolioAPI
        .saveProjects(projects);

    renderCurrentTechnologies();
}

function populateTechnologyDropdown() {

    const dropdown =
        document.getElementById(
            "technologySelect"
        );

    if (!dropdown) return;

    dropdown.innerHTML = "";

    Object.entries(
        technologies
    ).forEach(([key, tech]) => {

        dropdown.innerHTML += `
            <option value="${key}">
                ${tech.label}
            </option>
        `;
    });
}

function renderTagsTab() {

    document.getElementById(
        "tabContent"
    ).innerHTML = `

        <h3>Tags</h3>

        <div id="projectTags">
        </div>

        <button id="addTagBtn">
            + Add Tag
        </button>
    `;

    if (selectedProjectKey) {

        renderTags(
            projects[selectedProjectKey]
        );
    }
}

function renderImagesTab() {

    document.getElementById(
        "tabContent"
    ).innerHTML = `

        <h3>Images</h3>

        <div id="projectImages">

        </div>

        <button id="addImageBtn">
            + Upload Image
        </button>
    `;
}

function renderTeamTab() {

    document.getElementById(
        "tabContent"
    ).innerHTML = `

        <h3>Team Members</h3>

        <textarea
            id="projectTeamMembers"
        ></textarea>

        <button id="addMemberBtn">
            + Add Member
        </button>
    `;

    if (selectedProjectKey) {

        const project =
            projects[selectedProjectKey];

        document.getElementById(
            "projectTeamMembers"
        ).value =
            (project.teamMembers || [])
                .join("\n");
    }
}

function setupTabs() {

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn => {

            btn.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".tab-btn"
                        )
                        .forEach(b =>
                            b.classList.remove(
                                "active"
                            )
                        );

                    btn.classList.add(
                        "active"
                    );

                    const tab =
                        btn.dataset.tab;

                    currentTab = tab;

                    if (tab === "general") {

                        renderGeneralTab();

                        if (selectedProjectKey) {

                            loadProject(
                                selectedProjectKey
                            );
                        }
                    }

                    else if (
                        tab === "technologies"
                    ) {

                        renderTechnologiesTab();
                    }

                    else if (
                        tab === "tags"
                    ) {

                        renderTagsTab();
                    }

                    else if (
                        tab === "images"
                    ) {

                        renderImagesTab();
                    }

                    else if (
                        tab === "team"
                    ) {

                        renderTeamTab();
                    }
                }
            );
        });
}

function loadProject(key) {

    selectedProjectKey = key;

    const project =
        projects[key];

    if (currentTab === "general") {

        document.getElementById(
            "projectKey"
        ).value = key;

        document.getElementById(
            "projectTitle"
        ).value = project.title;

        document.getElementById(
            "projectShortDesc"
        ).value = project.shortdesc;

        document.getElementById(
            "projectDescription"
        ).value = project.desc;

        document.getElementById(
            "projectGithub"
        ).value =
            project.github || "";
    }

    else if (
        currentTab === "technologies"
    ) {

        renderTechnologiesTab();
    }

    else if (
        currentTab === "tags"
    ) {

        renderTagsTab();
    }

    else if (
        currentTab === "images"
    ) {

        renderImagesTab();
    }

    else if (
        currentTab === "team"
    ) {

        renderTeamTab();
    }
}