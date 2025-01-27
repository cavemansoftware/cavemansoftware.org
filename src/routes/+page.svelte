<script>
import '../fonts.css';
  const links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];
</script>

<div class="outer">
  <div class="container">
    <div class="titlecontainer">
      <h1 class="title">Caveman Software</h1>
      <span class="subtext">Ignorance is Bliss.</span>
    </div>
    <nav>
      {#each links as { name, href }}
        <a {href}>{name}</a>
      {/each}
    </nav>
  </div>
</div>

<style>
  :root {
    background-color: #1f1f1f;
    --accent: #febc7a;
    --title-color: #e9d2f4;
    --subtext-color: #626262;
  }

  .title {
    color: var(--title-color);
    font-size: 3rem;
    font-family: "JetBrains Mono", monospace;
    text-align: center;
    margin: 0;
  }

  .subtext {
    font-family: "Victor Mono", monospace;
    color: var(--subtext-color);
    font-size: 1rem;
  }

  .outer {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .titlecontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  nav {
    display: flex;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  nav a {
    color: var(--accent);
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
    text-decoration: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 4rem; /* Adjusted from 20vw to a more manageable value */
    align-items: center;
  }
</style>
