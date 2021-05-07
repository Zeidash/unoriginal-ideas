<script>
  import { onMount } from "svelte";
  import { items } from "../stores";

  import todoAPI from "../to-do_API";
  import Item from "../components/Item.svelte";

  function handleNewItem(e) {}
  function handleUpdate(e) {
    console.log(e);
  }
  function handleDelete(e) {}

  onMount(async () => {
    // fetch from API
    $items = await todoAPI.getAll();
  });
</script>

<div class="list">
  {#each $items as item (item)}
    <Item {...item} on:update={handleUpdate} on:delete={handleDelete} />
  {:else}
    <p class="list-status">No nightmares yet</p>
  {/each}
</div>

<style>
  .list-status {
    color: white;
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
    padding: 20px;
    margin: 0;
  }
  .list {
    padding: 10px;
    background-color: #781639;
  }
</style>
