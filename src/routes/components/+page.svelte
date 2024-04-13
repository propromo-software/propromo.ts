<script lang="ts">
    import Sl, { ShoelaceComponentOptions } from "$component/sl/sl.svelte";
</script>

<Sl component={[ShoelaceComponentOptions.Spinner, ShoelaceComponentOptions.Button]}>
    <sl-spinner></sl-spinner>
    <sl-button>Hello</sl-button>
</Sl>

<!-- <sl-button>Hello</sl-button>
<sl-icon name="star-fill"></sl-icon>
<sl-copy-button value="Copied"></sl-copy-button> -->
