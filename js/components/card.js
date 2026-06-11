import{html,render}from"https://unpkg.com/lit-html?module";const themeComponent={light:"icon-light",dark:"icon",white:"#fff",black:"#000"};function cardRender({...i}){const{light:t,dark:e,white:s,black:l}=themeComponent,r=i.isLight?t:e,g=i.isLight?s:l;return html`
    <div class="card ${i.bg}">
      <div class="card_description">
        <div>
          <h3 class="title__h3 ${i.bgTitle}">${i?.firstTitle}</h3> <br>
          <h3 class="title__h3 ${i.bgTitle}">${i?.secondTitle}</h3>
        </div>
        <a class="card__link" href="${i.toGoUrl}">
          <img src="./assets/img/cards/${r}.svg" alt="clicar">
          <p style="color: ${g}">Lean More</p>
        </a>
      </div>
      <img src="${i.imgUrl}" alt="Search" class="card__img">
    </div>
  `}const cardsDesc=[{bg:"bg-white",bgTitle:"bg-lemon",imgUrl:"./assets/img/cards/img-3.svg",toGoUrl:"#",firstTitle:"Search engine",secondTitle:"optimization",isLight:!1},{bg:"bg-lemon",bgTitle:"bg-white",imgUrl:"./assets/img/cards/img-5.svg",toGoUrl:"#",firstTitle:"Pay-per-click",secondTitle:"optimization",isLight:!1},{bg:"bg-dark",bgTitle:"bg-white",imgUrl:"./assets/img/cards/img.svg",toGoUrl:"#",firstTitle:"Social Media",secondTitle:"Marketing",isLight:!0},{bg:null,bgTitle:"bg-lemon",imgUrl:"./assets/img/cards/img-6.svg",toGoUrl:"#",firstTitle:"Email",secondTitle:"Marketing",isLight:!1},{bg:"bg-lemon",bgTitle:"bg-lemon",imgUrl:"./assets/img/cards/img-4.svg",toGoUrl:"#",firstTitle:"Content",secondTitle:"Creation",isLight:!1},{bg:"bg-dark",bgTitle:"bg-white",imgUrl:"./assets/img/cards/img-2.svg",toGoUrl:"#",firstTitle:"Analytics and",secondTitle:"Tracking",isLight:!0}],Cards=()=>html`
  ${cardsDesc.map((i=>cardRender(i)))}
`,cardElement=document.getElementById("cards");render(html`
  ${cardsDesc.map((i=>cardRender(i)))}
`,cardElement);export default cardsDesc;