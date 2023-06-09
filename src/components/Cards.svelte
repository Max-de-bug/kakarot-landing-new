<script lang="ts">
  import Card from './Card.svelte';
  const cards = [
    {
      iconId: 'logos:ethereum-color',
      title: 'Ethereum Compatible',
      description:
        'Kakarot zkEVM is fully compatible with Ethereum. Developing on Kakarot and interacting with Kakarot dApps feels the same as on Ethereum. Ultimately, Kakarot will provide interoperability with native Starknet protocols and composability between protocols.',
    },
    {
      iconId: 'fluent-mdl2:scale-volume',
      title: 'Scalable',
      description:
        "By leveraging the scalability benefits of Validity Rollups, STARKs and Starkware's CairoVM, Kakarot scales Ethereum through batching of verifiable transactions. Kakarot aims to become a major zkEVM appchain provider.",
    },
    {
      iconId: 'material-symbols:security',
      title: 'Secure',
      description:
        'Kakarot is part of the zkRollup technical stack. It inherits its security from Ethereum L1 through validity proofs. To ensure the integrity of the Kakarot Ethereum Virtual Machine (EVM), Kakarot will be subjected to the main Ethereum test suites.',
    },
  ];
</script>

<div class="flex flex-col gap-4 md:gap-12 justify-center items-center">
  <h2 class="text-2xl md:text-5xl">
    Core <span class="text-primary">Principles</span>
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
    {#each cards as card}
      <Card {...card} />
    {/each}
  </div>
</div>
