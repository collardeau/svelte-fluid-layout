# svelte-fluid-layout

Create a responsive and customizable layout for your app.

# Demo

[Example](https://5ew7j.csb.app/) | [Code Sandbox](https://codesandbox.io/s/svelte-fluid-layout-demo-5ew7j?fontsize=14&module=%2FApp.svelte)

# Install

`npm i svelte-fluid-layout`

# Usage

There are five slots (`header`, `main`, `footer`, `side1`, and `side2`). When using them all you achieve a (responsive) holy grail layout.

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
  :global(.fluid-layout-large main) {
    width: 66%;
  }
</style>
```

It's important to give a width to the `main` slot on large screens (see style section above), or else it will just take up the size of its inner content (which will be collapsed at first with no content). `side1` and `side2` share whatever is left over.

The `side1` and `side2` slots are optional in which case you get fewer columns in your layout.

# Props

### `breakpoint`

The breakpoint at which the layout switches from horizontal to vertical. Valid values are:

 - `sm` (640px)
 - `md`(768px),
 - `lg`(1024px),
 - `xl`(1200px).
 
 The default value is `sm`;
 
 ```html
 <Layout breakpoint='md'>
   <!-- slots -->
 </Layout>
 ```
