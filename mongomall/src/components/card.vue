<template>
  <div class="card" @overflow="overflowHandler">
    <div class="corner">
      <slot></slot>
    </div>
    <p>{{person.name}}</p>
    <p>{{person.age}}</p>
    <p>{{person.id}}</p>
    <p>{{person.desc}}</p>
    <p>
      <input type="text" :value="message">
      <button @click="handler">click</button>
    </p>
  </div>
</template>
<script>
export default {
//  inheritAttrs: false,
  props: {
    message: {
      type: String
    },
    person: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      value: 'value'
    }
  },
  methods: {
    overflowHandler (payload) {
      console.log(`${payload} from child`)
    },
    handler (e) {
      this.$emit('overflow:name', 12345678)
    }
  },
  mounted () {}
}
</script>
<style scoped>
  p {
    margin: 0 0 8px
  }
  .card {
    position: relative;
    width: 20%;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 2px;
  }
  .card:hover {
    border-style: dashed;
  }
  .corner {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 12px;
    color: rgb(24, 163, 71)
  }
</style>
