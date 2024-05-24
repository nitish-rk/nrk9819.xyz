export default function SiteHeader({ html }) {
  return html`<header>
    <div class="logo">
      <a href="/" draggable="false">
        <img
          src="/_public/logo.webp"
          alt="nrk9819 site logo"
          draggable="false"
        />
      </a>
    </div>
    <div class="menu-container">
      <input
        type="checkbox"
        class="menu-toggle"
        aria-role="button"
        aria-label="Toggle header menu"
      />
      <div class="dots">
        <span class="dot one"></span>
        <span class="dot two"></span>
        <span class="dot three"></span>
      </div>
      <div class="menu-modal hidden">
        <nav aria-label="Header menu">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li class="current">
              <a href="/feed">RSS Feed</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>`;
}
