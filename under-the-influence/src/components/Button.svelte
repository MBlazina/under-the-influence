<script>
	export let text;
	export let type;
	export let link;
</script>

<a class={type} href={link}>{text}</a>

<style lang="scss">
	a {
		border: none;
		width: 422px;
		height: 64px;
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
		letter-spacing: -0.07em;
		color: #000000;
		font-family: 'Roboto', sans-serif;
    &.red {
      background: red;
    }
	}
	.white {
		background: #ffffff;
		color: #000000;
	}
	.grey {
		background: #000;
		color: #fff;
	}
</style>
