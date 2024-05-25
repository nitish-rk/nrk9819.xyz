export default function SiteFoter({ html }) {
  return html`<footer>
    <div class="top">
      <div class="info">
        <h2>
          Looking for beautiful and performant
          <span class="gradient">templates</span> for your next or existing
          venture ?
        </h2>
        <h2>
          Have a look at KittyThemes
          <span class="inline-img"
            ><img
              src="/_public/kitty-themes.webp"
              alt="kitty themes"
              draggable="false"
          /></span>
        </h2>
      </div>
      <button-cta>Visit KittyThemes</button-cta>
    </div>
    <div class="bottom">
      <div class="socials">
        <div class="label">My Socials</div>
        <div class="links">
          <a role="button" class="icon-btn" target="_blank" href="https://dribbble.com/nrk9819"
            ><icon-dribbble class="icon"></icon-dribbble
          ></a>
          <a role="button" class="icon-btn" target="_blank" href="https://www.reddit.com/user/nrkishere/"
            ><icon-reddit class="icon"></icon-reddit
          ></a>
          <a role="button" class="icon-btn" target="_blank" href="https://github.com/nrk9819"><icon-github class="icon"></icon-github></a>
          <a role="button" class="icon-btn" target="_blank" href=https://mastodon.social/@nrk9819"
            ><icon-mastodon class="icon"></icon-mastodon
          ></a>
        </div>
      </div>
      <div class="theme">
        <div class="label">Theme</div>
        <div class="switchers">
         
        </div>
      </div>
    </div>
  </footer>`;
}
