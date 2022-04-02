<script>
	import Button from '../components/Button.svelte';
	import Logo from '../components/Logo.svelte';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';
	import { name } from '../stores/players.js';

	let numPlayers = 1;

	function addPlaceholder() {
		let playerInputs = document.querySelectorAll('.inputWrapper > input');
		let numPlayers = playerInputs.length;
		for (let i = 0; i < numPlayers; i++) {
			playerInputs[i].setAttribute('placeholder', 'Player ' + (i + 1));
		}
	}

	function handleAppend() {
		let players = document.querySelector('.players-form');
		let currentPlayers = document.querySelectorAll('.inputWrapper').length;
		console.log(currentPlayers);

		let inputWrapper = document.querySelector('.inputWrapper');
		let newInput = inputWrapper.cloneNode(true);

		players.prepend(newInput);
		addPlaceholder();

		addRemove();
	}

	function removePlayer() {
		let currentPlayersNumber = document.querySelectorAll('.inputWrapper').length;
		if (currentPlayersNumber > 1) {
			console.log(this.parentElement);
			this.parentElement.remove();
			addPlaceholder();
		}
	}
	function addRemove() {
		let removeIcons = document.querySelectorAll('.removeIcon');
		for (let i = 0; i < removeIcons.length; i++) {
			removeIcons[i].addEventListener('click', removePlayer);
		}
	}
	onMount(() => {});
</script>

<svelte:head>
	<title>Add players</title>
</svelte:head>

<main>
	<Header>
		<Logo />
	</Header>
	<h2>Add players</h2>
	<span>{numPlayers}</span>
	<form on:submit|preventDefault class="players-form" action="">
		<div class="inputWrapper">
			<input type="text" placeholder="Player 1" />
			<div class="removeIcon">X</div>
		</div>
		<input type="submit" />
	</form>

	<button on:click={handleAppend}>Add player</button>
</main>
