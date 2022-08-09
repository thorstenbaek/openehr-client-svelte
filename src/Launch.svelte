<script>
    import {authorize} from "openehr-client-js";
	import {onMount} from 'svelte';

    onMount(async () => {
		authorize(
		{
			clientId: "openehr-client",
			redirectUri: "http://localhost:8080/app",	
            //iss: "https://vt-selecta-b.dips.local/DIPS-WebAPI/HL7/FHIR-R4",	
            //iss: "https://vt-bc-dev04-sr.dips.local/Arena-SmartEHR",
            //iss: "https://localhost:44311",
            iss: "https://vt-fi-a-app.dips.local/DIPS-SmartEHR",
            //iss: "https://localhost:5001",
            //iss: "https://localhost:44311/dips-smartehr-service",
            scope: "openid profile",
            launch: "2008903:encounter:resource",
		});
	});
</script>        

Loading...
