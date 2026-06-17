const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'portfolioAPI',
    {
        getProjects: () =>
            ipcRenderer.invoke("getProjects"),

        saveProjects: (data) =>
            ipcRenderer.invoke(
                "saveProjects",
                data
            ),

        getTechnologies: () =>
            ipcRenderer.invoke("getTechnologies"),

        saveTechnologies: (data) =>
            ipcRenderer.invoke(
                "saveTechnologies",
                data
            ),

        getTags: () =>
            ipcRenderer.invoke("getTags"),

        getTimeline: () =>
            ipcRenderer.invoke("getTimeline"),

        getSocials: () =>
            ipcRenderer.invoke("getSocials")
    }
);