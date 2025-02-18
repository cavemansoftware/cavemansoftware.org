<script lang="ts">
  let { children } = $props();
  import { base } from "$app/paths";
  import "./style.css";
</script>

<link rel="icon" type="image/svg+xml" href="{base}/favicon.svg" />

<nav>
  <a href="{base}/"> /home/</a>
  <a href="{base}/projects"> /projects/</a>
</nav>
{@render children()}

<style>
</style>
