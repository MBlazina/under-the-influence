<script>
  import Header from '../../components/Header.svelte'
</script>

<div class="container">
  <Header />
  
  <slot></slot>
</div>

<style>
  .container {
    height: 100vh;
    width: 100%;
  }
</style>