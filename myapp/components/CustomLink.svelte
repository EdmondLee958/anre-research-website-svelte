<script lang="ts">
  export let href: string;
  export let otherProps: Array<string>;
</script>

<a {href} {...otherProps}>
  <slot>
  </slot>
</a>
<!-- import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
    </>
  );
} -->