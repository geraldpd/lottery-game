<template>
    <button
      type="button"
      :class="['btn', this.pickedNumbers.includes(number) ? 'btn-primary' : 'btn-light']"
      @click="togglePick(number)"
    >
      {{number}}
    </button>
</template>

<script>
    export default {
        name: 'numberButton',
        props: {
            number: Number,
            pickedNumbers: Array,
            maxPickedNumber: Number
        },
        methods: {
            togglePick(number) {
                this.$emit('toggle-pick', number)
            }
        }
    }
</script>

<style scoped>
    button {
        border-radius: 50%;
        margin:5px;
    }
</style>