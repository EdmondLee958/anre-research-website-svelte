<script lang="ts">
  export let href: string;
  export let otherProps: Array<string>;
</script>

<a {href} {...otherProps}>
  <slot>
  </slot>
</a>