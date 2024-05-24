export default function SiteLayout({ html }) {
  return html`<site-header></site-header>
    <main><slot></slot></main>
    <site-footer></site-footer>`;
}
