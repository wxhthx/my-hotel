<template lang="jade">
  div.container
    header
    div.content
      div.title {{welInfo}}
    footer
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      welInfo: 'Welcome to my hotel App'
    }
  }
}
</script>

<style scoped>

</style>

