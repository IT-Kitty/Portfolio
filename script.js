let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");


    if (theme.getAttribute("href") == "style-light-theme.css") {
        theme.href = "style-dark-theme.css"
    } else {
        theme.href = "style-light-theme.css"
    }
}