<script lang="ts">
  import Button from '$shared/lib/components/Button.svelte';
  import ApiDemo from '$shared/lib/components/ApiDemo.svelte';
</script>

<div class="min-h-screen bg-gray-50 p-8">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to Frontend</h1>
    <p class="text-gray-600 mb-8">This is the frontend app with Tailwind CSS and shared UI components.</p>
    
    <!-- Buttons Demo -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Button Components</h2>
      <div class="flex gap-4 justify-center mb-6">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
      
      <div class="flex gap-4 justify-center">
        <Button size="sm" variant="primary">Small</Button>
        <Button size="md" variant="primary">Medium</Button>
        <Button size="lg" variant="primary">Large</Button>
      </div>
    </div>

    <!-- API Demo -->
    <ApiDemo />
    
    <p class="text-sm text-gray-500 mt-8">
      Visit <a href="https://kit.svelte.dev" class="text-blue-600 hover:underline">kit.svelte.dev</a> to read the documentation
    </p>
  </div>
</div>
