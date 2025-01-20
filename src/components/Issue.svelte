<script lang="ts">
  import { Card, CardContent, CardHeader } from "$lib/components/ui/card/index.js";
  import { Handle, Position } from "@xyflow/svelte";
  import { Zap } from "lucide-svelte";
</script>

<Card class="w-48">
  <Handle position={Position.Top} type="target"/>
  <Handle position={Position.Bottom} type="source"/>
  <CardHeader><h2 class="flex"><Zap/>Task name</h2> </CardHeader>
  <CardContent></CardContent>
</Card>
