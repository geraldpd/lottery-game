<template>
    <h3>select number</h3>

    <NumberButton
      v-for="number in lotteryNumbers"
      :number="number"
      :pickedNumbers="pickedNumbers"
      :maxPickedNumber="maxPickedNumber"
      @toggle-pick="$emit('toggle-pick', number)"
      :key="number" />
    <br>

    <p v-if="pickedNumbers.length != maxPickedNumber">
      Select {{ maxPickedNumber - pickedNumbers.length }} numbers
    </p>
</template>

<script>
    import NumberButton from '@/components/NumberButton'

    export default {
        name: 'selectNumber',
        components: {
            NumberButton
        },
        props: {
            pickedNumbers: Array,
            maxPickedNumber: Number
        },
        data() {
            return {
                lotteryNumbers: Array.from({length: 59}, (_, i) => i + 1),
            }
        },
        emits: ['toggle-pick']
    }
</script>