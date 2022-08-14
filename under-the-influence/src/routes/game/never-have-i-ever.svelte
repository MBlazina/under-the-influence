<script>
	import Logo from '../../components/Logo.svelte';
	import Header from '../../components/Header.svelte';
  import Button from '../../components/Button.svelte';
	import { players, questionsPerPlayer } from '../../stores/players';
	import { onMount } from 'svelte/internal';

  const numberOfQuestions = $players.length * questionsPerPlayer;
	onMount(() => {
		const playersCarousel = new Swiper('.playersCarousel', {
			// Optional parameters
			direction: 'horizontal',
			loop: false,
			slidesPerView: 3,
			centeredSlides: true,
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},

			// Navigation arrows
			navigation: {
				nextEl: '.custom-next',
				prevEl: '.swiper-button-prev'
			}

			// And if we need scrollbar
		});

		const questionsCarousel = new Swiper('.questionsCarousel', {
			// Optional parameters
			direction: 'horizontal',
			loop: false,
slidesPerView: 1,
			// If we need pagination
			pagination: {
				el: '.swiper-pagination2',
				clickable: true,
				
			},

			// Navigation arrows
      navigation: {
					nextEl: '.custom-next'
				}
			// And if we need scrollbar
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/libs/swiper-bundle.min.css" />
	<script src="/libs/swiper-bundle.min.js"></script>
</svelte:head>
<main>
	<pre>{JSON.stringify($players)}</pre>
	Never Have I Ever
</main>

<!-- Slider main container -->
<div class="swiper playersCarousel">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
    {#each {length: questionsPerPlayer} as _}
      {#each $players as player}
      <div class="swiper-slide">{player.name}</div>
        
      {/each}
    {/each}
		
	</div>
	<!-- If we need pagination -->
	<div class="swiper-pagination" />

	<!-- If we need navigation buttons -->
	<!-- <div class="swiper-button-prev" />
	<div class="swiper-button-next" /> -->
</div>










<!-- Slider main container -->
<div class="swiper questionsCarousel">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
    {#each {length: numberOfQuestions} as _, i}
      
      <div class="swiper-slide">Random question {i+1}</div>
    {/each}

	</div>
	<!-- If we need pagination -->
	<div class="swiper-pagination swiper-pagination2" />
</div>


<button class="custom-next">NEXT PLAYER</button>


<style>
	.swiper,
	.questionsCarousel {
	height: 150px;
	}
	.swiper-slide {
		text-align: center;
		border: 1px solid;
	}
	
</style>
