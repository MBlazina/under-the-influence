import { writable } from "svelte/store";

export let players = writable([
  {
    "id": "player1",
    "name": "Player 1"
  },
  {
    "id": "player2",
    "name": "Player 2"
  }
]);
export let playersValid = writable(false);
export let activeGame = writable('');
