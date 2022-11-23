## 表格

```html
<table ref="pTable" :tableData="tableData" :tableSetUp="tableSetUp" @handleCurrentChange="handleCurrentChange" @handleSelectionChange="handleSelectionChange" @handleDelete="handleDelete">
  <template v-slot:tableAction="slotProps">
    <el-input size="mini" v-model="slotProps.scope.row['a']"> </el-input>
  </template>
</table>
```

```js
const tableSetUp = ref({ readonly: true, tableColumns: tableColumnsList, highlightCurrentRow: true, scrollbarAlwaysOn: false, maxHeight: 300, showSelection: true, showSummary: ['a', 'b'], defaultSort: { prop: 'a', order: 'ascending' }, sortOrders: ['descending', 'ascending'], showOperation: { showDelLine: true, showEditLine: true, showView: true } });
```
