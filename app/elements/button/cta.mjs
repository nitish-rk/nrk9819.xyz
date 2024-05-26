export default function ButtonCta({ html, state }) {
  const { attrs } = state;
  const { link = "#" } = attrs;

  return html`<a role="button" href="${link}"
    ><span><slot></slot></span>
    <div class="sky">
      <div class="starfield">
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
      </div>
      <div class="starfield">
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
        <img class="star" src="/_public/star.svg" />
      </div>
    </div>
  </a>`;
}
