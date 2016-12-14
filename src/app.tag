<app>
  <ul>
    <li each={items}>
      <span>{name}</span>
      <input onblur={parent.handlePriorChange} value={prior} />
      <button class="remove-btn" onclick={parent.handleRemove}>&#215;</button>
    </li>
  </ul>
  <style>
    .remove-btn {

    }
  </style>
  <script>
    this.items = opts.items

    function handlePriorChange ({item, target}) {
      const index = this.items.indexOf(item)
      this.items = [
        ...this.items.slice(0, index),
        {...item, prior: target.value},
        ...this.items.slice(index + 1)
      ]
    }

    function handleRemove ({item}) {
      this.items.splice(this.items.indexOf(item), 1)
      this.items = [...this.items]
    }

  </script>
</app>