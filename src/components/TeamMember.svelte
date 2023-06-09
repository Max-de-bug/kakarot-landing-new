<script lang="ts">
  import Icon, { loadIcons } from '@iconify/svelte';
  export let img: string;
  export let fullName: string;
  export let role: string;
  export let twitterHandle: string;
  loadIcons(['fa:twitter']);
</script>

<div class="flex flex-col gap-1 md:gap-1 w-48 md:w-64">
  <img class="max-w-full rounded-lg" src={img} alt="{fullName} - {role}" />
  <span>
    {fullName}
  </span>
  <span>
    {role}
    <a class="px-1" href="https://twitter.com/{twitterHandle}">
      <Icon
        class="inline align-text-top h-2/3 lg:h-4 w-auto hover:text-accent active:text-accent"
        icon="fa:twitter"
      />
    </a>
  </span>
</div>
