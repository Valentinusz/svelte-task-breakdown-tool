<script lang="ts">

import { BookMarked, Plus } from "lucide-svelte";
import {Root, Trigger, Content, Item, Shortcut} from "$lib/components/ui/context-menu";
import type { Snippet } from "svelte";

interface ContextMenuProps {
  children: Snippet;
}

const {children}: ContextMenuProps = $props()

</script>

<Root>
  <Trigger class="w-full">
    {@render children?.()}
  </Trigger>
  <Content>
    <Item class="flex items-center gap-2">
      <Plus /> New task
      <Shortcut>Ctrl + T</Shortcut>
    </Item>
    <Item class="flex items-center gap-2">
      <BookMarked/> New story
    </Item>
  </Content>
</Root>
