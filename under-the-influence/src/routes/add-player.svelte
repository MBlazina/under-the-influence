<script>
	import Button from '../components/Button.svelte';
	import Logo from '../components/Logo.svelte';
	import Header from '../components/Header.svelte';
	import {
		activeGame,
		activeGameLink,
		players,
		playersValid,
		gameInProgress
	} from '../stores/players.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let gameButtonText = '';
	onMount(() => {
		$playersValid = true;

		if ($activeGame == '') {
			gameButtonText = 'Choose Game';
		} else if ($activeGame != '' && $gameInProgress == false) {
			gameButtonText = 'Start ' + $activeGame;
		} else if ($activeGame != '' && $gameInProgress) {
			gameButtonText = 'Resume "' + $activeGame + '"';
		}
	});
	function handleAddPlayer() {
		const lastPlayerId = $players[$players.length - 1].id;
		const nextPlayerId = lastPlayerId + 1;
		$players = [...$players, { id: nextPlayerId, name: 'Player ' + nextPlayerId }];
		handleValidation();
	}
	function handleDeletePlayer(selectedPlayer) {
		if ($players.length > 1) {
			$players = $players.filter((data) => data.id != selectedPlayer);
			$playersValid = true;
		} else if ($players.length < 2) {
			$playersValid = false;
		}
		handleValidation();
	}

	function handleValidation() {
		const playersForm = document.querySelector('#playersForm');
		const playersInputs = playersForm.querySelectorAll('.playerInput');
		const numberPlayers = playersInputs.length;

		for (let i = 0; i < numberPlayers; i++) {
			const playerName = playersInputs[i].value;
			const samePlayerName = document.querySelectorAll(
				'.playerInput[placeholder="' + playerName + '"]'
			).length;

			if (samePlayerName > 1) {
				playersInputs[i].classList.add('duplicate');
			} else {
				playersInputs[i].classList.remove('duplicate');
			}
		}

		let hasDuplicate = playersForm.querySelectorAll('.duplicate').length;
		if (hasDuplicate > 1 || $players.length < 2) {
			$playersValid = false;
		} else {
			$playersValid = true;
		}
	}
	function handleSubmit() {
		console.log('asdasdas');
		if ($activeGame == '') {
			goto('/choose-game');
		} else {
			goto('game/' + $activeGameLink);
			$gameInProgress = true;
		}
	}
</script>

<svelte:head>
	<title>Add players</title>
	<style>
		.duplicate {
			color: #ff5353;
		}
	</style>
</svelte:head>

<main>
	<Header>
		<Logo />
	</Header>

	<form id="playersForm" on:submit|preventDefault={handleSubmit}>
		{#each $players as player}
			<div class="form-group">
				<input
					class="playerInput"
					type="text"
					placeholder={player.name}
					bind:value={player.name}
					on:keyup={handleValidation}
				/>
				<button on:click|preventDefault={handleDeletePlayer(player.id)}>X</button>
			</div>
		{/each}
		<p>{$activeGame}</p>
		<button on:click|preventDefault={handleAddPlayer}>Add</button>
		<input type="submit" value={gameButtonText} disabled={!$playersValid} />

		<!-- value={$activeGame == '' ? 'Choose Game' : 'Start "' + $activeGame + '"'} -->
	</form>

	{JSON.stringify($players)}
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
		&.enabled {
			pointer-events: all;
			background: $dark-blue;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
