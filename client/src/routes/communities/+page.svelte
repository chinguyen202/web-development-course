<script>
    let communities = [
        { id: 1, name: 'Developers Hub', description: 'A place for developers' },
        { id: 2, name: 'Design Factory', description: 'Creative minds meet here' },
        { id: 3, name: 'Startup Workshop', description: 'Where ideas become reality' }
    ];
</script>

<h1>Communities</h1>
<ul>
    {#each communities as community}
        <li>
            <h2>{community.name}</h2>
            <p>{community.description}</p>
        </li>
    {/each}
</ul>