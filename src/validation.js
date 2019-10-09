const warn = (msg, val) => console.warn(`[svelte-fluid-layout]:`, msg, val);

const validBp = ["sm", "md", "lg", "xl"];

export default function validate({ breakpoint }) {
  if (!validBp.some(b => b === breakpoint))
    warn(
      "The `breakpoint` prop is not valid. It should be one of 'sm', 'md', 'lg' or 'xl' but is: ",
      breakpoint
    );
}
