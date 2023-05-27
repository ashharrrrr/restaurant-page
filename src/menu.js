import coldBrew from "./assets/coldbrew.jpg";
import americano from "./assets/americano.jpg";
import bobaTea from "./assets/bobaTea.jpg";
import hotChocolate from "./assets/hotChocolate.jpg";

export default function menu() {
  const cardDetails = [
    {
      image: coldBrew,
      heading: "Cold Brew",
      price: "USD 14.99",
    },
    {
      image: americano,
      heading: "Americano",
      price: "USD 9.99",
    },
    {
      image: bobaTea,
      heading: "Boba Tea",
      price: "USD 22.99",
    },
    {
      image: hotChocolate,
      heading: "Hot Chocolate",
      price: "USD 9.99",
    },
  ];

  const contentDiv = document.querySelector("#content");
  const lowerButtons = document.querySelector(".lower-btn");
  const hero = document.createElement("div");
  hero.id = "hero";
  hero.classList.add("menu");
  const cards = document.createElement("div");
  cards.classList.add("cards");

  cardDetails.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    const cardHeading = document.createElement("h3");
    const cardPrice = document.createElement("p");
    cardImage.src = item.image;
    cardHeading.textContent = item.heading;
    cardPrice.textContent = item.price;
    card.append(cardImage, cardHeading, cardPrice);
    cards.append(card);
  });

  hero.append(cards);

  contentDiv.insertBefore(hero, lowerButtons);
}
