<script lang="ts">
  import { Button } from '@fullstack-app-template/shared/components';
</script>

<div class="min-h-screen bg-gray-50 p-8">
  <div class="max-w-2xl mx-auto text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to Landing</h1>
    <p class="text-gray-600 mb-8">
      This is the landing page with Tailwind CSS and shared UI components.
    </p>

    <div class="flex gap-4 justify-center mb-8">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>

    <div class="flex gap-4 justify-center">
      <Button size="sm" variant="primary">Small</Button>
      <Button size="md" variant="primary">Medium</Button>
      <Button size="lg" variant="primary">Large</Button>
    </div>

    <p class="text-sm text-gray-500 mt-8">
      Visit <a
        href="https://kit.svelte.dev"
        class="text-blue-600 hover:underline">kit.svelte.dev</a
      > to read the documentation
    </p>
  </div>
</div>
