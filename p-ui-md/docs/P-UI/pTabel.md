# Table 表格

二次封装的 element-plus 表格组件，实现配置化的表格功能

## 基础表格

基础的表格展示用法。

element-plus 中当 el-table 元素中注入 data 对象数组后，在 el-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。 可以使用 width 属性来定义列宽。

P-UI 只需要传入 tableSetUp 对象属性中 tableColumns 属性传入所需要的列表 prop，label。即可实现基础的表格展示

```html
<table ref="pTable" :tableData="tableData" :tableSetUp="tableSetUp"></table>
```

```js
const tableSetUp = ref({
  tableColumns: [
    {
      prop: 'a',
      label: '列表1',
      type: '',
      width: '100',
    },
    {
      prop: 'b',
      label: '列表2',
      width: '100',
      type: '',
    },
  ],
});
```

## 带状态表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class， 表明该行处于某种状态。

```js
const tableSetUp = ref({
  rowClassName: () => {},
  tableColumns: [
    { prop: 'a', label: '列表1', type: '', width: '100' },
    { prop: 'b', label: '列表2', width: '100', type: '' },
  ],
});
```

## 固定表头

横纵内容过多时，可选择固定列和表头。

固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

tableColumns 中 fixed 属性和 draggable（可拖拽）同时存在的时候，fixed 属性的列表无法拖拽。

```js
const tableSetUp = ref({
  rowClassName: () => {},
  tableColumns: [
    { prop: 'a', fixed, label: '列表1', type: '', width: '100' },
    { prop: 'b', label: '列表2', width: '100', type: '' },
  ],
});
```

## 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

通过设置 max-height 属性为 Table 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示一个滚动条。

tabelHeight 属性设置表格高度，默认 300，加入即可实现固定表头的表格

```js
const tableSetUp = ref({
  tabelHeight: 300,
  maxHeight: 400,
  rowClassName: () => {},
  tableColumns: [
    { prop: 'a', fixed, label: '列表1', type: '', width: '100' },
    { prop: 'b', label: '列表2', width: '100', type: '' },
  ],
});
```

## 只读和可编辑

表格默认为只读状态，readonly 属性控制是否为只读。当 readonly 为 false 时，页面默认为可输入的 input。也可以在 tableColumns
中单独控制某一行是否可读

```js
const tableSetUp = ref({
  readonly: true,
  tabelHeight: 300,
  maxHeight: 400,
  tableColumns: [
    { prop: 'a', fixed, label: '列表1', type: '', width: '100' },
    { prop: 'b', readonly: false, label: '列表2', width: '100', type: '' },
    { prop: 'c', readonly: false, label: '列表3', width: '100', type: '' },
  ],
});
```

## 默认操作按钮

showOperation 属性控制是否添加默认按钮，删除，编辑，查看。
按钮是否显示分别由 showDelLine，showEditLine，showView 布尔值属性控制
分别对应 handleDelete，handleEdit，handleView 方法接收。

```html
<table ref="pTable" :tableData="tableData" :tableSetUp="tableSetUp" @handleDelete="handleDelete" @handleEdit="handleEdit" @handleView="handleView"></table>
```

```js
const tableSetUp = ref({
  readonly: true,
  tabelHeight: 300,
  maxHeight: 400,
  tableColumns: [
    { prop: 'a', fixed, label: '列表1', type: '', width: '100' },
    { prop: 'b', readonly: false, label: '列表2', width: '100', type: '' },
    { prop: 'c', readonly: false, label: '列表3', width: '100', type: '' },
  ],
  showOperation: {
    showDelLine: true,
    showEditLine: true,
    showView: true,
  },
});
```

## 插槽

当默认无法满足需求的情下，可以通过 tableColumns 中的 slotName 属性控制是否需要加入插槽
每个列都可以通过插槽加入自定义的内容，同时可以通过 slotProps 参数获取到列表的数据

```html
<table ref="pTable" :tableData="tableData" :tableSetUp="tableSetUp" @handleDelete="handleDelete" @handleEdit="handleEdit" @handleView="handleView">
  <template v-slot:c="slotProps">
    <el-input size="mini" v-model="slotProps.scope.row['c']"> </el-input>
  </template>
</table>
```

```js
const tableSetUp = ref({
  readonly: true,
  tabelHeight: 300,
  maxHeight: 400,
  tableColumns: [
    { prop: 'a', fixed, label: '列表1', type: '', width: '100' },
    { prop: 'b', readonly: false, label: '列表2', width: '100', type: '' },
    { prop: 'c', slotName:'c' label: '列表3', width: '100', type: '' },
  ],
  showOperation: {
    showDelLine: true,
    showEditLine: true,
    showView: true,
  },
});
```

当操作按钮无法满足需求的时候也可以在 tableColumns 新建一个对象，自己定义一个按钮列表

## 单选和多选

单选由 selectMode 属性控制，selectMode=true,全部可选，selectMode=false 全部不可选，selectMode=[]

```html
<table ref="pTable" :tableData="tableData" :tableSetUp="tableSetUp" @handleDelete="handleDelete" @handleEdit="handleEdit" @handleView="handleView">
  <template v-slot:c="slotProps">
    <el-input size="mini" v-model="slotProps.scope.row['c']"> </el-input>
  </template>
</table>
```

## 是否可以勾选

是否可以勾选 selectable 属性控制，selectable 属性为 function，返回值控制是否可以点击，true 为可点击 false 为不可点击。

```html
<table ref="pTable" :tableData="tableData" :tableSetUp="tableSetUp" @handleDelete="handleDelete" @handleEdit="handleEdit" @handleView="handleView">
  <template v-slot:c="slotProps">
    <el-input size="mini" v-model="slotProps.scope.row['c']"> </el-input>
  </template>
</table>
```

```js
const selectFn = (row, index) => {
    if (index === 2) return true
}
const tableSetUp = ref({
  readonly: true,
  tabelHeight: 300,
  maxHeight: 400,
  tableColumns: [
    { prop: 'a', fixed, label: '列表1', type: '', width: '100' },
    { prop: 'b', readonly: false, label: '列表2', width: '100', type: '' },
    { prop: 'c', slotName:'c' label: '列表3', width: '100', type: '' },
  ],
  showOperation: {
    showDelLine: true,
    showEditLine: true,
    showView: true,
  },
  showSummary: ['a', 'b'],
  selectFn: selectFn
});
```

## 合计值

通过 showSummary 属性控制合计值计算，showSummary = true， 默认全部加入合计值，showSummary=[prop,prop],为数组的时候里面传入 tableColumns 属性中的 prop
计算特定的列的合计值

```html
<table ref="pTable" :tableData="tableData" :tableSetUp="tableSetUp" @handleDelete="handleDelete" @handleEdit="handleEdit" @handleView="handleView">
  <template v-slot:c="slotProps">
    <el-input size="mini" v-model="slotProps.scope.row['c']"> </el-input>
  </template>
</table>
```

```js
const tableSetUp = ref({
  readonly: true,
  tabelHeight: 300,
  maxHeight: 400,
  tableColumns: [
    { prop: 'a', fixed, label: '列表1', type: '', width: '100' },
    { prop: 'b', readonly: false, label: '列表2', width: '100', type: '' },
    { prop: 'c', slotName:'c' label: '列表3', width: '100', type: '' },
  ],
  showOperation: {
    showDelLine: true,
    showEditLine: true,
    showView: true,
  },
  showSummary: ['a', 'b'],
});
```

## 内容过长

当内容过长被隐藏时显示 tooltip, 由 showOverflowTooltip 属性控制，默认不传为 true

```js
const tableSetUp = ref({
  readonly: true,
  tabelHeight: 300,
  maxHeight: 400,
  tableColumns: [
    { prop: 'a', fixed, showOverflowTooltip: true label: '列表1', type: '', width: '100' },
    { prop: 'b', readonly: false, label: '列表2', width: '100', type: '' },
    { prop: 'c', slotName:'c' label: '列表3', width: '100', type: '' },
  ],
  showOperation: {
    showDelLine: true,
    showEditLine: true,
    showView: true,
  },
  showSummary: ['a', 'b'],
});
```

## 分页

```js
const tableSetUp = ref({
  readonly: true,
  tabelHeight: 300,
  maxHeight: 400,
  tableColumns: [
    { prop: 'a', fixed, showOverflowTooltip: true label: '列表1', type: '', width: '100' },
    { prop: 'b', readonly: false, label: '列表2', width: '100', type: '' },
    { prop: 'c', slotName:'c' label: '列表3', width: '100', type: '' },
  ],
  showOperation: {
    showDelLine: true,
    showEditLine: true,
    showView: true,
  },
  showSummary: ['a', 'b'],
});
```
