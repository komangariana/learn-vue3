<template>
  <h3>Hello, and welcome to Vue Router</h3>

  <router-link to="/router/hello">
    Hello
  </router-link>

  <router-link to="/router/posts">
    Posts
  </router-link>

  <div>
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>