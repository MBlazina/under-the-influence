import { writable } from "svelte/store";

export let players = writable([
  {
    "id": 1,
    "name": "Player 1"
  },
  {
    "id": 2,
    "name": "Player 2"
  }
]);
export let playersValid = writable(false);
export let activeGame = writable('');
export let activeGameLink = writable('');
export let gameInProgress = writable(false);
