export default function contact(){
    
  const contentDiv = document.querySelector("#content");
  const lowerButtons = document.querySelector(".lower-btn");
  const hero = document.createElement("div");
  hero.id = "hero";
  hero.classList.add("contacts");

  const contactUs = document.createElement('div');
  contactUs.classList.add('contact-us');

  const address = document.createElement('p');
  address.textContent = "308 Negra Arroyo Lane, Albuquerque, New Mexico"  

  const number = document.createElement('p');
  number.textContent = '1-800-225-5324';

  contactUs.append(address, number);
  hero.append(contactUs);

  contentDiv.insertBefore(hero, lowerButtons);
}