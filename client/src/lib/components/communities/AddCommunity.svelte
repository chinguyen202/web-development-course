<script>
    import {useCommunityState} from "$lib/states/communityState.svelte.js";

    let communityState = useCommunityState();
    let name = $state("")
    let description = $state("")

    const addCommunity = () => {
        communityState.addCommunity(name, description);
        name =""
        description = ""
    }
</script>

<input type="text" bind:value={name} placeholder="Community name"/>
<input type="text" bind:value={description} placeholder="Community description"/>
<button onclick={addCommunity}>Add community</button>