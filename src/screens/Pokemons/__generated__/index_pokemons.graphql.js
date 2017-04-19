/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule index_pokemons.graphql
 * @generated SignedSource<<fdd15f208931af99c7e964a711c27420>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type index_pokemons = {
  id: string;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "index_pokemons",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PokemonCard_pokemon",
      "args": null
    }
  ],
  "type": "Pokemon"
};

module.exports = fragment;