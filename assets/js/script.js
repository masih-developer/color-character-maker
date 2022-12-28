const $ = document;
const faceBtn = $.getElementById("face-btn");
const colorBtn = $.getElementById("color-btn");
const hornsBtn = $.getElementById("horns-btn");
const tailBtn = $.getElementById("tail-btn");
const faceImg = $.getElementById("face");

let faces = ["face-0.png", "face-1.png", "face-2.png", "face-3.png", "face-4.png", "face-5.png"];
let bodyColors = ["#a8d530", "#42aaff", "#f3d55b", "#ff4f51", "#904ae8", "#ffa711"];
let colors = [...bodyColors, "transparent"];
let rootElemproperty = document.documentElement;
let [faceCounter, colorCounter, hornsCounter, tailCounter] = Array(4).fill(0);

const setCounter = (counter, length) => {
    return counter < length - 1 ? counter + 1 : 0;
};

faceBtn.addEventListener("click", () => {
    faceCounter = setCounter(faceCounter, faces.length);
    faceImg.src = `assets/images/${faces[faceCounter]}`;
});

colorBtn.addEventListener("click", () => {
    colorCounter = setCounter(colorCounter, bodyColors.length);
    rootElemproperty.style.setProperty("--color-character", bodyColors[colorCounter]);
});

hornsBtn.addEventListener("click", () => {
    hornsCounter = setCounter(hornsCounter, colors.length);
    rootElemproperty.style.setProperty("--color-horns", colors[hornsCounter]);
});

tailBtn.addEventListener("click", () => {
    tailCounter = setCounter(tailCounter, colors.length);
    rootElemproperty.style.setProperty("--color-tail", colors[tailCounter]);
});
