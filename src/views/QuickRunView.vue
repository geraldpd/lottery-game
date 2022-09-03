<template>
    <div class="card">
        <div class="card-header">
            Quick Run
        </div>

        <div class="card-body">

            <div v-if="!play" class="d-grid gap-2 col-6 mx-auto">
                <label for="">Numer of Games</label>
                <input type="number" class="form-control" v-model="runs" min="1" max="10000">

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
    import GenerateWinningNumbers from '@/mixins/generateWinningNumbers'
    import PlayStats from '@/mixins/playStats'

    export default {
        name: 'quickRun',
        components: {
            QuickRunTableVue
        },
        mixins: [GenerateWinningNumbers, PlayStats],
        data() {
            return {
                play: false,
                runs: 1,
                runNumbers: [],
            }
        },
        methods: {
            generateRunNumbers() {
                this.runNumbers = [];

                let i = 0
                while (i < this.runs) {
                    this.runNumbers.push(this.generateWinningNumbers())
                    i++;
                }
            },
            playLottery() {
                if(this.runs > 10000) {
                    if(! confirm(`Are you sure you want to play ${this.runs} games?`)) {
                        return;
                    }
                }

                this.generateRunNumbers()
                this.play = true
            },
            resetLottery() {
                this.play = false
                this.runs = 1
                this.runNumbers = []

                this.generateRunNumbers()
            }
        }
    }
</script>