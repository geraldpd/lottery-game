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

    export default {
        name: 'quickRunTable',
        props: {
            runNumbers: Array
        },
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
            generateWinningNumbers() {
                const n = 6

                // Initial empty array
                const winningNumbers = [];

                do {
                    // Generating random number
                    const luckyNumber = Math.floor(Math.random() * 59) + 1

                    if (!winningNumbers.includes(luckyNumber)) {
                        winningNumbers.push(luckyNumber);
                    }

                } while (winningNumbers.length < n)

                return this.winningNumbers = winningNumbers
            },
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

                let prize = 0

                switch (true) {
                    case matches == 3:
                        prize = 50
                        break;
                    case matches == 4:
                        prize = 100
                        break;
                    case matches == 5:
                        prize = 200
                        break;
                    case matches == 6:
                        prize = 500
                        break;

                    default:
                        prize = 0
                        break;
                }

                return prize

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