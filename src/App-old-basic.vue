<template>
  <div>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <app-content v-bind:siswas="siswasData"></app-content>
  <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Content from './components/content.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Content
  },
  data(){
    return {
      siswasData: [
        { name: 'Ana Maulida', mastering: 'express and react', show: false },
        { name: 'Endah Muslimah', mastering: 'Meteor', show: false },
        { name: 'Juwita Trianas', mastering: 'Node js and server', show: false },
        { name: 'Bigramo arsen', mastering: 'Angular 4 and ionic', show: false },
        { name: 'Ramadhan syauqi', mastering: 'Feathers and vue', show: false },
        { name: 'Tiara', mastering: 'any UX ', show: false }
      ],
      title: 'My spirit never ends - Istiqomah dan sabar.',
    }
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle
    }
  }
}
</script>

<style>

</style>
