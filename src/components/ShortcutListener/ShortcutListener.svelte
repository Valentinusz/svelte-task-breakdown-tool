<script lang="ts">
  import { on } from "svelte/events";
  import { toast } from "svelte-sonner";
  import { addNode } from "$/state/nodes.state";

  $effect(() => {
    on(document, "keydown", (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();

        toast("Saved");
      }

      if (event.ctrlKey && event.key === "z") {
        event.preventDefault();

        addNode()
      }
    });
  });
</script>
