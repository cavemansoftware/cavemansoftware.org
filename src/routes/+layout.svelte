<script lang="ts">
  let { children } = $props();
</script>

<nav>
  <a href="/"> /home/</a>
  <a href="/projects"> /projects/</a>
  <a href="/about">/about/</a>
</nav>
{@render children()}

<style>
  a:hover {
    border-radius: 0.15rem;
    color: var(--background-color);
    background-color: var(--accent);
  }
  nav {
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 0.7rem;
    grid-column: 2;
    max-height: 25%;
    align-items: center;
  }
  nav > a {
    text-decoration: none;
    color: var(--accent);
    text-decoration: none;
    --accent: #ffab91;
    --title-color: #dde1e6;
    --subtext-color: #dde1e6;
  }
</style>
