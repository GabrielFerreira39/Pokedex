import NavBar from "../../components/searchBar/SearchBar";
import PokemonCard from "../../components/pokemonCards/PokemonCards";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={2.4}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2.4}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2.4}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2.4}>
            <PokemonCard />
          </Grid>
          <Grid item xs={2.4}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
