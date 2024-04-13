<script lang="ts">
    export let currentStep: number;
    export let totalSteps: number;
  
    let stepStyles: string[] = [];

    getStepStyles();
    function getStepStyles() {
      stepStyles = Array.from({ length: totalSteps }, (_, i) => {
        if (i < currentStep - 1) {
          return 'bg-primary';
        } else if (i === currentStep - 1) {
          return 'bg-secondary';
        } else {
          return 'bg-propromo-grey';
        }
      });
    }
</script>

<div class="flex items-center gap-1 mb-4">
    {#each stepStyles as style, index (index + 1)}
      {#if index < totalSteps - 1}
        <div class="rounded-full w-[40px] h-[40px] {style}"></div>
        <div class="w-[12px] h-[4px] {style}"></div>
      {:else}
        <div class="rounded-full w-[40px] h-[40px] {style}"></div>
      {/if}
    {/each}
</div>
