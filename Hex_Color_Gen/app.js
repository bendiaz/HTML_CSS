function getColor() {
    return (

        "#" +
        Math.random()
        .toString(16)
        .slice(2, 8)
    );
}

function setBackground() {
    var bgColor = getColor();
    document.body.style.background = bgColor;
}
// document.write(getColor());
document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        setBackground();
    }
};
// setBackground();