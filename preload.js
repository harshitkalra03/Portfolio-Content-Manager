const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'portfolioAPI',
    {
        getProjects: () =>
            ipcRenderer.invoke("getProjects"),

        getTechnologies: () =>
            ipcRenderer.invoke("getTechnologies"),

        getTags: () =>
            ipcRenderer.invoke("getTags"),

        getTimeline: () =>
            ipcRenderer.invoke("getTimeline"),

        getSocials: () =>
            ipcRenderer.invoke("getSocials")
    }
);