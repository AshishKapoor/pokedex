<script>
  export let pokeman;
</script>

<a href={`/pokeman/${pokeman.id}`}>
  <img src={pokeman.image} alt={pokeman.name} />
  <h2>{pokeman.id}. {pokeman.name}</h2>
</a>