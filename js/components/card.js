import { html, render } from "https://unpkg.com/lit-html?module";

const themeComponent = {
  light: "icon-light",
  dark: "icon",
  white: "#fff",
  black: "#000",
};

export function Card({ ...props }) {
  const { light: t, dark: e, white: s, black: l } = themeComponent,
    r = props.isLight ? t : e,
    g = props.isLight ? s : l;

  return html`
    <div class="card ${props.bg}">
      <div class="card_description">
        <div>
          <h3 class="title__h3 ${props.bgTitle}">${props?.firstTitle}</h3>
          <br />
          <h3 class="title__h3 ${props.bgTitle}">${props?.secondTitle}</h3>
        </div>
        <a class="card__link" href="${props.toGoUrl}">
          <img src="./assets/img/cards/${r}.svg" alt="clicar" />
          <p style="color: ${g}">Lean More</p>
        </a>
      </div>
      <img src="${props.imgUrl}" alt="Search" class="card__img" />
    </div>
  `;
}