# svelte-fluid-layout

Create a responsive and customizable layout for your app.

# Demo

[Code Sandbox](https://codesandbox.io/s/svelte-fluid-layout-demo-5ew7j?fontsize=14&module=%2FApp.svelte)

# Install

`npm i svelte-fluid-layout`

# Usage

```html
<script>
  import Layout from "svelte-fluid-layout";
</script>


<Layout>
  <header slot="header">Header</header>
  <section slot="menu">Menu</section>
  <main slot="main">Main</main>
  <aside slot="aside">Aside</aside>
  <footer slot="footer">Footer</footer>
</Layout>

<style>
  :global(.fluid-layout-large main) {
    width: 66%;
  }
</style>
```

It's important to give a width to the `main` slot on large screens (`.fluid-layout-large main` in this case), or else it will just take up the size of its inner content (which will be collapsed at first with no content). `section` and `menu` will take up whatever size is left and split it on the left and right of the `main` slot.

# Props

### `breakpoint`

The breakpoint at which the layout becomes a single column. Valid values are:

 - `sm` (640px)
 - `md`(768px),
 - `lg`(1024px),
 - `xl`(1200px).
 
 ```html
 <Layout breakpoint='md'>
   <!-- slots -->
 </Layout>
 ```
