const path = require("path");

const {
    readJson,
    writeJson
} = require("./jsonService");

const PORTFOLIO_ROOT =
    "E:/Harshit Documents/Harshit-Kalra-Portfolio-main";

function getProjects() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/projects.json")
    );
}

function saveProjects(data) {

    return writeJson(
        path.join(
            PORTFOLIO_ROOT,
            "data/projects.json"
        ),
        data
    );
}

function getTechnologies() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/technologies.json")
    );
}

function saveTechnologies(data) {

    return writeJson(
        path.join(
            PORTFOLIO_ROOT,
            "data/technologies.json"
        ),
        data
    );
}

function getTags() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/project-tags.json")
    );
}

function getTimeline() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/timeline.json")
    );
}

function getEducation() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/education.json")
    );
}

function getAchievements() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/achievements.json")
    );
}

function getProfile() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/profile.json")
    );
}

function getSocials() {

    return readJson(
        path.join(PORTFOLIO_ROOT, "data/socials.json")
    );
}

module.exports = {
    getProjects,
    saveProjects,

    getTechnologies,
    saveTechnologies,

    getTags,
    getTimeline,
    getEducation,
    getAchievements,
    getProfile,
    getSocials
};