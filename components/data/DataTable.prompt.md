Hairline-ruled data table; uppercase mono headers; right-align + `mono: true` for numeric columns.

```jsx
<DataTable dense columns={[{key:"sym",label:"Symbol",mono:true},{key:"qty",label:"Qty",align:"right",mono:true}]} rows={positions} />
```
