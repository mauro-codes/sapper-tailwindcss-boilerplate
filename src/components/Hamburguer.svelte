<script>
  import { createEventDispatcher } from "svelte";

  export let expand = false;
  const dispatch = createEventDispatcher();

  function hamburguerTapped() {
    dispatch("click", !expand);
  }
</script>

<button
  on:click={hamburguerTapped}
  class="flex items-center px-3 py-2 border rounded text-teal-200
  border-teal-400 hover:text-white hover:border-white">
  <svg
    class="fill-current h-3 w-3"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
</button>
