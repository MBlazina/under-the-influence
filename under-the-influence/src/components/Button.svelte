<script>
	export let text = "Button";
	export let type = "Black";
	export let link = '/';
	export let width = "0";

</script>

<a class={type} href={link} style="min-width:{width}px">{text}</a>

<style lang="scss">
	a {
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
		//letter-spacing: -0.07em;
		/* color: #000000; */
		color: $black;
		&.red {
			background: red;
		}
		&.white {
			background: $white;
			color: #000000;
		}
		&.grey {
			background: #000;
			color: $white;
		}
    &.dark-blue {
			background: $dark-blue;
			color: $white;
		}
    &.discord {
      background: $dark-blue;
			color: $white;
      &::before {
        height: 18px;
        margin-right: 10px;
        content: url('/icons/discord-white.svg');
      }
    }
	}
</style>
