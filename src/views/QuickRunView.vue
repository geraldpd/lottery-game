<template>
    <div class="card">
        <div class="card-header">
            Quick Run
        </div>

        <div class="card-body">

            <div class="d-grid gap-2 col-6 mx-auto">
                <label for="">Numer of Games</label>
                <input @change="generateRuns" type="number" class="form-control" v-model="runs" min="1">

                <button :disabled="runs <= 0" @click="playLottery" class="btn btn-primary">Play Lottery</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'quickRun',
        data() {
            return {
                runs: 1,
                runNumbers: []
            }
        },
        methods: {
            generateRuns() {
                this.runNumbers = [];

                let i = 0
                while (i < this.runs) {
                    this.runNumbers.push(this.generateRandomNumbers())
                    i++;
                }
            },
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

                return randomNumbers
            },
            playLottery() {
                console.log(this.runNumbers)
                //this.$router.push({ name: 'lottoResult', query:{pickedNumber: JSON.stringify(this.pickedNumbers)} });
            }
        }
    }
</script>