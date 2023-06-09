<div class="flex flex-col md:flex-row items-center justify-around">
  <div class="bg-neutral rounded-lg p-4 md:p-8 shadow-sm flex flex-col gap-2">
    <p class="text-xl md:text-2xl lg:text-3xl underline">Abstract</p>
    <p class="max-w-[60ch] leading-relaxed">
      Kakarot is an implementation of the <a
        class="text-primary"
        href="https://ethereum.org/en/developers/docs/evm/"
        target="_blank"
        rel="noopener noreferrer">Ethereum Virtual Machine (EVM)</a
      >, developed using the Cairo programming language. It can be compared to
      Geth's EVM, which is written in Golang. The main differentiating factor
      for an EVM written in Cairo is that its transactions are provable. This
      capability is achieved by utilizing the CairoVM, a Turing-complete
      provable CPU architecture, which serves as the underlying layer for
      Kakarot. A zkEVM, or zero-knowledge EVM, is essentially an EVM where
      transactions can be proven and verified.
    </p>
  </div>
  <div class="flex flex-col">
    <img
      class="rounded-lg md:max-w-2xl"
      src="/evm.png"
      alt="Ethereum Virtual Machine Architecture: A Turing-complete CPU Architecture made for the Ethereum Blockchain. It is the distributed state machine where all smart contracts live and transactions are executed."
    />
    <p class="px-6 text-xs">
      Diagram adapted from <a
        href="https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf"
        target="_blank"
        rel="noopener noreferrer">Ethereum EVM illustrated</a
      >
    </p>
  </div>
</div>
