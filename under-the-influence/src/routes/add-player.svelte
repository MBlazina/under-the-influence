<script>
	import Button from '../components/Button.svelte';
	import Logo from '../components/Logo.svelte';
	import Header from '../components/Header.svelte';
	import { activeGame, players, playersValid } from '../stores/players.js';
	import { goto } from '$app/navigation';
	import { query_selector_all } from 'svelte/internal';

	$players = [
		{
			id: 1,
			name: 'Player 1'
		},
		{
			id: 2,
			name: 'Player 2'
		}
	];

	function handleAddPlayer() {
		console.log($players[$players.length - 1].id);
		const lastPlayerId = $players[$players.length - 1].id;
		const nextPlayerId = lastPlayerId + 1;
		$players = [...$players, { id: nextPlayerId, name: 'Player ' + nextPlayerId }];
	}
	function handleDeletePlayer(selectedPlayer) {
		if ($players.length > 1) {
			$players = $players.filter((data) => data.id != selectedPlayer);
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

	{#each $players as player}
		<input type="text" placeholder={player.name} bind:value={player.name} />
		<button on:click={handleDeletePlayer(player.id)}>X</button>
	{/each}

	<button on:click={handleAddPlayer}>Add</button>
{JSON.stringify($players)}
	<h2>Add players</h2>
	<form id="playersForm" action="" />
	<a href="">Add Player</a>
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
</style>
