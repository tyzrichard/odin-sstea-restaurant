import homepage_header_img from "./assets/homepage/restaurant.png";
import chili_crab from "./assets/homepage/chili_crab.png";
import maki_roll from "./assets/homepage/maki_roll.png";
import pasta from "./assets/homepage/pasta.png";
import pizza from "./assets/homepage/pizza.png";
import waffles from "./assets/homepage/waffles.png";

export const home_page = () => {
    const home = document.createElement("div");

    //Homepage Header
    const homepage_header = document.createElement("div");
    homepage_header.classList.add("homepage-header");

    const homepage_header_info = document.createElement("div");

    const header_title = document.createElement("h1");
    header_title.textContent = "Feeling Hungry? \r\nYou’ve come to the right place.";
    homepage_header_info.appendChild(header_title);

    const header_text = document.createElement("h5");
    header_text.textContent = "Located deep within the mystic SSTraits of Dover, SSTea Inc. has captured the hearts of many with their wide range of exquisite meals. Our services are second to none, and our dishes are guaranteed to satisfy your cravings. Book a table today!";
    homepage_header_info.appendChild(header_text);

    const header_button = document.createElement("button");
    header_button.textContent = "Browse our Menu";
    homepage_header_info.appendChild(header_button);

    homepage_header.appendChild(homepage_header_info);

    const homepage_img = document.createElement("img");
    homepage_img.src = homepage_header_img
    homepage_img.classList.add("homepage-img");
    homepage_header.appendChild(homepage_img);

    home.appendChild(homepage_header);

    //Recommendations
    const recommendations = document.createElement("div");
    recommendations.classList.add("recommendations");

    const recommendations_text = document.createElement("h2");
    recommendations_text.textContent = "Chef's Recommendations";
    recommendations.appendChild(recommendations_text);

    const dishes = document.createElement("div");
    dishes.classList.add("recommended-dishes");

    function addDish (dishName, dishImg) {
        const dish = document.createElement("div");
        dish.classList.add("homepage-dish");

        const dish_img = document.createElement("img");
        dish_img.src = dishImg;
        dish.appendChild(dish_img);

        const dish_name = document.createElement("h5");
        dish_name.textContent = dishName;
        dish.appendChild(dish_name);

        dishes.append(dish);
    };

    addDish("Hawaiian Pizza", pizza);
    addDish("Aglio Oglio", pasta);
    addDish("Maki Roll", maki_roll);
    addDish("Chili Crab", chili_crab);
    addDish("Ice Cream Waffles", waffles);

    recommendations.appendChild(dishes);
    home.appendChild(recommendations);

    //Quotation Section
    const quotation = document.createElement("div");
    quotation.classList.add("quotation");

    const quote = document.createElement("div");
    quote.classList.add("quote");
    quote.textContent = "SSTea Incorporated is THE BEST out there! 10 out of 10, would highly recommend! I love their food, and everyone should give this place a shot. You won’t regret it!";
    quotation.appendChild(quote);

    const quote_author = document.createElement("h5");
    quote_author.textContent = "-Mr Nivaw Lapgaw, satisfied customer";
    quotation.appendChild(quote_author);

    home.appendChild(quotation);

    // Call To Action
    const cta_section = document.createElement("div");
    cta_section.classList.add("cta-section");

    const cta = document.createElement("div");
    cta.classList.add("cta");

    const cta_text = document.createElement("div");
    cta_text.classList.add("cta-text");

    const cta_text_top = document.createElement("h4");
    cta_text_top.textContent = "What are you waiting for?";
    cta_text.appendChild(cta_text_top);

    const cta_text_bottom = document.createElement("p");
    cta_text_bottom.textContent = "Visit our outlet at the SSTraits of Dover and experience a dining experience like never before!"
    cta_text.appendChild(cta_text_bottom);

    cta.appendChild(cta_text);

    const cta_button = document.createElement("button");
    cta_button.textContent = "Book a Table";
    cta.appendChild(cta_button);

    cta_section.appendChild(cta);
    home.appendChild(cta_section);

    //Adding home to content
    const content = document.querySelector("#content");
    content.appendChild(home);
};