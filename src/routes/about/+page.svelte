<script>
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
</script>

<div class="outer">
  <div class="titlecontainer">
    <h1 id="title">About</h1>
  </div>
</div>

<style>
  :root {
    background-color: #1f1f1f;
    --accent: #febc7a;
  }
  #title {
    color: #e9d2f4;

    font-size: 3rem;
    font-family: "JetBrains Mono", monospace;
    text-align: center;
    white-space: nowrap;
    margin: 0;
  }
  .outer {
    height: 100%;
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
    height: 100vh;
  }
  .outer {
    height: 100%;
  }
</style>
