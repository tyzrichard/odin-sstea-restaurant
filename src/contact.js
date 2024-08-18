import chef from "./assets/contact/chef.jpg"
import manager from "./assets/contact/manager.jpg"
import waiter from "./assets/contact/waiter.jpg"

export const contact_page = () => {
    const contact = document.createElement("div");

    //SSTea Inc Crew Section
    const crew_section = document.createElement("div");
    crew_section.classList.add("crew-section");

    const crew_section_title = document.createElement("h2");
    crew_section_title.textContent = "The SSTea. Inc Crew"
    crew_section.appendChild(crew_section_title);

    const crew_members = document.createElement("div");

    function add_member(memberImg, memberName, memberPos) {
        const member = document.createElement("div");

        const member_img = document.createElement("img");
        member_img.src = memberImg;
        member.appendChild(member_img);

        const member_info = document.createElement("div");
        const member_name = document.createElement("h3");
        member_name.textContent = memberName;
        member_info.appendChild(member_name);

        const member_pos = document.createElement("p");
        member_pos.textContent = memberPos;
        member_info.appendChild(member_pos);

        member.appendChild(member_info);
        crew_members.appendChild(member);
    }

    add_member(manager, "Johnny Appleseed", "Manager");
    add_member(waiter, "Jane Hill", "Senior Waiter");
    add_member(chef, "Tom Harris", "Head Chef");

    crew_section.appendChild(crew_members);
    contact.appendChild(crew_section);

    //The actual Contact Us Section
    const contact_section = document.createElement("div");
    contact_section.classList.add("contact-section");

    const contact_header = document.createElement("h2");
    contact_header.textContent = "Feel like dining at SSTea Inc already? Reserve a table in advance!";
    contact_section.appendChild(contact_header);

    const contact_form = document.createElement("form");

    function addQn(topic, question, type) {
        const qn = document.createElement("div");
        qn.classList.add("question");

        const question_header = document.createElement("label");
        question_header.for = topic;
        question_header.textContent = question;
        qn.appendChild(question_header);

        const answer = document.createElement("input");
        answer.type = type;
        answer.id = topic;
        answer.name = topic;
        qn.appendChild(answer);

        contact_form.appendChild(qn);
    }

    addQn("name", "Your Name", "text");
    addQn("number", "Phone Number", "tel");
    addQn("date", "Date", "date");
    addQn("time", "Time", "time");
    addQn("extras", "Anything else you would like to tell us", "text");

    const submit_button = document.createElement("input");
    submit_button.type = "submit";
    submit_button.value = "Submit";
    submit_button.addEventListener("click", () => {
        event.preventDefault();
        const formData = new FormData(contact_form);
        const formValues = [];
        formData.forEach((value) => {
            formValues.push(value);
        });
        contact_form.reset();
        alert(`Hey ${formValues[0]}, we have received your reservation on ${formValues[2]}, at ${formValues[3]}. See you there!`);
    })
    contact_form.appendChild(submit_button);

    contact_section.appendChild(contact_form);
    contact.appendChild(contact_section);

    //Adding contact page to content
    const content = document.querySelector("#content");
    content.appendChild(contact);
};