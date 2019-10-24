<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main class="lg:mt-20 container mx-auto p-4">
	<slot></slot>
</main>