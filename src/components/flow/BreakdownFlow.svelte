<script lang="ts">
  import { Background, Controls, MiniMap } from "@xyflow/svelte";
  import ColorSchemeAwareFlow from "$/components/flow/ColorSchemeAwareFlow.svelte";
  import { nodes } from "$/state/nodes.state";
  import { edges } from "$/state/edges.state";

  $inspect(nodes)

</script>

<ColorSchemeAwareFlow {nodes} {edges} fitView>
  <Background/>
  <Controls/>
  <MiniMap/>
</ColorSchemeAwareFlow>
