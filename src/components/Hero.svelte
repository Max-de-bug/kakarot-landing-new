<script>
  import Icon, { loadIcons } from '@iconify/svelte';
  const href = 'https://github.com/kkrt-labs/kakarot';
  loadIcons(['fa6-solid:arrow-up-right-from-square']);
</script>

<div
  class="flex flex-col items-center md:items-start justify-center p-2 md:p-20 lg:p-20 gap-5 md:gap-6 md:max-w-4xl lg:max-w-5xl"
>
  <h1 class="text-3xl md:text-5xl lg:text-6xl">
    Bring Ethereum to the <span class="text-accent">Starknet ecosystem</span>
  </h1>
  <p>
    Kakarot is an (zk)-Ethereum Virtual Machine implementation written in Cairo.
    Kakarot zkEVM is fully compatible with Ethereum. All existing smart
    contracts, developer tools and wallets work out-of-the-box on Kakarot. Open
    source from day one. Just plug and play, available on Starknet L2 and soon
    on L3.
  </p>
  <a {href} target="_blank" rel="noopener noreferrer" class="btn btn-accent"
    >Explore codebase <Icon
      class="inline align-text-top h-2 lg:h-4 w-auto"
      icon="fa6-solid:arrow-up-right-from-square"
    />
  </a>
</div>
