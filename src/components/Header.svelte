<script>
  import { items } from "../stores";

  $: itemCount = $items.length;
  $: completedItemCount = $items.filter(item => item.completed).length;
</script>

<div class="header">
  <span>Shit list nightmare</span>
  <span>{completedItemCount} / {itemCount}</span>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    background-color: rgba(0, 0, 0, 0.11);
  }
</style>
