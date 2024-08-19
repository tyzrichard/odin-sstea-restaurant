import { add_menu_header, new_food } from './food.js'
import pizza from './assets/homepage/pizza.png'
import burger from './assets/meals/burger.png'
import crab from './assets/homepage/chili_crab.png'
import maki_roll from './assets/homepage/maki_roll.png'
import pasta from './assets/homepage/pasta.png'
import ramen from './assets/meals/ramen.png'

export const meals_page = () => {
    const meals = document.createElement("div");
    meals.classList.add("menu");
    add_menu_header(meals, "Main Courses", "Seeking a good meal? Look no further than our catalogue of dishes, guaranteed to satiate that appetite!");

    const food_list = document.createElement("div");
    food_list.classList.add("food-list");
    new_food(food_list, pizza, "Hawaiian Pizza", "The Pan-Fried Classic.", ["bestseller"]);
    new_food(food_list, burger,  "The Impossible", "100% Vegetarian!", ["vegetarian"]);
    new_food(food_list, crab, "Chili Crab", "Hot and spicy seafood.", ["bestseller", "spicy"]);
    new_food(food_list, maki_roll, "Maki Roll", "A timeless Japanese dish.", ["bestseller"]);
    new_food(food_list, pasta, "Aglio Oglio", "Pasta with a hint of spice.", ["bestseller", "spicy"]);
    new_food(food_list, ramen, "Tonkutsu Ramen", "Aromatic, filling noodles.", []);
    meals.appendChild(food_list);

    const content = document.querySelector("#content");
    content.appendChild(meals);
};