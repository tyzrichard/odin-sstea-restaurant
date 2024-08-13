export const home_page = () => {
    const content = document.querySelector("#content");
    const home = document.createElement("div");
    home.textContent = "home";
    content.appendChild(home);
};