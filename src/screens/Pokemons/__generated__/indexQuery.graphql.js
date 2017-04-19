/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule indexQuery.graphql
 * @generated SignedSource<<0c833c5818fdbac8de9b3c2cc794effa>>
 * @relayHash 54192649d3a073a02d6d9041bbf7a8b3
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query indexQuery {
  pokemons {
    id
    ...PokemonCard_pokemon
  }
}

fragment PokemonCard_pokemon on Pokemon {
  id
  number
  name
  image
  types
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "indexQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Pokemon",
        "name": "pokemons",
        "plural": true,
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
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "indexQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "indexQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Pokemon",
        "name": "pokemons",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Pokemon",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "number",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "image",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "types",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query indexQuery {\n  pokemons {\n    id\n    ...PokemonCard_pokemon\n  }\n}\n\nfragment PokemonCard_pokemon on Pokemon {\n  id\n  number\n  name\n  image\n  types\n}\n"
};

module.exports = batch;
