
<script>
export default {
  render(h) {
    return (
      h('div',{
        class: {
          foo: true
        },
        style: {
          color: 'red'
        },
      
      },[this.$slots.name,this.$slots.default])
    )
  },
  mounted() {
    console.log(this.$slots)
  }
}
</script>
<style>
</style>
