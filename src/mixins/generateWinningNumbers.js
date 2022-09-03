export default {
    data() {
        return {
            winningNumbers: []
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
        }
    },
}