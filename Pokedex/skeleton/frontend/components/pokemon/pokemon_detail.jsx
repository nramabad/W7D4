import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.pokemonId;
    this.props.requestOnePokemon(id);
  }
  
  render() {
    return (<div>Empty Container</div>);
    return (
      <ul>
        <PokemonIndexItem key={this.props.pokemon.id} pokemon={this.props.pokemon} />
      </ul>
    );
  }
}

export default PokemonDetail;