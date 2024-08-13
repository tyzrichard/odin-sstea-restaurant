export const starters_page = () => {
    const content = document.querySelector("#content");
    const starters = document.createElement("div");
    starters.textContent = "starters";
    content.appendChild(starters);
};