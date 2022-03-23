<script lang="ts">
	import { openEHR } from './openehrStore.ts';        
    import CompositionFactory from './compositionFactory.ts';

    const aql = `
        select 
            c/context/start_time/value as start_time,
            c/name/value as name
        from composition c 
        order by c/context/start_time/value desc 
        limit $count
    `;

    let count = 25;

    var queryParams = {};
    queryParams.count = count;

    function postComposition()
    {
        $openEHR.compose(            
            new CompositionFactory().getComposition(),
            -1502, 
            1002160);
    }

</script>
<div>
    <h1>
        Last {count} compositions
    </h1>
    <div>
        <button on:click="{postComposition}">
            Post Composition
        </button>        
    </div>
    <div>
        {#await $openEHR.query(aql, queryParams)}
            Loading...
        {:then result}
        <table>
            <thead>
                <tr>
                    <th>Start time</th>
                    <th>Name</th>
                </tr>
            </thead>
            {#each result.rows as row}
            <tr>
                <td>{row.items[0]}</td><td>{row.items[1]}</td>
            </tr>
            {/each}
        </table>    
        {:catch error}
            Failed to load compositions {error}
        {/await}
    </div>    
</div>

