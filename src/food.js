import bestseller from './assets/general_meal/bestseller.png';
import vegetable from './assets/general_meal/vegetable.png';
import spicy from './assets/general_meal/spicy.png';
import dessert from './assets/general_meal/dessert.png';
import drink from './assets/general_meal/drink.png';

export const add_menu_header = (mainheader, subheader) => {
    const menu_header = document.createElement("div");
    menu_header.classList.add("menu-header");

    const menu_main_header = document.createElement("h2");
    menu_main_header.textContent = mainheader;
    menu_header.appendChild(menu_main_header);

    const menu_sub_header = document.createElement("h3");
    menu_sub_header.classList.add("menu-sub-header");
    menu_sub_header.textContent = subheader;
    menu_header.appendChild(menu_sub_header);
}

export const new_food = (group, foodImg, foodName, foodDesc, extraInfo) => {
    const food = document.createElement("div");

    //Image of the food
    const food_image = document.createElement("img");
    food_image.src = foodImg;
    food.appendChild(food_image);

    //Textual Information
    const food_info = document.createElement("div");
    const food_name = document.createElement("h5");
    food_name.textContent = foodName;
    food_info.appendChild(food_name);

    const food_desc = document.createElement("h6");
    food_desc.textContent = foodDesc;
    food_info.appendChild(food_desc);
    food.appendChild(food_info);

    //Extra Information
    const extra_info = document.createElement("div");

    function addExtraInfo(logo, info){
        const extra_info_bit = document.createElement("div");
        const extra_info_text = document.createElement("p");
        extra_info_text.classList.add("extra-info-text");
        extra_info_text.textContent = info;
        extra_info_bit.appendChild(extra_info_text);

        const extra_info_logo = document.createElement("img");
        extra_info_logo.src = logo;
        extra_info_bit.appendChild(extra_info_logo);
        extra_info.appendChild(extra_info_bit);
    }

    for (const i of extraInfo) {
        if (i == "bestseller") {
            addExtraInfo(bestseller, "Bestseller");
        } else if (i == "vegetarian") {
            addExtraInfo(vegetable, "Vegetarian");
        } else if (i == "spicy") {
            addExtraInfo(spicy, "Spicy");
        } else if (i == "dessert") {
            addExtraInfo(dessert, "Dessert");
        } else {
            addExtraInfo(drink, "Drink");
        }
    }

    food.appendChild(extra_info)

    group.appendChild(food);
};