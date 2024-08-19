import { add_menu_header, new_food } from './food.js'
import fries from './assets/starters/cheesy_fries.png'
import chicken from './assets/starters/chicken_wings.png'
import mushroom from './assets/starters/mushroom_soup.png'
import spring_rolls from './assets/starters/spring_rolls.png'
import tofu from './assets/starters/tofu.jpg'
import tomato from './assets/starters/tomato_soup.png'

export const starters_page = () => {
    const starters = document.createElement("div");
    starters.classList.add("menu");
    add_menu_header(starters, "Starters", "Select something to start off the meal with!");

    const food_list = document.createElement("div");
    food_list.classList.add("food-list");
    new_food(food_list, fries, "Cheesy Fries", "Loaded to the brim.", ["bestseller"]);
    new_food(food_list, mushroom, "Mushroom Soup", "Creamy and filling soup.", ["vegetarian"]);
    new_food(food_list, tomato, "Tomato Soup", "Tasty and refreshing!", ["bestseller", "vegetarian"]);
    new_food(food_list, chicken, "Chicken Wings", "Tender and juicy.", []);
    new_food(food_list, spring_rolls, "Spring Rolls", "A Vietnamese must-have.", ["bestseller"]);
    new_food(food_list, tofu, "Tofu with Century Egg", "A perfect blend of flavours.", ["bestseller"]);
    starters.appendChild(food_list);

    const content = document.querySelector("#content");
    content.appendChild(starters);
};