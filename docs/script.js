console.log("screen-cleaner");

function clearElements() {
    var elements = document.getElementsByTagName("element");
    for (const element of elements) {
        element.style.display = "none";
    }
}

function requestFullScreen() {
    var body = document.body;
    var requestMethod = body.requestFullScreen || body.webkitRequestFullScreen || body.mozRequestFullScreen || body.msRequestFullScreen;

    if (requestMethod) { 
        requestMethod.call(body);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");

        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function goFullScreen(color) {
    console.log("goFullScreen || color =", color);

    switch (color) {
        case "white":
            clearElements();
            document.body.style.backgroundColor = color;
            requestFullScreen();
            break;

        case "black":
            clearElements();
            document.body.style.backgroundColor = color;
            requestFullScreen();
            break;

        case "red":
            clearElements();
            document.body.style.backgroundColor = color;
            requestFullScreen();
            break;

        case "green":
            clearElements();
            document.body.style.backgroundColor = color;
            requestFullScreen();
            break;
        
        case "blue":
            clearElements();
            document.body.style.backgroundColor = color;
            requestFullScreen();
            break;
    }
}