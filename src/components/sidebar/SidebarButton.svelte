<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import type { Component, Snippet } from "svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { nodes } from "$/state/nodes.state";

  interface SidebarButtonProps {
    children: Snippet;
    tooltip: string;
  }

  const { children, tooltip }: SidebarButtonProps = $props();

  function handeClick() {
    nodes.update(nodes => {
      nodes.push({
        id: Math.random().toString(36).substr(2, 9),
        type: "issue",
        data: { },
        position: { x: 0, y: 0 }
        }
      )

      return nodes;
    });
  }

</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    <Button size="icon" variant="outline" on:click={handeClick}>
      {@render children?.()}
    </Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    {tooltip}
  </Tooltip.Content>
</Tooltip.Root>
