<template>
  <section class="container">
    <div>
      <h1 class="title">
        demo
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
          <p>{{title}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import VueNotifications from 'vue-notifications'

export default {
  name: 'hello',
    asyncData ({ params}) {
    // return axios.get('/api/logger')
    // .then((res) => {
    //   return { title: '123344' }
    // })
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({title: '111111111'});
      }, 100);
    })
  },
  layout: 'hello'
}
</script>
