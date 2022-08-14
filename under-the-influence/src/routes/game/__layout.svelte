<script>
	import '../../theme/global.scss';
  import Header from "../../components/Header.svelte";
  import Logo from "../../components/Logo.svelte";
  import Button from '../../components/Button.svelte';
  import { onMount } from 'svelte/internal';
  import {players} from '../../stores/players';




</script>

<div class="container">
	<Header>
		<Logo />
    <div class="header-buttons-container">
      <Button text="REMOVE PLAYER" type="white small" link="/add-player"></Button>
      <Button text="ADD PLAYER" type="dark-blue small" link="/add-player"></Button>
    </div>
	</Header>




	<slot />
</div>





<style lang="scss">
  .swiper-slide {
    min-height: 300px;
  }
.header-buttons-container{
  margin-left: auto;
  display: inline-flex;
}
</style>