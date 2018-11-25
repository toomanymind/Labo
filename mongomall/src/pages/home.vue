<template>
  <div class="home">
    <h3 v-text="message">{{message}}--------</h3>
    <card :person="person1"></card>
  </div>
</template>

<script>
import card from '../components/card.vue'

export default {
  components: {
    card
  },
  data () {
    return {
      message: 'message',
      code: 0,
      person1: {
        name: 'Tom',
        age: '23',
        id: 't6adf6732831',
        desc: 'some random guy',
        hobbies: 'eat'
      }
    }
  },
  computed: {
    cardStyle: function (num) {
      var a = 110
      if (num === a) {
        return {
          fontSize: `${this.fontSize}px`
        }
      }
    }
  },
  methods: {
    fn: function (n) {
      var a = 1
      if (n === a) {
        return n
      }
    },
    overflowHandler (payload) {
      console.log(payload)
    },
    handler (e) {
      console.log(e.currentTarget)
    },
    submit (e) {
      console.log(e.key)
    }
  },
  mounted () {
    window['home'] = this
  }
}
</script>

<style scoped>
  .home {
    padding: 10px;
  }
  p {
    padding: 10px;
    border: 1px dashed green;
    margin-bottom: 40px;
  }
</style>
