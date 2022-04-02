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
			<div class="removeIcon" />
		</div>

		<button class="add-players-btn" on:click={handleAppend}>Add a player</button>
		<input class="start-game-btn" type="submit" value="START THE GAME" />
	</form>
</main>

<style lang="scss">
	.inputWrapper {
		position: relative;
		display: flex;
		align-items: center;
		margin: 8px 0;
		&:hover {
			.removeIcon {
				display: block;
			}
		}
	}
	input {
		height: 64px;
		border: 1px solid $grey;
		border-radius: 12px;
		padding: 0 26px;
		min-width: 422px;
	}
	.removeIcon {
		display: none;
		position: absolute;
		right: 26px;
		width: 24px;
		height: 24px;
		background-image: url('/icons/add.svg');
		transform: rotate(45deg);
		cursor: pointer;
	}
	.add-players-btn {
		color: $dark-blue;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 900;
		font-size: 18px;
		/* or 14px */
		background: none;
		border: none;
		text-align: center;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 25px auto;
		&::before {
			display: block;
			width: 24px;
			height: 24px;
			content: url('/icons/add.svg');
		}
		
	}
	.start-game-btn {
			border: none;
			width: auto;
			height: 64px;
			padding: 0 64px;
			background: #ffffff;
			border-radius: 12px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 900;
			font-size: 18px;

			background: $dark-blue;
			color: $white;

			cursor: pointer;
		}
</style>
