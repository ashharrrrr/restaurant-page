import home from "./initial-load";
import menu from "./menu";
import contact from "./contact";
import clean from "./clean";

const contentDiv = document.querySelector('#content');

home();

const menubtn = document.createElement('button');
const contactbtn = document.createElement('button');

menubtn.textContent = "MENU";
menubtn.classList.add('menu-button');

contactbtn.textContent = "CONTACT US";
contactbtn.classList.add('contact');

const lowerButtons = document.createElement('div');
lowerButtons.classList.add('lower-btn');

lowerButtons.append(menubtn);
lowerButtons.append(contactbtn);

contentDiv.append(lowerButtons);

menubtn.addEventListener('click', () => {
    clean();
    menu();
})

contactbtn.addEventListener('click', () => {
    clean();
    contact();
})