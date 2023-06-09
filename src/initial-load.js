export default function home() {
  const contentDiv = document.querySelector("#content");

  const hero = document.createElement("div");
  const heroText = document.createElement("p");

  hero.id = "hero";
  hero.classList.add('home')

  heroText.textContent =
    "Welcome to Mow's Cafe, where feline charm meets leisurely indulgence! Step into our cozy sanctuary, inspired by the irresistible allure of lazy cats. Nestled in the heart of New York, our cafe offers a unique retreat from the hustle and bustle of everyday life. From the moment you enter, you'll be enveloped by a serene ambiance that evokes the tranquil spirit of our feline companions. Indulge in our delightful assortment of beverages and delectable treats, crafted with love and care. Join us as we celebrate the art of slowing down, one lazy stretch at a time.";
  heroText.classList.add("heroText");

  hero.append(heroText);

  const home = document.createElement('div');
  home.append(hero);

  contentDiv.append(home);
}
