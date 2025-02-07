<script>
  import "../fonts.css";
</script>

<header>
  <nav id="navbar">
    <a href="/poo"> /poo/</a>
    <a href="/projects"> /projects/</a>
    <a href="/about">/about/</a>
  </nav>
</header>
<main>
  <div id="title">
    <h1>Overview</h1>
  </div>
  <p>
    hawk tuah rizz fein kai. kai tuah rizz fein hawk. rizz fein hawk tuah kai.
  </p>
</main>

<style>
  :root {
    background-color: #1f1f1f;
    color: var(--text-color);
    --accent: #febc7a;
    --title-color: #e9d2f4;
    --subtext-color: #626262;
    font-family: "Fira Sans", monospace;
    scrollbar-color: var(--accent) #1f1f1f;
    scrollbar-width: thin;
  }
  a,
  a:visited {
    color: var(--accent);
    text-decoration: none;
  }
  main {
    color: var(--accent);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #title {
    font-size: 2rem;
    color: var(--title-color);
  }

  #navbar {
    padding: 0.75rem;
    gap: 0.25rem;
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    align-items: center;
  }
</style>
