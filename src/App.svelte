<script lang="ts">
  import "@xyflow/svelte/dist/style.css";
  import { Toaster } from "$lib/components/ui/sonner";
  import { toast } from "svelte-sonner";
  import { on } from "svelte/events";
  import { ModeWatcher } from "mode-watcher";
  import Navbar from "$/components/navbar/Navbar.svelte";
  import Sidebar from "$/components/sidebar/Sidebar.svelte";
  import BreakdownFlow from "$/components/flow/BreakdownFlow.svelte";

  $effect(() => {
    on(document, "keydown", (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.ctrlKey && event.key === "s") {
        toast("Saved");
      }
    });
  });

  $effect(() => {
    // setInterval(() => {
    //     toast("Saved")
    // }, 5000)
  });

</script>

<ModeWatcher />
<Navbar />
<main class="flex h-[95vh]">
  <Sidebar />
  <BreakdownFlow />
  <Toaster />
</main>

