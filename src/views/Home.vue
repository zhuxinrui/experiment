<template>
  <div class="home">
    <button @click="toast">弹窗</button>
    <Async 
      :title="aaa"
      v-on:update:title="change"
    ></Async>
    <Render>
      I'm Is Slot
      <template v-slot:name>
        name Slot
      </template>
    </Render>
    <Table :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Async from '@/components/Async'
import Render from '@/components/Render'
import Table from '@/components/Table'

export default {
  name: "home",
  data(){
    return {
      aaa: 'hello',
      columns: [
          { 
            title: '名字',
            render: (h, { row, column, index}) => {
              console.log(column)
              return h('span', row.name)
            }
          },
          {
            title: '出生日期',
            render: (h, { row, column, index }) => {
              const date = new Date(parseInt(row.birthday));
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();
              
              const birthday = `${year}-${month}-${day}`;
              
              return h('span', birthday);
            }
          },
          {
            title: '年龄',
            render: (h, { row, column, index }) => {
              return h('span', row.age);
            }
          },
          {
            title: '地址',
            render: (h, { row, column, index }) => {
              return h('span', row.address);
            }
          },
          // {
          //   title: '地址',
          //   key: 'address'
          // },
          // {
          //   title: '操作'
          // }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '919526400000',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '696096000000',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '563472000000',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '687024000000',
            address: '深圳市南山区深南大道'
          }
        ]
    }
  },
  components: {
    Async, Render, Table 
  },
  methods: {
    toast() {
      this.$Alert.info({
        duration: 3,
        content: '这是一条弹窗信息'
      })
    },
    change(val) {
      console.log(val)
      this.aaa = val
    }
  }

};
</script>
