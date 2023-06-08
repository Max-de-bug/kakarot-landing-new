<script lang="ts">
  import Icon, { loadIcons } from '@iconify/svelte';
  loadIcons(['fa:github', 'fa:medium', 'fa:twitter']);
</script>

<nav class="navbar py-2 md:py-4 px-6 md:px-20 flex flex-row items-center">
  <div class="navbar-start flex">
    <a href="/"
      ><img
        class="h-12 md:h-20 w-auto"
        src="/public/kakarot-logo-nobg.png"
        alt="Kakarot Logo"
      /></a
    >
  </div>
  <div class="navbar-center flex flex-row gap-2 md:gap-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/team">Team</a>
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
</nav>
