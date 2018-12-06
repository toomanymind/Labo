<template>
  <div class="transition">
    <div>
      <button @click="visible = !visible">Toggle</button>
      <button @click="shuffle">Shuffle</button>
    </div>
    <div class="row inout">
      <!--<transition-->
        <!--appear-->
        <!--appear-class="appear"-->
        <!--appear-to-class="appear-to"-->
        <!--appear-active-class="appear-active">-->
        <!--<p class="toggle" v-if="visible">visible</p>-->
      <!--</transition>-->
      <transition name="slide-fade" mode="out-in" @shuffle=shuffleHandler>
        <table v-if="visible">
          <tr><td>td</td></tr>
        </table>
        <p v-else>Sorry, no items found.</p>
      </transition>
    </div>
    <div class="row group">
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">
          {{item}}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      visible: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    shuffle: function () {
      this.$emit('shuffle', 'shuffle')
      this.items = _.shuffle(this.items)
    },
    shuffleHandler: function (payload) {
      console.log(payload)
    }
  }
}
</script>

<style scoped>
  .transition {
    padding: 10px;
  }
  .row {
    padding: 10px;
    border: 1px dashed #999;
    margin: 8px 0
  }
  .toggle {
    display: inline-block;
    padding: 4px;
    background-color: green;
    color: #fff;
  }

  .appear {
    background-color: pink;
    font-size: 22px
  }
  .appear-to {
    transform: scale(.5)
  }
  .appear-active {
    transition: all 3s
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 5.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .flip-list-move {
    transition: transform 1s;
  }
</style>
