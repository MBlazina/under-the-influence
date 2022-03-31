<script>
  import Header from '../../components/Header.svelte'
</script>


  <div class="container">
    <Header />
    <slot />
  </div>
<style>
 .container {
   
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 80px;
 }
</style>
