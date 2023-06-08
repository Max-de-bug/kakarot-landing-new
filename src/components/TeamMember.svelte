<script lang="ts">
  export let img: string;
  export let fullName: string;
  export let role: string;
  export let twitterHandle: string;
  import Icon, { loadIcons } from '@iconify/svelte';
  loadIcons(['fa:twitter']);
</script>

<div class="flex flex-col gap-2 md:gap-3">
  <img class="h-48 w-48 md:h-64 md:w-64" src={img} alt="{fullName} - {role}" />
  <p>
    {fullName} - {role}
    <a href="https://twitter.com/{twitterHandle}">
      <Icon
        class="h-2 lg:h-4 w-auto hover:text-accent active:text-accent"
        icon="fa:twitter"
      />
    </a>
  </p>
</div>
