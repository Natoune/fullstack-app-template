<script lang="ts">
  import type { Snippet } from 'svelte';
  import { checkHealth, getGreeting } from '../utils/api';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  let healthStatus = $state<string>('');
  let healthLoading = $state<boolean>(false);
  let healthError = $state<string>('');

  let greetingMessage = $state<string>('');
  let greetingLoading = $state<boolean>(false);
  let greetingError = $state<string>('');
  let nameInput = $state<string>('');

  async function fetchHealth() {
    healthLoading = true;
    healthError = '';
    const response = await checkHealth();
    healthLoading = false;

    if (response.success && response.data) {
      healthStatus = `Backend is ${response.data.status} (v${response.data.version})`;
    } else {
      healthError = response.error || 'Unknown error';
    }
  }

  async function fetchGreeting() {
    greetingLoading = true;
    greetingError = '';
    const response = await getGreeting(nameInput || undefined);
    greetingLoading = false;

    if (response.success && response.data) {
      greetingMessage = response.data.message;
    } else {
      greetingError = response.error || 'Unknown error';
    }
  }
</script>

<div class="bg-white rounded-lg shadow-md p-6 space-y-6">
  <h2 class="text-xl font-semibold text-gray-800">API Demo</h2>

  <!-- Health Check Section -->
  <div class="border rounded-lg p-4">
    <h3 class="font-medium text-gray-700 mb-2">Health Check</h3>
    <button
      onclick={fetchHealth}
      disabled={healthLoading}
      class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {healthLoading ? 'Checking...' : 'Check Backend Health'}
    </button>

    {#if healthStatus}
      <p class="mt-2 text-green-600 text-sm">{healthStatus}</p>
    {/if}

    {#if healthError}
      <p class="mt-2 text-red-600 text-sm">{healthError}</p>
    {/if}
  </div>

  <!-- Greeting Section -->
  <div class="border rounded-lg p-4">
    <h3 class="font-medium text-gray-700 mb-2">Greeting</h3>
    <div class="flex gap-2">
      <input
        type="text"
        bind:value={nameInput}
        placeholder="Enter your name"
        class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onclick={fetchGreeting}
        disabled={greetingLoading}
        class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {greetingLoading ? 'Fetching...' : 'Get Greeting'}
      </button>
    </div>

    {#if greetingMessage}
      <p class="mt-2 text-gray-700">{greetingMessage}</p>
    {/if}

    {#if greetingError}
      <p class="mt-2 text-red-600 text-sm">{greetingError}</p>
    {/if}
  </div>

  {@render children?.()}
</div>
