<script>
import Logo from "../../components/Logo.svelte";
import Header from "../../components/Header.svelte";
import {players} from "../../stores/players";

</script>

<main>
  <p>{JSON.stringify($players)}</p>
  Never Have I Ever
</main>
