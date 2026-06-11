import { html, render } from "https://unpkg.com/lit-html?module";
import { jsonCards } from "../json/jsonCards.js";
import { jsonProductsCard } from "../json/jsonProductsCard.js";
import { Card } from "./components/card.js";

import items from "./components/accordions.js";
import brands from "./components/brands.js";
import titles from "./components/tittle.js";
import NavLinks from "./components/linksList.js";

// Barra de Navegação
NavLinks();

// CARDS NA SECAO SERVICES
const Cards = () => html` ${jsonCards.map((i) => Card(i))} `
const cardElement = document.getElementById("cards");
render(Cards(), cardElement);



// CARDS NA SECAO PRODUCTS
const ProductsCards = () => html` ${jsonProductsCard.map((i) => Card(i))} `
const productsCardElement = document.getElementById("products-cards");
render(ProductsCards(), productsCardElement);