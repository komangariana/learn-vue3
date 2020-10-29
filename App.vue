<template>
  <form @submit.prevent="submit" class="form">
    <form-input
      name="Username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      @update="update"
      type="text"
    />

    <form-input
      name="Password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
      @update="update"
      type="password"
    />

    <form-button 
      color="white"
      background="#2196F3"
      :disabled="!valid"
    />
  </form>
</template>

<script>
import FormButton from './components/FormButton.vue'
import FormInput from './components/FormInput.vue'
export default {
  components: {
    FormButton,
    FormInput
  },
  data() {
    return {
      username: {
        value: '',
        valid: false
      },
      password: {
        value: '',
        valid: false
      },
    }
  },
  computed: {
    valid() {
      return this.username.valid && this.password.valid
    }
  },
  methods: {
    submit() {
      console.log('Submit')
    },
    
    update(payload) {
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial;
}
.form {
  display: block;
  width: 100%;
}
</style>