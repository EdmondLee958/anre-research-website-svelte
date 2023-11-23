<script>
    import { onMount } from 'svelte';
    import './Layout.module.css'; 

    onMount(() => {
        setAppTheme();
    });

    function setAppTheme() {
        document.documentElement.classList.add('dark');
    }
</script>

<div class="layout">
    <slot></slot> 
</div>
