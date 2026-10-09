export default {
  config: {
    default: true,
    // Repository instruction and template files intentionally use long lines
    // and template headings that do not represent published documentation.
    MD013: false,
    MD034: false,
    MD041: false,
  },
  ignores: ["node_modules/**", ".nuxt/**", ".output/**", "dist/**"],
};
