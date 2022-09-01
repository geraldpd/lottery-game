<template>

  <div class="card">
    <div class="card-header">
      Manual Pick
    </div>

    <div class="card-body">

      <SelectNumbers
        :pickedNumbers="pickedNumbers"
        :maxPickedNumber="maxPickedNumber"
        @toggle-pick="togglePick"
      />

      <div class="d-grid gap-2 col-6 mx-auto">
        <br>
          <button @click="clearPick" class="btn btn-light">Clear Pick</button>
          <button @click="playLottery" :disabled="pickedNumbers.length != maxPickedNumber" class="btn btn-primary">Play Lottery</button>
      </div>
    </div>
  </div>

</template>

<script>
  import SelectNumbers from '@/components/SelectNumbers'

  export default {
    name: 'manualPick',
    components: {
      SelectNumbers
    },
    data() {
      return {
        pickedNumbers: [],
        maxPickedNumber: 6
      }
    },
    methods: {
      togglePick(number) {
        if(this.pickedNumbers.includes(number)) {

          const newPick = this.pickedNumbers.filter((picked) => picked !== number)
          this.pickedNumbers = newPick

        } else {

          if((this.pickedNumbers.length) === (this.maxPickedNumber)) {
            alert(`You have already selected ${this.maxPickedNumber} numbers`)
            return
          }

          this.pickedNumbers.push(number)

        }

      },
      clearPick() {
        this.pickedNumbers = []
      },
      playLottery() {
        this.$router.push({ name: 'lottoResult', query:{pickedNumber: JSON.stringify(this.pickedNumbers)} });
      }
    }
  }
</script>