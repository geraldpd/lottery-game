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

    <h5>Matches: {{ getMatches()  }}</h5>
    <h5>Winnings: {{ getWinnings() }}</h5>

    <br>

    <div class="d-grid gap-2 col-6 mx-auto">
        <a class="btn btn-primary" @click="$router.go(-1)">Play Again</a>
    </div>

</template>

<script>
    import NumberButton from '@/components/NumberButton'
    import GenerateWinningNumbers from '@/mixins/generateWinningNumbers'
    import PlayStats from '@/mixins/playStats'

    export default {
        name: 'LottoResult',
        data() {
            return {
                winningNumbers: [],
                pickedNumbers: [],
            }
        },
        mixins: [GenerateWinningNumbers, PlayStats],
        methods: {
            getMatches() {
                return this.getTotalMatches(this.pickedNumbers, this.winningNumbers)
            },
            getWinnings() {
                return this.getTotalWinnings(this.getMatches())
            }
        },
        components: {
            NumberButton
        },
        created() {
            this.winningNumbers = this.generateWinningNumbers()

            this.pickedNumbers = JSON.parse(this.$route.query.pickedNumber)
        }
    }
</script>