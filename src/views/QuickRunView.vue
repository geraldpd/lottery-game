<template>
    <div class="card">
        <div class="card-header">
            Quick Run
        </div>

        <div class="card-body">

            <div v-if="!play" class="d-grid gap-2 col-6 mx-auto">
                <label for="">Numer of Games</label>
                <input @change="generateRuns" type="number" class="form-control" v-model="runs" min="1">

                <button :disabled="runs <= 0" @click="playLottery" class="btn btn-primary">Play Lottery</button>
            </div>

            <div v-else class="d-grid gap-2 col-6 mx-auto">
                <button @click="resetLottery" class="btn btn-secondary">Reset</button>
            </div>

        </div>

        <QuickRunTableVue v-if="play" :runNumbers="runNumbers" />
    </div>

</template>

<script>
    import QuickRunTableVue from '@/components/QuickRunTable.vue'

    export default {
        name: 'quickRun',
        components: {
            QuickRunTableVue
        },
        data() {
            return {
                play: false,
                runs: 1,
                runNumbers: [],
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
                this.play = true
                //this.$router.push({ name: 'lottoResult', query:{pickedNumber: JSON.stringify(this.pickedNumbers)} });
            },
            resetLottery() {
                this.play = false
                this.runs = 1
                this.runNumbers = []

                this.generateRuns()
            }
        },
        created() {
            if(! this.runs) {
                return
            }

            //pre-populate runNumbers
            this.generateRuns();
        }
    }
</script>