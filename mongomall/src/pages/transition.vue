<template>
  <div class="transition">
    <h3>{{message}}</h3>
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
        code: 666666,
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
      cardStyle () {
        return {
          fontSize: `${this.fontSize}px`
        }
      }
    },
    methods: {
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
  .transition {
    padding: 10px;
  }
</style>
