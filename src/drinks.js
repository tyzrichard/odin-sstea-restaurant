import { add_menu_header, new_food } from './food.js'
import waffles from './assets/homepage/waffles.png'
import eclair from './assets/drinks/eclair.jpg'
import ice_katchang from './assets/drinks/ice_katchang.png'
import apple_juice from './assets/drinks/apple_juice.png'
import chrysanthemum_tea from './assets/drinks/chrysanthemum-tea.jpg'
import bubble_tea from './assets/drinks/tea.png'

export const drinks_page = () => {
    const drinks = document.createElement("div");
    add_menu_header(drinks, "Drinks and Desserts", "End off the feast with one of our specialty drinks or desserts!");

    const food_list = document.createElement("div");
    food_list.classList.add("food-list");
    new_food(food_list, waffles, "Ice Cream Waffles", "Sweet and Savoury!", ["bestseller", "dessert"]);
    new_food(food_list, eclair, "Chocolate Eclairs", "Comes in sets of three!", ["dessert"]);
    new_food(food_list, ice_katchang, "Ice Katchang", "So. Many. Ingredients!", ["bestseller", "dessert"]);
    new_food(food_list, apple_juice, "Apple Juice", "A children's favourite.", ["drink"]);
    new_food(food_list, chrysanthemum_tea, "Chrysanthemum Tea", "Simple yet invigorating.", ["drink"]);
    new_food(food_list, bubble_tea, "Bubble Tea", "With added brown sugar.", ["bestseller", "drink"]);
    drinks.appendChild(food_list);

    const content = document.querySelector("#content");
    content.appendChild(drinks);
};