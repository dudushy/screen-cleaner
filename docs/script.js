console.log("screen-cleaner");

const divBackground = document.querySelector("#background");

document.addEventListener("fullscreenchange", function() {
	if(document.fullscreenElement !== null) {
        console.log("FULLSCREEN [ON]");
        hideElements();
    } else {
        console.log("FULLSCREEN [OFF]");
        showElements();

        changeBackgroundColor(divBackground, "default");
    }
});

function showElements() {
    console.log("showElements");

    var elements = document.getElementsByClassName("element");
    // console.log("elements", elements);

    for (const element of elements) {
        // console.log("element", element);
        element.style.display = "block";
    }
}

function hideElements() {
    console.log("hideElements");

    var elements = document.getElementsByClassName("element");
    // console.log("elements", elements);

    for (const element of elements) {
        // console.log("element", element);
        element.style.display = "none";
    }
}

function changeBackgroundColor(element, color) {
    if (color == "default") {
        element.style.backgroundColor = "#000000";
    } else {
        element.style.backgroundColor = color;
    }
}

function elementFullScreen(element, color) {
    element.requestFullscreen()
        .then(function () {
            console.log("requestFullscreen [SUCCESS]");

            changeBackgroundColor(divBackground, color);
        })
        .catch(function (error) {
            console.log("requestFullscreen [ERROR]", error.message);
        });
}

function goFullScreen(color) {
    console.log("goFullScreen || color =", color);

    elementFullScreen(divBackground, color);
}