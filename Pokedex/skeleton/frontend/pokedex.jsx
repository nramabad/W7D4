import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  const Root = () => (
    <Provider store={ store }>
      <HashRouter>
        <Route path="/" component={PokemonIndexContainer} />
      </HashRouter>
    </Provider>
  );
  
  ReactDOM.render(
    <Root store={store}/>,
    rootEl
  );
});