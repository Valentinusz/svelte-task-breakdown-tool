<script lang="ts">
  import "@xyflow/svelte/dist/style.css";
  import { Toaster } from "$lib/components/ui/sonner";
  import { ModeWatcher } from "mode-watcher";
  import Layout from "$/layout/Layout.svelte";
  import ShortcutListener from "$/components/ShortcutListener/ShortcutListener.svelte";
  import AutoSaveTimer from "$/components/AutoSaveTimer/AutoSaveTimer.svelte";
</script>

<ModeWatcher />
<Toaster />
<ShortcutListener/>
<AutoSaveTimer/>
<Layout />


