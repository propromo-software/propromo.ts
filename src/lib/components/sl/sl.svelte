<script lang="ts" context="module">
    export enum ShoelaceComponentOptions { // used shoelace components in the app
      Icon = 'icon',
      IconButton = 'icon-button',
      Button = 'button',
      Alert = 'alert',
      Input = 'input',
      ProgressBar = 'progress-bar',
      Spinner = 'spinner',
      CopyButton = 'copy-button'
    }
</script>

<script lang="ts">
	/* Svelte */
    import { onMount } from 'svelte';

    export let component: ShoelaceComponentOptions | ShoelaceComponentOptions[];

    onMount(async () => { 
        if (Array.isArray(component)) {
            for (const c of component) {
                await loadComponent(c);
            }
        } else {
            await loadComponent(component);
        }
    });

    async function loadComponent(c: ShoelaceComponentOptions) { // <name>.js (auto load) || <name>.component.js
        switch (c) { // needed, because vite doesn't support dynamic imports like this: `/${var}/${var}.js`
            case ShoelaceComponentOptions.Icon:
                await import('@shoelace-style/shoelace/dist/components/icon/icon.js');
                break;
            case ShoelaceComponentOptions.IconButton:
                await import('@shoelace-style/shoelace/dist/components/icon-button/icon-button.js');
                break;
            case ShoelaceComponentOptions.Button:
                await import('@shoelace-style/shoelace/dist/components/button/button.js');
                break;
            case ShoelaceComponentOptions.Alert:
                await import('@shoelace-style/shoelace/dist/components/alert/alert.js');
                break;
            case ShoelaceComponentOptions.Input:
                await import('@shoelace-style/shoelace/dist/components/input/input.js');
                break;
            case ShoelaceComponentOptions.ProgressBar:
                await import('@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js');
                break;
            case ShoelaceComponentOptions.Spinner:
                await import('@shoelace-style/shoelace/dist/components/spinner/spinner.js');
                break;
            case ShoelaceComponentOptions.CopyButton:
                await import('@shoelace-style/shoelace/dist/components/copy-button/copy-button.js');
                break;
            default:
                console.error('No such component found');
                break;
        }
    }
</script>

<!-- Pass in a slot, if you want to render the shoelace component with props or, leave the slot empty, so that the component name is used leading to the default shoelace component -->

<slot>
    {@html `<sl-${component}></sl-${component}>`} <!-- can not use component, because it is a web-component and not a ConstructorOfATypedSvelteComponent -->
</slot>
