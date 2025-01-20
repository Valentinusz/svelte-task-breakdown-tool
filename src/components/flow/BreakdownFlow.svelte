<script lang="ts">
  import { Background, Controls, MiniMap } from "@xyflow/svelte";
  import ColorSchemeAwareFlow from "$/components/flow/ColorSchemeAwareFlow.svelte";
  import { nodes } from "$/state/nodes.state";
  import { edges } from "$/state/edges.state";
  import Issue from "$/components/Issue.svelte";

  $inspect(nodes)

  const nodeTypes = {
    'issue': Issue
  }

</script>

<ColorSchemeAwareFlow {nodes} {edges} {nodeTypes} fitView>
  <Background/>
  <Controls/>
  <MiniMap/>
</ColorSchemeAwareFlow>
