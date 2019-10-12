# svelte-fluid-layout

A component to create a responsive layout for your [Svelte](https://svelte.dev/) app.

![Screen Shot 2019-10-12 at 4 45 06 PM](https://user-images.githubusercontent.com/5746614/66703962-c95b3180-ed0f-11e9-9631-4ae017d2b916.png)

# Demo

[Example](https://5ew7j.csb.app/) | [Code Sandbox](https://codesandbox.io/s/svelte-fluid-layout-demo-5ew7j?fontsize=14&module=%2FApp.svelte)

# Install

`npm i svelte-fluid-layout`

# Usage

There are five slots (`header`, `main`, `footer`, `side1`, and `side2`). When using all of them, you achieve a (responsive) [holy grail layout](https://en.wikipedia.org/wiki/Holy_grail_(web_design)), like the above screenshot.

```html
<script>
  import Layout from "svelte-fluid-layout";
</script>

<Layout>
  <header slot="header">My Header</header>
  <section slot="side1">My Section</section>
  <main slot="main">My Main</main>
  <aside slot="side2">My Aside</aside>
  <footer slot="footer">Footer</footer>
</Layout>

<style>
  :global(.svelte-fluid-layout-large main) {
    width: 66%;
  }
</style>
```

You can use `.svelte-fluid-layout-large .my-element` and `.svelte-fluid-layout-small .my-element` to target your slotted elements at either display size, small or large.

Give a width to the `main` slot on large screens (see style section above), as by default `main` only takes up the size of its inner content (which will be collapsed at first with no content). `side1` and `side2` share whatever is left over.

The `side1` and `side2` slots are not required, hence you don't have to use the holy grail layout.

# Props

### `breakpoint`

The breakpoint at which the layout switches from horizontal to vertical. Valid values are:

 - `"sm"` (640px)
 - `"md"`(768px),
 - `"lg"`(1024px),
 - `"xl"`(1200px).
 
 The default value is `"sm"`;
 
 ```html
 <Layout breakpoint='md'>
   <!-- slots -->
 </Layout>
 ```
