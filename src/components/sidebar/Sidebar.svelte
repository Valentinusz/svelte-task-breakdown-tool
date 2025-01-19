<script lang="ts">
  import { BookMarked, ChevronRight, Plus, Zap } from "lucide-svelte";
  import SidebarButton from "./SidebarButton.svelte";
</script>

<section class="flex w-16 p-2 border-r flex-col items-center gap-2">
  <SidebarButton tooltip="New task">
    <Plus />
  </SidebarButton>
  <SidebarButton tooltip="New story">
    <BookMarked />
  </SidebarButton>
  <SidebarButton tooltip="New epic">
    <Zap />
  </SidebarButton>
</section>
