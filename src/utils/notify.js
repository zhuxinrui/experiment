import Alert from '@/components/Alert'
import Vue from 'vue';

Alert.newInstance = function(properties) {
  const props = properties || {}
  
  const Instance = new Vue ({
    data: props,
    render (h){
      return h(Alert,{
        props: props
      })
    }
  })
  const component = Instance.$mount()
  console.log(component)
  document.body.appendChild(component.$el)
  const alert = component.$children[0];
  return {
    add (notices) {
      return alert.add(notices)
    },
    remove(name) {
      return alert.remove(name)
    }
  }
}

export default Alert