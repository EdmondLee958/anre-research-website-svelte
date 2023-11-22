<script>
    export let href = "/";
    export let otherProps = "";
</script>

<nav>
    <a href={href}>{otherProps}</a>
</nav>
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