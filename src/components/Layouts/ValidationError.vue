<template>
    <div v-if="this.$props.errors">
        <div v-for="(err, index) in this.$props.errors" :key="index">
            <div class="" v-if="index == this.$props.column">
                <div v-for="e in err">
                    <Alert>
                        <i class="bi bi-info-circle"></i>{{ e }}
                    </Alert>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from '../Layouts/Alert.vue';
export default {
    name: 'ValidationError',
    props: ['errors', 'column'],
    components: {
        Alert
    }
}
</script>