<script>
  export let segment;
  export let href;
  export let text;
  export let rel = "";
</script>

<a
  {rel}
  {href}
  class="block mt-4 lg:mx-4 lg:inline-block lg:mt-0 text-lg {segment === href ? 'text-white' : 'text-blue-200'}
  hover:text-white">
  {text}
</a>
