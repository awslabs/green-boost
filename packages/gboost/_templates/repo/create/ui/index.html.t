---
to: ui/index.html
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- https://realfavicongenerator.net/ -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#32d378">
    <meta name="msapplication-TileColor" content="#00a300">
    <meta name="theme-color" content="#32d378">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%%- VITE_APP_TITLE %%></title>
  </head>
  <body>
    <div id="app"></div>
    <%% if (!PROD) { %%>
      <script>
        // https://ui.docs.amplify.aws/getting-started/installation#vite
        window.global = window;
        window.process = { env: { DEBUG: undefined } };
        const exports = {};
      </script>
    <%% } %%>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
