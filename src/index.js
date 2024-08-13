import "./styles.css";
import { home_page } from "./homepage.js";
import { starters_page } from "./starters.js";
import { meals_page } from "./meals.js";
import { drinks_page } from "./drinks.js";
import { contact_page } from "./contact.js";

const buttons = document.querySelectorAll("button");
const content = document.querySelector("#content");
buttons.forEach((button) => {
    const button_class = button.getAttribute("class");
    button.addEventListener("click", () => {
        while(content.firstChild) { 
            content.removeChild(content.firstChild); 
        } 
        if (button_class == "home") {
            home_page();
        } else if (button_class == "starters") {
            starters_page();
        } else if (button_class == "meals") {
            meals_page();
        } else if (button_class == "drinks") {
            drinks_page();
        } else {
            contact_page();
        }
    })
});

home_page();