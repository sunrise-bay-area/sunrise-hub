CMS.registerEditorComponent({
    id: "text-block",
    label: "Text Block",
    fields: [
        { name: "title", label: "Title", widget: "string" },
        { name: "text", label: "Text", widget: "string" },
        { name: "button-text-1", label: "Button Text 1", widget: "string", required: false },
        { name: "button-url-1", label: "Button URL 1", widget: "string", required: false },
        { name: "button-text-2", label: "Button Text 2", widget: "string", required: false },
        { name: "button-url-2", label: "Button URL 2", widget: "string", required: false },
    ],
    fromBlock: function(match) {
        return {
            "title": match[1],
            "text": match[2],
            "button-text-1": match[3],
            "button-url-1": match[4],
            "button-text-2": match[5],
            "button-url-2": match[6],
        };
    },
    toBlock: function(obj) {
        return `{{< text-block title="${obj["title"]}" text="${obj["text"]}" button-text-1="${obj["button-text-1"]}" button-url-1="${obj["button-url-1"]}" button-text-2="${obj["button-text-2"]}" button-url-2="${obj["button-url-2"]}" >}}`;
    },
    toPreview: function(obj) {
        return `{{< text-block title="${obj["title"]}" text="${obj["text"]}" button-text-1="${obj["button-text-1"]}" button-url-1="${obj["button-url-1"]}" button-text-2="${obj["button-text-2"]}" button-url-2="${obj["button-url-2"]}" >}}`;
    },
});

CMS.registerEditorComponent({
    id: "image-block",
    label: "Image Block",
    fields: [{
            name: "image",
            label: "Image",
            widget: "image"
        },
    ],
    pattern: /{{< image-block image="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            image: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< image-block image="${obj.image}" >}}`;
    },
    toPreview: function(obj) {
        return `{{< image-block image="${obj.image}" >}}`;
    },
});

CMS.registerEditorComponent({
    id: "fb-block",
    label: "Facebook Video Block",
    fields: [{
            name: "url",
            label: "Video URL",
            widget: "string"
        },
    ],
    pattern: /{{< fb-block url="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            url: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< fb-block url="${obj.url}" >}}`;
    },
    toPreview: function(obj) {
        return `{{< fb-block url="${obj.url}" >}}`;
    },
});

CMS.registerEditorComponent({
    id: "parallax-block",
    label: "Parallax Block",
    fields: [{
            name: "image",
            label: "Image",
            widget: "image"
        },
    ],
    pattern: /{{< parallax-block image="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            image: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< parallax-block image="${obj.image}" >}}`;
    },
    toPreview: function(obj) {
        return `{{< parallax-block image="${obj.image}" >}}`;
    },
});

CMS.registerEditorComponent({
    id: "cal-block",
    label: "Calendar Block",
    fields: [{
            name: "url",
            label: "Google Calendar URL",
            widget: "string"
        },
    ],
    pattern: /{{< cal-block url="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            url: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< cal-block url="${obj.url}" >}}`;
    },
    toPreview: function(obj) {
        return `{{< cal-block url="${obj.url}" >}}`;
    },
});