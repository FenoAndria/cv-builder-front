<template>
    <div class="pb-2 space-y-1">
        <h2 class="text-3xl">
            <slot></slot>
        </h2>
        <hr class="border border-maroon">
    </div>
</template>
<script>
export default {
    name: 'SectionTitle',
}
</script>