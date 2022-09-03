<template>

    <h3>Total Winnings: {{ overAllWinnings  }}</h3>
    <p>
        Game Runs:  {{ runNumbers.length }}
        <br>
        RTP:  {{ getRtp }}%
    </p>
    <table class="table">
        <thead>
            <tr class="table-secondary">
                <th scope="col">
                    Winning Numbers
                    <br>
                    <NumberButton
                        v-for="number in winningNumbers"
                        :number="number"
                        :pickedNumbers="[]"
                        :disabled="true"
                        :key="number"
                    />

                </th>
                <th scope="col">
                    Match
                </th>
                <th scope="col">
                    Winnings
                </th>
            </tr>
        </thead>
        <tbody>
            <QuickRunTableRowVue
                v-for="(runNumber, i) in runNumbers"
                :key="i"
                :lottoNumbers="runNumber"
                :winningNumbers="winningNumbers"
            />
        </tbody>

    </table>
</template>

<script>
    import QuickRunTableRowVue from './QuickRunTableRow.vue';
    import NumberButton from './NumberButton.vue';
    import GenerateWinningNumbers from '@/mixins/generateWinningNumbers'
    import PlayStats from '@/mixins/playStats'

    export default {
        name: 'quickRunTable',
        props: {
            runNumbers: Array
        },
        mixins: [GenerateWinningNumbers, PlayStats],
        components: {
            QuickRunTableRowVue,
            NumberButton
        },
        data() {
            return {
                winningNumbers: [],
                overAllWinnings: 0,
                rtp: 0
            }
        },
        methods: {
            getOverAllWinnings() {

                let winnings = 0;
                this.runNumbers.forEach(lottoNumbers => {
                    let matches = lottoNumbers.filter(element => this.winningNumbers.includes(element)).length
                    if(matches > 2) {
                        winnings += this.getWinnings(matches)
                    }
                });

                this.overAllWinnings = winnings

            },
            getWinnings(matches) {
                return this.getTotalWinnings(matches)
            },
        },
        computed: {
            getRtp() {
                let x = this.overAllWinnings / this.runNumbers.length
                return x.toFixed(2)
            }
        },
        created() {
            this.generateWinningNumbers()
        },
        mounted(){
            this.getOverAllWinnings()
        }
    }
</script>