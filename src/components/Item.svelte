<script>
  import { createEventDispatcher } from "svelte";

  export let id, text, completed;

  const dispatch = createEventDispatcher();

  function triggerUpdate() {
    dispatch("update", { id, text, completed });
  }
</script>

<div class="item" class:completed>
  <input
    type="text"
    class="text-input"
    bind:value={text}
    readonly={completed}
    on:keyup={({key, target}) => key === "Enter" && target.blur() }
    on:blur={() => triggerUpdate()}
  />
  <input type="checkbox" class="completed-checkbox" bind:checked={completed} on:change={() => triggerUpdate()} />
</div>

<style>
  .item {
    display: flex;
    align-items: center;
    margin: 0;
    background-color: white;
  }
  .item.completed {
    background-color: rgba(255, 255, 255, 0.664);
  }
  .item.completed > .text-input {
    text-decoration: line-through 3px;
    color: rgb(85, 85, 85);
  }
  .item:focus-within {
    background-color: rgba(255, 255, 255, 0.908);
  }
  .text-input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    font-size: 1em;
    margin: 0;
    padding: 15px;
    font-weight: 600;
  }
  .completed-checkbox {
    margin: 0 15px 0 15px;
    outline: none;
    border: gray 2px solid;
    border-radius: 10px;
  }
</style>
