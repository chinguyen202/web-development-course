<script>
    import {useCommunityState} from "$lib/states/communityState.svelte.js";

    let communityState = useCommunityState();

    const deleteCommunity = (id) => {
        communityState.removeCommunity(id);
    }
</script>


<ul>
    {#each communityState.communities as community}
        <li>
            <h2><a href="/communities/{community.id}">{community.name}</a></h2>
            <p>{community.description}</p>
            <button onclick={() => deleteCommunity(community.id)}>Remove</button>
        </li>
    {/each}
</ul>