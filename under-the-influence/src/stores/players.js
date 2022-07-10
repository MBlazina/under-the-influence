import { writable } from "svelte/store";

export let players = writable([]);
export let playersValid = writable(false);
export let activeGame = writable('');
