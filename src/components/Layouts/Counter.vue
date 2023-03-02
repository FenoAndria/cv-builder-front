<template>
    <div class="bg-maroon text-white rounded shadow p-2">
        <div class="text-center">
            <p class="text-8xl">{{ count }}</p>
            <p class="text-3xl">{{ item }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Counter',
    props: ['item', 'count']
}
</script>