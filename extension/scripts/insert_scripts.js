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
        Constants.bootstrap_stylesheet_link,
        Constants.bootstrap_integrity,
        Constants.bootstrap_origin
    );

},200)