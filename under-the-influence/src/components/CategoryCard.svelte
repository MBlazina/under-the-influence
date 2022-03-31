<script>
	export let title = 'Name of game';
	export let description = 'Description of game';
	export let type = 'never-have-i-ever';
</script>

<a href="/" class={type}>
	<div class="category-icon {type}" />
	<div class="content">
		<h3>{title}</h3>
		<p>{description}</p>
    <slot></slot>
	</div>
</a>

<style lang="scss">
	a {
		background: $light-grey;
		border-radius: 12px;
		text-decoration: none;
		padding: 30px;
		min-height: 167px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 406px;
    margin: 5px ;
    &:hover {
        background-color: $grey;
      }
    &.never-have-i-ever{
      .category-icon {
        background-image: url('/icons/category-never-have-i-ever.png');
      }
      &:hover {
        background: $blackberry;
      }
    }
    &.blackout-express{
      .category-icon {
        background-image: url('/icons/category-blackout-express.png');
      }
      &:hover {
        background: $earth;
      }
    }
    &.get-to-know-each-other{
      .category-icon {
        background-image: url('/icons/category-get-to-know-each-other.png');
      }
      &:hover {
        background: $pink-red;
      }
    }
    &.dare-or-drink{
      .category-icon {
        background-image: url('/icons/category-dare-or-drink.png');
      }
      &:hover {
        background: $grasshoper;
      }
    }
    &.discord-special{
      .category-icon {
        background-image: url('/icons/category-discord-special.png');
      }
      &:hover {
        background: $discord-special;
      }
    }
    &.spicy-and-hot{
      .category-icon {
        background-image: url('/icons/category-spicy-and-hot.png');
      }
      &:hover {
        background: $bloody-ice;
      }
    }
    &.discord-nsfw{
      pointer-events: none;
      .category-icon {
        background-image: url('/icons/category-discord-nsfw.png');
      }
      &:hover {
        background: $bloody-ice;
      }
    }
    &.dare-or-drink-nsfw{
      pointer-events: none;
      .category-icon {
        background-image: url('/icons/category-dare-or-drink-nsfw.png');
      }
      &:hover {
        background: $bloody-ice;
      }
    }
    &.coming-soon{

      background: $blackberry;
      .category-icon {
        display: none;
      }
     
    }
   
	}
	h3 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 75.19%;
		/* or 18px */
		letter-spacing: -0.07em;
		color: $black;
    display: block;
    margin-bottom: 8px;
	}
	p {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		/* or 15px */
	}
  .category-icon {
    display: block;
    width: 75px;
    height: 75px;
    flex-shrink: 0;
    margin-right: 11px;
    background-size: 100%;
    background-repeat: no-repeat;
  }

</style>
