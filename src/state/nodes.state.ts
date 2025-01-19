import { writable } from "svelte/store";
import {type Node } from "@xyflow/svelte"

export let nodes = writable<Node[]>([]);
