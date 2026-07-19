<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  export type Props = HTMLButtonAttributes & {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children?: Snippet;
  };

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    children,
    ...restProps
  }: Props = $props();

  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const variantClasses = {
    primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500`,
    danger: `bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`,
  };

  const sizeClasses = {
    sm: `px-3 py-1.5 text-sm`,
    md: `px-4 py-2 text-base`,
    lg: `px-6 py-3 text-lg`,
  };

  const computedClasses = $derived(
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${restProps.class || ''}`,
  );
</script>

<button {...restProps} {disabled} class={computedClasses}>
  {@render children?.()}
</button>
