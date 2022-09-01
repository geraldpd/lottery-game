<template>
    <div class="card">
        <div class="card-header">
            Manual Pick
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

    export default {
        name: 'luckyDip',
        data() {
            return {
                randomNumbers: []
            }
        },
        components: {
            NumberButton
        },
        methods: {
            generateRandomNumbers() {
                const n = 6

                // Initial empty array
                const randomNumbers = [];

                do {
                    // Generating random number
                    const luckyNumber = Math.floor(Math.random() * 59) + 1

                    if (!randomNumbers.includes(luckyNumber)) {
                        randomNumbers.push(luckyNumber);
                    }

                } while (randomNumbers.length < n)

                this.randomNumbers = randomNumbers

                console.log(this.randomNumbers)
                return randomNumbers
            },
            playLottery() {
                this.$router.push({ name: 'lottoResult', query:{pickedNumber: JSON.stringify(this.randomNumbers)} });
            }
        },
        created() {
            this.randomNumbers = this.generateRandomNumbers()
        }
    }
</script>