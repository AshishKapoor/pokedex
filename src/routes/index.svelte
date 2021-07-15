<script>
  import {pokemon} from '../stores/pokemart'
	import Card from '../components/card.svelte'
</script> 

<svelte:head>
  <title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>
{#each $pokemon as pokeman}
  <Card {pokeman}></Card>
{/each}