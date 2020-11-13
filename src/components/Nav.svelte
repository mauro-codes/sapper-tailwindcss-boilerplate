<script>
  import Hamburguer from "./Hamburguer.svelte";
  import NavLink from "./NavLink.svelte";

  export let segment;
  let expand = false;

  function toggleMobileMenu(event) {
    expand = event.detail;
  }
</script>

<nav
  class="text-white w-full flex items-center justify-between flex-wrap
  bg-cool-blue-dark px-8 py-6 {expand ? 'fixed' : 'static'}">

  <div class="flex items-center">
    <img src="icon.png" alt="do i need it logo" class="h-12 mr-4">
    <a href="." class="quicksand font-semibold text-xl tracking-tight mr-4">
      Do I need it?
    </a>
  </div>

  <!-- <div class="block lg:hidden">
    <Hamburguer on:click={toggleMobileMenu} {expand} />
  </div> -->
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="{!expand && 'hidden'} lg:flex lg:justify-end text-sm lg:flex-grow">
      <!-- <NavLink text="About" href="about" {segment} />
      <NavLink text="Blog" href="blog" {segment} rel="prefetch" /> -->
    </div>
  </div>
</nav>
