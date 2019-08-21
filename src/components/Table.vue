<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col,key) in columns" :key="key">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,ind) in data" :key="ind">
        <td v-for="(col,key) in columns" :key="key">
          <Pure :row="row" :column="col" :index="key" :render="col.render"></Pure>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  import Pure from './Pure'
  export default {
    components: {
      Pure
    },
    props: {
      columns: {
        type: Array,
        default () {
          return [];
        }
      },
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    }
  }
</script>
<style>
  table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }
  table th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
  table td, table th{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
</style>