const editor = grapesjs.init({
    container: "#editor",
    StorageManager: false,
    blockManager: {
        appendTo: "#blocks",
    },
    storageManager: {
        type: 'remote',
        stepsBeforeSave: 3,
        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        id: "my-",
        urlStore: `/pages/${location.pathname.split('/')[2]}/content`,
        urlLoad: `/pages/${location.pathname.split('/')[2]}/content`,
        headers: {
            'Content-Type': 'application/json',
        },
    },
    styleManager: {
        appendTo: "#styles-container",
        sectors: [
            {
                name: "Dimension",
                open: false,
                buildProps: ["width", "min-height", "padding"],
                properties: [
                    {
                        type: "integer",
                        name: "The Width",
                        property: "width",
                        units: ["px", "%", "rem"],
                        defaults: "auto",
                        min: 0,
                    },
                ],
            },
        ],
    },    

    layerManager: {
        appendTo: "#layers-container",
    },

    traitManager: {
        appendTo: "#trait-container",
    },

    selectorManager: {
        appendTo: "#styles-container",
    },

    panels: {
        defaults: [
            {
                id: "basic-actions",
                el: ".panel__basic-action",
                buttons: [
                    {
                        id: "visibility",
                        active: true,
                        className: "btn-toggle-borders",
                        label: "<i class='bi bi-border'></i>",
                        command: "sw-visibility",
                    },
                ],
            },
            {
                id: "panel-devices",
                el: ".panel__devices",
                buttons: [
                    {
                        id: "device-desktop",
                        label: "<i class= 'bi bi-laptop'></i>",
                        command: "set-device-desktop",
                        active: true,
                        togglable: false,
                    },
                    {
                        id: "device-mobile",
                        label: "<i class= 'bi bi-phone'></i>",
                        command: "set-device-mobile",
                    },
                ],
            },
        ],
    },

    deviceManager: {
        devices: [
            {
            name: "Desktop",
            width: "",
            },
            {
                name: "Mobile",
                width: "320px",
                widthMedia: "480px",
            }
        ],
    },

    plugins: ["gjs-blocks-basic"],
    pluginsOpts: {
        "gjs-blocks-basic": {},
    },
});

/*
    Adicionando comando de visualização em Tamanho Desktop
*/

editor.Commands.add("set-device-desktop", {
    run: (editor)=> editor.setDevice("Desktop"),
});

/*
    Adicionando comando de visualização em Tamanho Mobile
*/

editor.Commands.add("set-device-mobile", {
    run: (editor)=> editor.setDevice("Mobile"),
});