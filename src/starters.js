import { add_menu_header, new_food } from './food.js'
import fries from './assets/starters/cheesy_fries.png'
import chicken from './assets/starters/chicken_wings.png'
import mushroom from './assets/starters/mushroom_soup.png'
import spring_rolls from './assets/starters/spring_rolls.png'
import tofu from './assets/starters/tofu.jpg'
import tomato from './assets/starters/tomato_soup.png'

export const starters_page = () => {
    const starters = document.createElement("div");
    add_menu_header("Starters", "Select something to start off the meal with!");

    const food_list = document.createElement("div");
    new_food(food_list, fries, "Cheesy Fries", "Loaded to the brim.", ["Bestseller"]);
    new_food(food_list, fries, "Cheesy Fries", "Loaded to the brim.", ["Bestseller"]);
    new_food(food_list, fries, "Cheesy Fries", "Loaded to the brim.", ["Bestseller"]);
    new_food(food_list, fries, "Cheesy Fries", "Loaded to the brim.", ["Bestseller"]);
    new_food(food_list, fries, "Cheesy Fries", "Loaded to the brim.", ["Bestseller"]);
    new_food(food_list, fries, "Cheesy Fries", "Loaded to the brim.", ["Bestseller"]);

    const content = document.querySelector("#content");
    content.appendChild(starters);
};