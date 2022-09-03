export default {
    data() {
        return {
            totalMatches: 0,
            winningNumbers: 0
        }
    },
    methods: {
        getTotalMatches(pickedNumbers, winningNumbers) {
            this.totalMatches=  pickedNumbers.filter(element => winningNumbers.includes(element)).length;

            return this.totalMatches
        },
        getTotalWinnings(matches) {

            let winnings = 0

            switch (true) {
                case matches == 3:
                    winnings = 50
                    break;
                case matches == 4:
                    winnings = 100
                    break;
                case matches == 5:
                    winnings = 200
                    break;
                case matches == 6:
                    winnings = 500
                    break;

                default:
                    winnings = 0
                    break;
            }

            return winnings
        }
    },
}