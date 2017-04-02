import Grid from 'components/Grid'
import PokemonCard from './components/PokemonCard'
import React, { PropTypes } from 'react'
import Spinner from 'components/Spinner'
import { gql, graphql } from 'react-apollo'

const Home = ({ data: { loading, pokemons }}) => {
  if (loading) {
    return <Spinner size={ 80 } />
  }

  return (
    <Grid>
      { pokemons.map(pokemon =>
        <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
      )}
    </Grid>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    pokemons: PropTypes.array
  }).isRequired
}

export default graphql(gql`
  query GetPokemons {
    pokemons(first: 151) {
      id
      ...PokemonCard
    }
  }
  ${PokemonCard.fragments.pokemon}
`)(Home)