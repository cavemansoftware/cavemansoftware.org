<script>
  import "../fonts.css";
</script>

<main>
  <div id="title">
    <h1>Caveman Software</h1>
  </div>
  <p>
    we love open source! also, check out <a
      href="https://github.com/cavemansoftware/caveman-linux"
      id="caveman-linux"
    >
      caveman linux</a
    >
  </p>
</main>

<style>
  * {
    text-decoration: none;
  }
  :global(body) {
    display: grid;
    grid-template-columns: 1fr min(47rem, 90%) 1fr;
    background-color: var(--background-color);
    color: var(--text-color);
    --background-color: #1f1f1f;
    --accent: #ffab91;
    --title-color: #dde1e6;
    --subtext-color: #dde1e6;
    font-family: "Sans", monospace;
    scrollbar-color: var(--accent) #1f1f1f;
    scrollbar-width: thin;
  }

  #caveman-linux {
    color: var(--accent);
  }
  h1 {
    margin-top: 0;
  }

  main {
    width: 100%;
    grid-row: 2;
    grid-column: 2;
    color: var(--subtext-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-wrap: wrap;
  }

  main > p {
    width: 1rem;
    overflow-wrap: break-word;
    width: 100%;
    text-align: center;
  }
  #title {
    font-size: 2rem;
    color: var(--title-color);
  }
</style>
