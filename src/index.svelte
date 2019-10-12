<script>
  import validate from "./validation";
  export let breakpoint = "sm";
  let pre = "svelte-fluid-layout-";

  const fullHeight = node => {
    node.children[0].style.minHeight = "100%";
  };

  $: validate({ breakpoint });
</script>

<style>
  .svelte-fluid-layout-small,
  .svelte-fluid-layout-large {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .svelte-fluid-layout-large > div {
    display: flex;
  }

  div div {
    flex: 1;
  }

  .svelte-fluid-layout-large > div div:nth-child(2n + 1):empty {
    flex: 0;
  }

  .svelte-fluid-layout-large-sm {
    display: none;
  }
  .svelte-fluid-layout-large-md {
    display: none;
  }
  .svelte-fluid-layout-large-lg {
    display: none;
  }
  .svelte-fluid-layout-large-xl {
    display: none;
  }

  @media (min-width: 640px) {
    .svelte-fluid-layout-small-sm {
      display: none;
    }
    .svelte-fluid-layout-large-sm {
      display: flex;
    }
  }
  @media (min-width: 768px) {
    .svelte-fluid-layout-small-md {
      display: none;
    }
    .svelte-fluid-layout-large-md {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    .svelte-fluid-layout-small-lg {
      display: none;
    }
    .svelte-fluid-layout-large-lg {
      display: flex;
    }
  }

  @media (min-width: 1280px) {
    .svelte-fluid-layout-small-xl {
      display: none;
    }
    .svelte-fluid-layout-large-xl {
      display: flex;
    }
  }
</style>

<div class="{pre}small {pre}small-{breakpoint}">
  <slot name="header" />
  <slot name="side1" />
  <div>
    <slot name="main" />
  </div>
  <slot name="side2" />
  <slot name="footer" />
</div>

<div class="{pre}large {pre}large-{breakpoint}">
  <slot name="header" />
  <div>
    <div use:fullHeight>
      <slot name="side1" />
    </div>
    <slot name="main" />
    <div use:fullHeight>
      <slot name="side2" />
    </div>
  </div>
  <slot name="footer" />
</div>
