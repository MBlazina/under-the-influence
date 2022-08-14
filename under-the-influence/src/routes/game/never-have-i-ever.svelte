<script>
	import Logo from '../../components/Logo.svelte';
	import Header from '../../components/Header.svelte';
	import Button from '../../components/Button.svelte';
	import { players, questionsPerPlayer, fetchData, activeGame } from '../../stores/players';
	import { dataset_dev, onMount } from 'svelte/internal';

	const numberOfQuestions = $players.length * questionsPerPlayer;
	onMount(() => {


		const playersCarousel = new Swiper('.playersCarousel', {
			// Optional parameters
			direction: 'horizontal',
			loop: false,
			slidesPerView: 5,
			centeredSlides: true,

			// Navigation arrows
			navigation: {
				nextEl: '.custom-next',
				prevEl: '.swiper-button-prev'
			}
		});

		const questionsCarousel = new Swiper('.questionsCarousel', {
			// Optional parameters
			direction: 'horizontal',
			loop: false,
			slidesPerView: 1,

			// Navigation arrows
			navigation: {
				nextEl: '.custom-next'
			}
			// And if we need scrollbar
		});
	});

	/* let promise = fetch('https://wpgraphql.000webhostapp.com/wp-json/wp/v2/posts?categories=4').then( */
/* 	let promise = fetch('https://wpgraphql.000webhostapp.com/graphql?query={posts(where:{categoryName:"blackout-express"}){nodes{title}}}').then( */
	let promise = fetch('https://wpgraphql.000webhostapp.com/graphql?query={posts(where:{categoryName:"' + $activeGame + '"}){nodes{title}}}').then(
		(x) => x.json()
	);


</script>











{#await promise}

	Loading
{:then data}

	<pre>
   
	{JSON.stringify(data, null, 2)}
  <h1>------------</h1>
    {#each Object.values(data.data.posts.nodes) as question, i}
			<pre>{question.title}</pre>
		{/each}  
	</pre>
{:catch error}

{/await}

<svelte:head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="/libs/swiper-bundle.min.css" />
	<script src="/libs/swiper-bundle.min.js"></script>
	<style>
		.playersCarousel .swiper-slide {
			font-weight: 900;
			font-size: 36px;
			text-align: center;
			color: #a9a9a9;
			opacity: 0.3;
		}
		.playersCarousel .swiper-slide-active {
			color: black;
			font-size: 40px;
			opacity: 1;
		}
		.playersCarousel .swiper-slide-next,
		.playersCarousel .swiper-slide-prev {
			opacity: 1;
		}
	</style>
</svelte:head>
<p>Game mode: {$activeGame}</p>
PLAYERS
<pre>{JSON.stringify($players)}</pre>


<div class="gameContainer">
	<!-- Slider main container -->
	<div class="swiper playersCarousel">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			{#each { length: questionsPerPlayer } as _}
				{#each $players as player}
					<div class="swiper-slide">{player.name}</div>
				{/each}
			{/each}
		</div>
	</div>

	<!-- Slider main container -->
	<div class="swiper questionsCarousel">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			{#each { length: numberOfQuestions } as _, i}
				<div class="swiper-slide">Random question {i + 1}</div>
			{/each}
		</div>
	</div>

	<button class="custom-next">NEXT PLAYER</button>
</div>

<style lang="scss">
	.swiper,
	.questionsCarousel {
	}
	.swiper-slide {
		text-align: center;
		border: 1px solid;
	}
	.gameContainer {
		max-width: 1300px;
		margin: 0 auto;
	}
</style>
