<script lang="ts">
  import Navbar from "$/components/navbar/Navbar.svelte";
  import BreakdownFlow from "$/components/flow/BreakdownFlow.svelte";
  import ContextMenu from "$/components/ContextMenu.svelte";
</script>

<Navbar />
<main class="flex h-[95vh]">
  <ContextMenu>
    <BreakdownFlow />

  </ContextMenu>
</main>
