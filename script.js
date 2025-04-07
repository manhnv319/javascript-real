const title = document.getElementById("title");
const button = document.getElementById('changeTextButton');

const titleDefault = title.textContent;
const titleDefaultColor = title.style.color;

let isChanged = false;

button.addEventListener('click', function() {
    if (isChanged) {
        title.textContent = titleDefault;
        title.style.color = titleDefaultColor;
        isChanged = false;
    } else {
        title.textContent = "Text has been changed!";
        title.style.color = "red";
        isChanged = true;
    }
});