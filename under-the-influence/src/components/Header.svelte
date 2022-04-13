<script>
import Button from "./Button.svelte";
import Logo from "./Logo.svelte";

</script>
<header>
  <slot></slot>
</header>

<style>
  header {
    height: 106px;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 15px;
  }
  .logo-container {
    height: 51px;
  }
</style>