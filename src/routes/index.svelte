<script>
  import {pokemon, fetchPokemon} from '../stores/pokemart'
	import Card from '../components/card.svelte'

	let searchTerm = ''
	let filteredPokemon = [];

	$: {
    if(searchTerm){
        filteredPokemon = $pokemon.filter( pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    else {
        filteredPokemon = [...$pokemon];
    }
	}

	fetchPokemon()
</script> 

<svelte:head>
  <title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} placeholder="Search Pokemon">
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<Card pokeman={pokeman}/>
	{/each}
</div>