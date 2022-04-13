import { writable } from "svelte/store";

export let players = writable([]);
export let playersAdded = writable(false);
export let activeGame = writable('');
