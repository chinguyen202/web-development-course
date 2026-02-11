<script>
    import {useCommunityState} from "$lib/states/communityState.svelte.js";
    const {communityId} = $props()
    let communityState = useCommunityState();

    const community = communityState.getOne(communityId)
</script>

{#if community}
    <h2>{community.name}</h2>
    <p>{community.description}</p>
{:else}
    <p>Loading...</p>
{/if}