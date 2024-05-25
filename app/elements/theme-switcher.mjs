export default function ThemeSwitcher({ html }) {
  return html`<button type="button" class="light icon-btn">
      <icon-sun class="icon"></icon-sun>
    </button>
    <button type="button" class="dark icon-btn">
      <icon-moon class="icon"></icon-moon>
    </button>`;
}
