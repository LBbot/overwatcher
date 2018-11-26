"use strict";

function toggler() {
    const csslink = document.getElementById("styler");
    if (csslink.href.match("flex.css")) {
        csslink.href = "grid.css";
        document.title = "Overwatcher GRID"
    }
    else {
        csslink.href = "flex.css";
        document.title = "Overwatcher FLEXBOX"
    }
}

const toggleLink = document.querySelector(".toggleclass");
toggleLink.addEventListener("click", toggler);
