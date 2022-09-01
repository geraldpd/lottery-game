<template>
    <tr>
        <td>
            <NumberButton
                v-for="number in lottoNumbers"
                :number="number"
                :pickedNumbers="winningNumbers"
                :disabled="true"
                :key="number"
            />
        </td>
        <td>{{ getTotalMatches }}</td>
        <td>{{ getTotalWinnings  }}</td>
    </tr>
</template>

<script>
    import NumberButton from './NumberButton.vue';
    export default {
        name: 'quickRunTable',
        props: {
            lottoNumbers: Array,
            winningNumbers: Array
        },
        components: {
            NumberButton
        },
        computed: {
            getTotalMatches() {
                return this.lottoNumbers.filter(element => this.winningNumbers.includes(element)).length;
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

            },
        }
    }
</script>