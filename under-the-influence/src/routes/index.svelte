<script context="module">
	export async function load({ fetch }) {
		const url = import.meta.env.VITE_ENDPOINT;
		const response = await fetch(url);
		const result = await response.json();

		return {
			props: {
				result: result[0].title.rendered,
				result1: result[1].title.rendered,
				abc: 3
			}
		};
	}
</script>

<script>
import Logo from "../components/Logo.svelte";
import Button from "../../src/components/Button.svelte";

	export let result;
	export let result1;
	export let abc;

	let a = abc + 100;
</script>
<!-- <h1>{a}</h1>
	<h3>{import.meta.env.VITE_ENDPOINT}</h3>
	
	<p>{result}</p>
	<p>{result1}</p> -->
	<svelte:head>
		<title>Under the Influence</title>
	</svelte:head>
<div class="wrapper">
	<main>
		<h1>Under the influence</h1>
	
			<div class="logo-container">
				<Logo />
			</div>
	
		<Button	text="START PLAYING" type="white" link="/choose-game" width="422"/>
	</main>
</div>


<style>
h1{
	display: none;
}
.logo-container {
	margin-bottom: 96px;
}
.wrapper {
		width: 100%;
		height: 100vh;
		background: linear-gradient(
			123.35deg, #EBF3D0 0%, rgba(235, 243, 208, 0) 18.4%), radial-gradient(29.9% 70.94% at 44.25% 86.96%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(33.83% 53.57% at 35.87% 100%, #DC8DDC 0%, rgba(220, 141, 220, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(42.66% 49.72% at 45.56% 44.65%, #CBADEB 0%, rgba(194, 166, 241, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(134.59deg, #CDF9E8 20.63%, rgba(205, 249, 232, 0) 47.84%), linear-gradient(216.44deg, rgba(192, 169, 240, 0) -16.52%, #C0A9F0 -1.04%, rgba(192, 169, 240, 0) 16.99%), linear-gradient(128.53deg, rgba(192, 169, 240, 0) 28.63%, #C0A9F0 38.5%, rgba(192, 169, 240, 0) 50.26%), radial-gradient(40.75% 97.37% at 90.75% 40.15%, #FFFDB1 0%, #FEE4BF 34.46%, #F0BDD0 69.5%, rgba(255, 129, 38, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #C2A6F1;
		display: flex;
		justify-content: center;
		align-items: center;
	} 

</style>