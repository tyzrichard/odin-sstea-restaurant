export const meals_page = () => {
    const content = document.querySelector("#content");
    const meals = document.createElement("div");
    meals.textContent = "meals";
    content.appendChild(meals);
};