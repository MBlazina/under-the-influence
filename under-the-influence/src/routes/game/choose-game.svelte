<script>
	import CategoryCard from '../../components/CategoryCard.svelte';
  import Button from '../../components/Button.svelte';
</script>

<svelte:head>
	<title>Choose Game</title>
</svelte:head>

	<h2>Choose your game</h2>
	<div class="category-container">
    <CategoryCard
      title="Never have I ever"
      description="A drinking game in which players take turns asking other players about things they have not done."
    />
      <CategoryCard
      title="Get to know eachother"
      description="A drinking game perfect for players who dont know eachother."
        type="get-to-know-each-other"
    />
      <CategoryCard
      title="Blackout Express"
      description="A drinking game in which players are given an amount of shots to drink."
        type="blackout-express"
    />
      <CategoryCard
      title="Dare or drink Online"
      description="A drinking game made for dares to do online infront of the camera"
        type="dare-or-drink"
    />
      <CategoryCard
      title="Discord Special"
      description="A drinking game made specially for discord servers!"
        type="discord-special"
    />
      <CategoryCard
      title="Spicy & Hot"
      description="A drinking game in which players are answering uncomfortable personal questions."
        type="spicy-and-hot"
    />
    <CategoryCard
      title="Discord NSFW"
      description="A drinking game made specially for discord servers, with NSFW seggzy questions."
        type="discord-nsfw"
    />
    <CategoryCard
      title="Dare or Drink NSFW"
      description="A drinking game made for dares to do online infront of the camera, with NSFW seggzy dares."
      type="dare-or-drink-nsfw"
    />
    <CategoryCard
      title="More games coming soon!"
      description="Join our discord where you can join online parties, suggest new drinking games and create questions."
        type="coming-soon"
    ><a class="discord-link" href="/">Join now</a>
  </CategoryCard>
  </div>
  <Button type="dark-blue" width="422" text="ADD PLAYERS"/>


<style lang="scss">
  h2 {
    display: block;
    margin-bottom: 36px;
  }
  .category-container {
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 78px;
  }
  .discord-link {
    display: block;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    margin-top: 15px;
    color: $font-main;
  }
</style>
