export default function SectionLandingHero({ html }) {
  return html`<section>
    <div class="intro">
      <h1>
        <span class="dim">Heya,&#8197;</span>I'm NRK<span>&numsp;</span
        ><span class="inline-img"
          ><img
            src="/_public/avatar.svg"
            alt="nrk 9819 avatar"
            draggable="false"
        /></span>
      </h1>
      <h2>
        I'm a designer&#8197;<span class="inline-img">
          <ul class="stack">
            <li class="card" data-position="1">
              <icon-compass class="icon"></icon-compass>
            </li>
            <li class="card" data-position="2">
              <icon-ruler class="icon"></icon-ruler>
            </li>
            <li class="card" data-position="3">
              <icon-pen class="icon"></icon-pen>
            </li></ul></span
        ><span class="dim">&nbsp;and&#8197;</span>developer&#8197;<span
          class="monitor inline-img"
        >
          <span class="bevel">
            <span class="screen">
              <span class="text">$&nbsp;<span class="typing"></span></span>
            </span>
          </span>
        </span>
      </h2>
    </div>
    <section-separator></section-separator>
    <div class="description">
      <p>
        I have almost six years of experience working with various technologies
        in UI design and Web development.
      </p>
      <p>
        Currently I'm working on my personal project called
        <a href="https://kttythemes.com"
          >KittyThemes&nbsp;<span class="inline-img"
            ><icon-kitty class="icon"></icon-kitty></span></a
        >. At KittyThemes, I design and build themes for Ghost, Astro and
        Enhance.
      </p>
    </div>
    <section-separator></section-separator>
    <div class="work">
      <p>I often work with -</p>
      <div class="skills">
        <div class="card"><icon-php class="icon"></icon-php></div>
        <div class="card"><icon-postgres class="icon"></icon-postgres></div>
        <div class="card"><icon-figma class="icon"></icon-figma></div>
        <div class="card"><icon-lambda class="icon"></icon-lambda></div>
        <div class="card"><icon-typescript class="icon"></icon-typescript></div>
        <div class="card">
          <icon-illustrator class="icon"></icon-illustrator>
        </div>
        <div class="card"><icon-photoshop class="icon"></icon-photoshop></div>
      </div>
    </div>
    <load-script
      src="/_public/browser/landing-hero.mjs"
      load-on="idle"
    ></load-script>
  </section>`;
}
