<template>
  <div>
    <div v-for='(item,key) of notifys' :key="key">
      {{item.content}}
    </div>
  </div>
</template>

<script>
let speed = 0
function getName() {
  return 'alert_' + speed++
}

export default {

  data: () => {
    return {
      notifys: []
    }
  },
  methods: {
    add(notify) {
      let name = getName()
      let _notice = Object.assign({
        name: name
      }, notify);

       this.notifys.push(_notice);
      setTimeout(() => {
        this.remove(name)
      },notify.duration*1000)
    },
    remove(name) {
      const notices = this.notifys;
        for (let i = 0; i < notices.length; i++) {
          if (notices[i].name === name) {
            this.notifys.splice(i, 1);
            break;
          }
        }
    }
  }
}
</script>
<style>
</style>

