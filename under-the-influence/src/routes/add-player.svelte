<script>
	import Button from '../components/Button.svelte';
	import Logo from '../components/Logo.svelte';
	import Header from '../components/Header.svelte';
	import { activeGame, players, playersValid } from '../stores/players.js';
	import { goto } from '$app/navigation';
	import { query_selector_all } from 'svelte/internal';

	let numPlayers = 1;

/* 	function addPlaceholder() {
		let playerInputs = document.querySelectorAll('.inputWrapper > input');
		let numPlayers = playerInputs.length;
		for (let i = 0; i < numPlayers; i++) {
			playerInputs[i].setAttribute('placeholder', 'Player ' + (i + 1));
		}
	} */

/* 	function handleAppend() {
		let players = document.querySelector('.players-form');
		let inputWrapper = document.querySelector('.inputWrapper');
		let newInput = inputWrapper.cloneNode(true);
		newInput.querySelector('input').value = '';

		players.append(newInput);
		addPlaceholder();
		addRemove();
	} */
	function handleValidate(el) {
		/* const inputValue = el.target.value; */
		const arr = document.querySelectorAll('input');
		const inputs = arr.length;

		for (let i = 0; i < inputs; i++) {
			const currentInput = arr[i];
			const inputValue = arr[i].value;

			let arrSum = 0;
			for (let j = 0; j < inputs; j++) {
				if (inputValue === arr[j].value) {
					arrSum += 1;
				}
			}
			if (arrSum > 1 || inputValue == '') {
				currentInput.classList.add('duplicate');
			} else {
				currentInput.classList.remove('duplicate');
			}
		}
		const isValid = document.querySelectorAll('input.duplicate').length === 0;
		if(isValid) {
			$playersValid = true;
		}
		else {
			$playersValid = false;
		}
		console.log('players valid: ' + $playersValid);
		
	}
	/* function removePlayer() {
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
	} */



	//TEST
	
	function updatePlayers() {
		$players = [];
		const tempPlayers = document.querySelectorAll('input');

		for (let i = 0; i < tempPlayers.length; i++) {
			if (tempPlayers[i].value) {
				$players = [...$players, tempPlayers[i].value];
			}
		}

	}

function handleStartGame() {
		updatePlayers();

	}

	//TEST VALIDATE

	function handleAddPlayer() {
		
		updatePlayers();
		$players = [...$players, 'Player ' + parseInt($players.length + 1)];
		handleValidate();
		
	}
	function handleDeletePlayer(selectedPlayer) {
		console.log(selectedPlayer);
		$players = $players.filter(function (player, index, arr) {
			if (player != selectedPlayer) return player;
		});
		console.log($players);
		handleValidate();
	}
	//let hasDuplicatePlayers = document.querySelectorAll('input');
</script>

<svelte:head>
	<title>Add players</title>
	<style>
		.duplicate {
			color: #FF5353;
		}
	</style>
</svelte:head>

<main>
	<Header>
		<Logo />
	</Header>

	<h2>Add players</h2>

	{#if $players.length == 0}
		<input type="text" placeholder="Player 1" on:input={handleValidate}/>
		<button disabled>X</button>
		<input type="text" placeholder="Player 2" on:input={handleValidate}/>
		<button disabled>X</button>
	{/if}

	{#each $players as player}
		<input type="text" value={player} on:input={handleValidate}/>
		<button on:click={handleDeletePlayer(player)}>X</button>
	{/each}
	<button class="add-players-btn" on:click={handleAddPlayer}>Add a player</button>
	<a href={$activeGame != '' ? 'game/' + $activeGame : '/choose-game'} class="start-game-btn" class:enabled="{$playersValid == true}" on:click={handleValidate}>START THE GAME</a>
	<p>{$players}</p>
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

		background: $grey;
		color: $white;
pointer-events: none;
		cursor: pointer;
		&.enabled{
			pointer-events: all;
			background: $dark-blue;
		}
	}


</style>
