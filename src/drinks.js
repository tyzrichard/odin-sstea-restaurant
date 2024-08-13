export const drinks_page = () => {
    const content = document.querySelector("#content");
    const drinks = document.createElement("div");
    drinks.textContent = "drinks";
    content.appendChild(drinks);
};