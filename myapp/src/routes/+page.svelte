<script context="module" lang="ts">
    import { goto } from '$app/navigation';

    import Footer from '../../components/Footer.svelte';
    import Header from '../../components/Header.svelte';
    import Layout, { GradientBackground } from '../../components/Layout';
    import ArrowIcon from "../../components/ArrowIcon.svelte";
    import SEO from "../../components/SEO.svelte";

    import type { Post } from "../utils/mdx-utils.ts"
    import type { GlobalData } from '../utils/global-data.ts';
    import { getPosts } from "../utils/mdx-utils";
    import { getGlobalData } from '../utils/global-data';

    export let posts: Array<Post>;

    export let globalData: GlobalData;

    const handleClick = (slug: string) => {
        goto(slug, { replaceState: true });
    };

    export function getStaticProps() {
        const posts = getPosts();
        const globalData = getGlobalData();

        return { props: { posts, globalData } };
    }
</script>

<Layout>
    <SEO title={globalData.name} description={globalData.blogTitle} />
    <Header name={globalData.name} />
    <main class="w-full">
      <h1 class="text-3xl lg:text-6xl text-center mb-12 font-bold md:font-sans md:font-family-sego-ui sm:font-family-tahoma drop-shadow">
        {globalData.blogTitle}
      </h1>
      <ul class="w-full">
        {#each posts as post (post.filePath)}
            <li
                class="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
                <a 
                    on:click={() => handleClick(`/posts/${post.filePath.replace(/\.mdx?$/, '')}`)} 
                    href={`/posts/[slug]`} 
                >
                    <a class="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                        {#if post.data.date}
                            <p class="uppercase mb-3 font-bold opacity-60">
                                {post.data.date}
                            </p>
                        {/if}
                        <h2 class="text-2xl md:text-3xl">{post.data.title}</h2>
                        {#if post.data.description}
                            <p class="mt-3 text-lg opacity-60">
                                {post.data.description}
                            </p>
                        {/if}
                        <ArrowIcon className="mt-4" />
                    </a>
                </a>
            </li>
        {/each}

        {#each posts as post (post.filePath)}
            <li
                class="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
                <a 
                    on:click={() => handleClick(`/posts/${post.filePath.replace(/\.mdx?$/, '')}`)} 
                    href={`/posts/[slug]`}
                >
                    <a class="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                        {#if post.data.date}
                            <p class="uppercase mb-3 font-bold opacity-60">
                            {post.data.date}
                            </p>
                        {/if}
                        <h2 class="text-2xl md:text-3xl">{post.data.title}</h2>
                        {#if post.data.description}
                            <p class="mt-3 text-lg opacity-60">
                            {post.data.description}
                            </p>
                        {/if}
                        <ArrowIcon className="mt-4" />
                    </a>
                </a>
            </li>
        {/each}
      </ul>
    </main>
    <Footer copyrightText={globalData.footerText} />
    
    <ScreenspaceBackground fragShader={FRAG_NetworkExploration}/>
    
</Layout>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->