<script lang="ts">
    import {Background, type ColorMode, Controls, MiniMap, SvelteFlow} from "@xyflow/svelte";
    import '@xyflow/svelte/dist/style.css';
    import {writable} from "svelte/store";
    import Navbar from "@/components/Navbar.svelte";
    import {Toaster} from "$lib/components/ui/sonner";
    import {toast} from "svelte-sonner";
    import {on} from "svelte/events";

    let colorMode: ColorMode = 'dark';
    const nodes = writable([]);
    const edges = writable([]);

    $effect(() => {
        on(document, 'keydown', (event: KeyboardEvent) => {
            event.preventDefault()

            if (event.ctrlKey && event.key === "s") {
                toast("Saved")
            }
        })
    })

    $effect(() => {
        // setInterval(() => {
        //     toast("Saved")
        // }, 5000)
    })

</script>

<main class="h-[100vh]">
    <Navbar/>
    <SvelteFlow {nodes} {edges} fitView>
        <Background/>
        <Controls/>
        <MiniMap/>
    </SvelteFlow>
    <Toaster/>
</main>
