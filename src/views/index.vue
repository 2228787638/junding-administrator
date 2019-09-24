<template>
  <div>
    <Header></Header>
    <h1>君鼎房地产</h1>
    <vue-particles color="#7b7d7d"
                   :particleOpacity="0.7"
                   :particlesNumber="60"
                   shapeType="circle"
                   :particleSize="4"
                   linesColor="#203c77"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="100"
                   :moveSpeed="2"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"
                   class="lizi">
    </vue-particles>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: '',
  components: {Header},
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  component: {}
}
</script>
<style scoped>

</style>
