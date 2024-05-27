export default function Head({ store }) {
  const { metadata = {} } = store;
  const {
    url = "https://nrk9819.xyz",
    title = "",
    description = "",
    image = "/_public/default-og.webp",
    alt = "",
  } = metadata;

  return `<!DOCTYPE html>
<html lang="en">
    <head>
      <!-- Script to set color theme -->
      <script>
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const localTheme = localStorage.getItem('theme') ?? systemTheme;
        document.documentElement.setAttribute('data-theme', localTheme);
      </script>
      <!-- Global Metadata -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="generator" content="Enhance 1.2.0">
      <link rel="icon" type="image/svg+xml" href="/_public/avatar.svg">
      <!-- Page Metadata -->
      <title>${title}</title>
      <meta name="description" content="${description}">
      <link rel="canonical" href="${url}">
      <!-- OG Tags -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="${url}">
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${image}">
      <meta property="og:image:alt" content="${alt}">
      <!-- Twitter Tags -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:description" content="${description}">
      <meta name="twitter:image" content="${image}">
      <meta name="twitter:image:alt" content="${alt}">
      <!-- Styles -->
      <link rel="stylesheet" href="/_public/global.css">
      <link rel="stylesheet" href="/_public/variables.css">
      <link rel="stylesheet" href="/_public/screen.css">
    </head>
</html>`;
}
