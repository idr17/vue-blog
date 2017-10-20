<template>
  <div id="siswas">
    <ul>
      <li v-for="siswa in siswas" v-on:click="siswa.show = !siswa.show">
        <h2>{{ siswa.name }}</h2>
        <h3 v-show="siswa.show">{{ siswa.mastering }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteSiswa">Delete Siswa</button>
  </div>
</template>

<script>
export default {
  // props passing / bind data drom parent that has been used in child component. props below apply validation props too.
  // or simply => props: [String:propsName] => props: ['siswas']
  props: {
    siswas : {
      type: Array, required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    deleteSiswa: function () {
      this.siswas.pop();
    }
  },
  // Life cycle hooks
  /*
  beforeCreate() {
    alert('beforeCreate');
  },
  created() {
    alert('created');
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    alert('mounted');
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {
    alert('updated');
  }
  */
}
</script>
<style scoped>
#siswas{
  width: 100%; max-width: 1200px; margin: 40px auto; padding: 0 20px; box-sizing: border-box;
}
ul{
  display: flex; flex-wrap: wrap; list-style-type: none; padding: 0;
}
li{
  flex-grow: 1; flex-basis: 300px; text-align: center; padding: 30px; border: solid 1px #222; margin: 10px;
}
</style>
