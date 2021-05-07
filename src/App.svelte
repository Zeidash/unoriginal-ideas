<script>
	import Header from "./components/Header.svelte";
	import List from "./components/List.svelte";
</script>

<style>
	.container{
		width: 500px;
		background-color: #121212;
		box-shadow: 0px 0px 200px 0px #470a20;
	}
	:global(.container *){
		font-family: sans-serif;
	}
</style>

<div class="container">
	<Header></Header>
	<List></List>
</div>