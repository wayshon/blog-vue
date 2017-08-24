<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'UserDeatil',
    data() {
      return {
        msg: 'UserDeatil'
      }
    }
  }
</script>
