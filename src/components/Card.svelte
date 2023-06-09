<script lang="ts">
  import Icon, { loadIcons } from '@iconify/svelte';
  export let iconId: string;
  export let title: string;
  export let description: string;
  loadIcons([iconId]);
</script>

<div
  class="flex flex-col justify-start items-center gap-6 bg-neutral p-8 md:p-12 rounded-lg"
>
  <div class="md:p-4">
    <Icon class="h-12 w-12 md:h-24 md:w-24" icon={iconId} />
  </div>

  <div class="flex flex-col justify-start items-start gap-2 md:gap-4">
    <h2 class="text-xl md:text-2xl text-primary">{title}</h2>
    <p class="max-w-[30ch] leading-relaxed">{description}</p>
  </div>
</div>
