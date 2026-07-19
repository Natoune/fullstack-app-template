<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Snippet } from 'svelte';
  import '../app.css';

  let { children }: { children: Snippet } = $props();
</script>

<nav class="bg-gray-800 p-4 shadow-md">
  <ul class="flex space-x-6 justify-center">
    <li>
      <a
        href={resolve('/')}
        class="text-white hover:text-gray-300 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </a>
    </li>
  </ul>
</nav>

{@render children()}
