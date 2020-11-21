<template>
  <h4>Posts</h4>
  <router-link 
    v-for="post in testPosts"
    :to="`/router/posts/${post.id}`"
  >
    {{ post.title }}
  </router-link>
  <router-view />
</template>

<script>
import { watchEffect } from 'vue'
import { testPosts } from '../microblog/testPosts.js'
import { useRoute } from "vue-router"

export default {
  // watch: {
  //   '$route': {
  //     handler: (val, oldVal) => {
  //       console.log(val)
  //       this.fetchData(val.params.id)
  //     },
  //     immediate: true
  //   }
  // },
  setup() {
    const route = useRoute()
    // watchEffect(() => {
    //   fetchData(route.params.id)
    // })
    return {
      testPosts
    }
  }
}
</script>