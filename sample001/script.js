const button = document.getElementById("btn");
const title = document.getElementById("title");

button.addEventListener("click", () => {
    title.textContent = "Button Clicked!";
    title.style.color = "green";
});
