export default async function getPokemons(setpokemos) {
  try {
    const response = await fetch(
      ` https://pokeapi.co/api/v2/pokemon?limit=152`
    );

    if (response.ok) {
      const { results } = await response.json();
      setpokemos(results);
    } else {
      console.log("ups.. ocurrio un error");
    }
  } catch (error) {
    console.error("el error es: ", error);
  }
}
