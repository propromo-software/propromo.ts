<script>
    import Shoelace from "$component/sl/Shoelace.svelte";
    import Button from "$component/sl/Button.svelte";
    import Icon from "$component/sl/Icon.svelte";
    import Input from "$component/sl/Input.svelte";
    import ProgressBar from "$component/sl/ProgressBar.svelte";
    import Spinner from "$component/sl/Spinner.svelte";
    import IconButton from "$component/sl/IconButton.svelte";
    import CopyButton from "$component/sl/CopyButton.svelte";
</script>

<Shoelace>
    <sl-spinner></sl-spinner>
</Shoelace>

<Button>Hello</Button>
<Icon name="star-fill">Icon</Icon>
<Input></Input>
<ProgressBar></ProgressBar>
<Spinner></Spinner>
<IconButton></IconButton>
<CopyButton text="Copied"></CopyButton>
