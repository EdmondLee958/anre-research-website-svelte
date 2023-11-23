<script lang="ts">
  export let name: string;
</script>

<header class="pt-20 pb-12">
  <!-- ANRE RESEARCH ICON -->
  <div>
    <img class="circularImage" src="/anre-temp.jpg" alt="ANRE Research" width="100" height="100">
  </div>

  <!-- <div class="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> -->

  <p class="text-2xl dark:text-white text-center drop-shadow">
    <a href="/">
      {name}
    </a>
  </p>
</header>

<style>
  .circularMask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }

  .circularImage {
      /*position: relative;*/
      overflow: hidden;
      border-radius: 50%;
  }
</style>