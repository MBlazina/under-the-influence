<script>
	import Button from '../components/Button.svelte';
	import Logo from '../components/Logo.svelte';
	import Header from '../components/Header.svelte';
	import { activeGame, players, playersAdded } from '../stores/players.js';
	import { goto } from '$app/navigation';

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
		let inputWrapper = document.querySelector('.inputWrapper');
		let newInput = inputWrapper.cloneNode(true);
		newInput.querySelector('input').value = '';

		players.append(newInput);
		addPlaceholder();
		addRemove();
	}

	function removePlayer() {
		let currentPlayersNumber = document.querySelectorAll('.inputWrapper').length;
		if (currentPlayersNumber > 1) {
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

	function handleSubmit() {
		$players = [];
		const tempPlayers = document.querySelectorAll('.player-input');

		for (let i = 0; i < tempPlayers.length; i++) {
			if (tempPlayers[i].value) {
				$players = [...$players, tempPlayers[i].value];
			}
		}
		$playersAdded = true;
		console.log($players);
		console.log('selected game: ' + $activeGame.length);

		if ($players.length > 1) {
			if ($activeGame.length == 0) {
				goto('/choose-game');
			} else {
				goto('/game/' + $activeGame);
			}
		}
	}
</script>

<svelte:head>
	<title>Add players</title>
</svelte:head>

<main>
	<Header>
		<Logo />
	</Header>
	<!-- TODO fill players if already added in store-->
	<h2>Add players</h2>
	<h3>Selecded Game {$activeGame}</h3>
	{$activeGame}
	<form id="players" on:submit|preventDefault={handleSubmit} class="players-form" action="">
		<div class="inputWrapper">
			<input type="text" placeholder="Player 1" class="player-input" />
			<div class="removeIcon" />
		</div>
	</form>
	<button class="add-players-btn" on:click={handleAppend}>Add a player</button>
	<input class="start-game-btn" form="players" type="submit" value="START THE GAME" />
	{#if $playersAdded == true && $players.length < 2}
		<p>Add at least two players!</p>
	{/if}
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
			margin-right: 8px;
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
