function make_link(rel,link,integrity,origin){
    var linkElement = document.createElement('link');
    linkElement.rel = rel;
    linkElement.href = link;
    linkElement.integrity = integrity;
    linkElement.crossOrigin = origin;

    document.head.appendChild(linkElement);

}

setTimeout(function() {

    make_link(
        "stylesheet",
        "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
        "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
        "anonymous"
    );

},200)