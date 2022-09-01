<template>

    <div class="card text-center">
        <div class="card-header">
            <h3>Winning Numbers</h3>
        </div>
        <div class="card-body">

            <NumberButton
                v-for="number in winningNumbers"
                :number="number"
                :pickedNumbers="[]"
                :disabled="true"
                :key="number"
            />

        </div>
    </div>

    <br>

    <div class="card text-center">
        <div class="card-header">
            <h3>Your Lotto Numbers</h3>
        </div>
        <div class="card-body">
            <NumberButton
                v-for="number in pickedNumbers"
                :number="number"
                :pickedNumbers="winningNumbers"
                :key="number"
            />
        </div>
    </div>

    <br>

    <h5>Matches: {{ getTotalMatches  }}</h5>
    <h5>Winnings: {{ getTotalWinnings }}</h5>

    <br>

    <div class="d-grid gap-2 col-6 mx-auto">
        <a class="btn btn-primary" @click="$router.go(-1)">Play Again</a>
    </div>

</template>

<script>
    import NumberButton from '@/components/NumberButton'

    export default {
        name: 'LottoResult',
        data() {
            return {
                winningNumbers: [],
                pickedNumbers: []
            }
        },
        components: {
            NumberButton
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
            }
        },
        computed: {
            getTotalMatches() {
                return this.pickedNumbers.filter(element => this.winningNumbers.includes(element)).length;
            },
            getTotalWinnings() {

                let prize = 0

                switch (true) {
                    case this.getTotalMatches == 3:
                        prize = 50
                        break;
                    case this.getTotalMatches == 4:
                        prize = 100
                        break;
                    case this.getTotalMatches == 5:
                        prize = 200
                        break;
                    case this.getTotalMatches == 6:
                        prize = 500
                        break;

                    default:
                        prize = 0
                        break;
                }

                return prize
            }
        },
        created() {
            this.winningNumbers = this.generateWinningNumbers()

            this.pickedNumbers = JSON.parse(this.$route.query.pickedNumber)
        }
    }
</script>