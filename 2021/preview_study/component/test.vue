<template>
    <div v-if="error">failed to load</div>
    <div v-else-if="loading">loading...</div>
    <div v-else>hello {{result.name}}!</div>
</template>

<script>
export default {
  data() {
    return {
        result: {
          name: '',
        },
        loading: false,
        error: false,
    }
  },
  async created() {
      try {
        // 管理loading
        this.loading = true
        // 取数据
        const data = await this.$axios('/api/user')  
        this.data = data
      } catch (e) {
        // 管理error
        this.error = true  
      } finally {
        // 管理loading
        this.loading = false
      }
  },
}
</script>