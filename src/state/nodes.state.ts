import { writable } from "svelte/store";
import {type Node } from "@xyflow/svelte"

export let nodes = writable<Node[]>([]);

export function addNode(x: number, y: number) {
  nodes.update(nodes => {
    nodes.push({
        id: Math.random().toString(36).substr(2, 9),
        type: "issue",
        data: { },
        position: { x, y }
      }
    )

    return nodes;
  });
}
