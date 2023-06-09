<script lang="ts">
  import Icon, { loadIcons } from '@iconify/svelte';
  loadIcons(['fa:github', 'fa:medium', 'fa:twitter']);
  const currentYear = new Date().getFullYear();
</script>

<footer
  class="navbar py-2 md:py-4 px-6 md:px-20 flex flex-row items-center mt-16 md:mt-28"
>
  <div class="navbar-start flex">
    <span>KKRT Labs - {currentYear} - &copy; All rights reserved </span>
  </div>
  <div class="navbar-end flex flex-row gap-2 md:gap-4">
    <a
      href="https://github.com/kkrt-labs/kakarot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        class="h-4 lg:h-6 w-auto hover:text-accent active:text-accent"
        icon="fa:github"
      />
    </a>
    <a
      href="https://medium.com/kakarot-zkevm"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        class="h-4 lg:h-6 w-auto hover:text-accent active:text-accent"
        icon="fa:medium"
      />
    </a>
    <a
      href="https://twitter.com/kakarotzkevm"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        class="h-4 lg:h-6 w-auto hover:text-accent active:text-accent"
        icon="fa:twitter"
      />
    </a>
  </div>
</footer>
