<script lang="ts">
  import { type ColorMode, SvelteFlow, type SvelteFlowProps } from "@xyflow/svelte";
  import { mode } from "mode-watcher";

  let colorMode: ColorMode = $derived($mode ?? "system");

  const {children, ...rest}: SvelteFlowProps = $props()
</script>

<SvelteFlow colorMode={colorMode} {...rest} >
  {@render children?.()}
</SvelteFlow>
