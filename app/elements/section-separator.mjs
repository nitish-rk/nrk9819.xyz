export default function SectionSeparator({ html }) {
  return html`<div>
      <img src="/_public/asterisk.svg" alt="*" draggable="false" />
      <img src="/_public/asterisk.svg" alt="*" draggable="false" />
      <img src="/_public/asterisk.svg" alt="*" draggable="false" />
    </div>

    <style>
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: max-content;
        gap: 6px;
      }

      img {
        height: 6.75px;
        width: auto;
      }
    </style> `;
}
