<script>
import Button from "./Button.svelte";
import Logo from "./Logo.svelte";

</script>
<header>
  <div class="logo-container">
    <Logo />
  </div>
  <Button type="discord" text="JOIN OUR DISCORD"/>
</header>

<style>
  header {
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 92px;
  }
  .logo-container {
    height: 51px;
  }
</style>