<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Download, Upload } from "lucide-svelte";
  import ColorSchemeToggleButton from "$/components/navbar/ColorSchemeToggleButton.svelte";
</script>

<nav class="flex gap-4 p-2 items-center border-b">
  <span class="font-semibold">Breakdown visualizer</span>

  <ColorSchemeToggleButton class="ml-auto"/>

  <Button>
    <Upload class="mr-2 h-4 w-4" />
    Import
  </Button>

  <Button>
    <Download class="mr-2 h-4 w-4" />
    Export
  </Button>
</nav>
