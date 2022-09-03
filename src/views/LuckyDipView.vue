<template>
    <div class="card">
        <div class="card-header">
            Lucky Dip
        </div>

        <div class="card-body">

            <NumberButton
                v-for="number in randomNumbers"
                :number="number"
                :pickedNumbers="[]"
                :disabled="true"
                :key="number"
            />

            <div class="d-grid gap-2 col-6 mx-auto">
                <br>
                <button @click="generateRandomNumbers" class="btn btn-light">Random Pick</button>
                <button @click="playLottery" class="btn btn-primary">Play Lottery</button>
            </div>
        </div>
    </div>

</template>

<script>
    import NumberButton from '@/components/NumberButton'
    import GenerateWinningNumbers from '@/mixins/generateWinningNumbers'

    export default {
        name: 'luckyDip',
        data() {
            return {
                randomNumbers: []
            }
        },
        mixins: [GenerateWinningNumbers],
        components: {
            NumberButton
        },
        methods: {
            generateRandomNumbers() {
                this.randomNumbers = this.generateWinningNumbers()//reused winning number function
            },
            playLottery() {
                this.$router.push({ name: 'lottoResult', query:{pickedNumber: JSON.stringify(this.randomNumbers)} });
            }
        },
        created() {
            this.generateRandomNumbers()
        }
    }
</script>