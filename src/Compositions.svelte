<script lang="ts">
	import { openEHR } from './openehrStore.ts';        
    import CompositionFactory from './compositionFactory.ts';
    import {marked} from 'marked';

    const aql = `
       select
            o/data[at0001]/origin/value as time,
            o/data[at0001]/events/name/value as name,  
            o/protocol[at0005]/items[openEHR-EHR-CLUSTER.fritekst_kodeverk_dips.v0]/items[at0001]/value/value as RealName,
            o/data[at0001]/events/data/items[at0004]/value/value as content,
            c/uid/value as testUID
        from composition c
            contains observation o[openEHR-EHR-OBSERVATION.progress_note.v1]
        order by o/data[at0001]/origin/value desc
        limit $count
    `;

    let count = 25;

    var queryParams = {};
    queryParams.count = count;

    function postComposition()
    {
        $openEHR.compose(            
            new CompositionFactory().createMarkdownComposition("# Markdown\n\nThis is a *MarkDown* sample file."),
            -1502, 
            1002160);
    }

    async function getQuery(aql, queryParams) {
        console.log("getQuery");
        var results = await $openEHR.query(aql, queryParams);
        console.log("getQuery", results);

        return results;
        /*return results.rows.map(r => 
            {
                time = r.items[0],
                name = r.items[1],
                content = r.items[3]
            });*/
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
        {#await getQuery(aql, queryParams)}
            Loading...
        {:then result}
        <table border="1">
            <thead>
                <tr>
                    <th>Start time</th>
                    <th>Name</th>
                    <th>Kodeverk</th>
                    <th>Innhold</th>
                </tr>
            </thead>
            {#each result.rows as row}
            <tr class="top">
                <td>{row.items[0]}</td>
                <td>{row.items[1]}</td>
                <td>{row.items[2]}</td>
                <td>{row.items[3]}</td>
                <td>{@html marked(row.items[4])}</td>
            </tr>
            {/each}
        </table>    
        {:catch error}
            Failed to load compositions {error}
        {/await}
    </div>    
</div>

<style>
    .top {
        vertical-align: top;        
    }
</style>

