<script>
  import validate from "./validation";
  export let breakpoint = "sm";
  let pre = "fluid-layout--";
  $: validate({ breakpoint });
</script>

<style>
  .fluid-layout--container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .fluid-layout--flex {
    display: flex;
  }
  .fluid-layout--flex-1 {
    flex: 1;
  }

  .fluid-layout-large {
    display: none;
  }

  @media (min-width: 640px) {
    .fluid-layout--sm {
      display: none;
    }
    .fluid-layout-large {
      display: flex;
    }
  }
  @media (min-width: 768px) {
    .fluid-layout--md {
      display: none;
    }
    .fluid-layout-large {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    .fluid-layout--lg {
      display: none;
    }
    .fluid-layout-large {
      display: flex;
    }
  }

  @media (min-width: 1280px) {
    .fluid-layout--xl {
      display: none;
    }
    .fluid-layout-large {
      display: flex;
    }
  }

  .fluid-layout--collapsible:empty {
    flex: 0;
  }
</style>

<div class="fluid-layout-small {pre}{breakpoint} {pre}container">
  <slot name="header" />
  <slot name="menu" />
  <div class="{pre}flex-1">
    <slot name="main" />
  </div>
  <slot name="aside" />
  <slot name="footer" />
</div>

<div class="fluid-layout-large {pre}container">
  <slot name="header" />
  <div class="{pre}flex-1 {pre}flex">
    <div class="{pre}flex-1 {pre}collapsible">
      <slot name="menu" />
    </div>
    <slot name="main" />
    <div class="{pre}flex-1 {pre}collapsible">
      <slot name="aside" />
    </div>
  </div>
  <slot name="footer" />
</div>
