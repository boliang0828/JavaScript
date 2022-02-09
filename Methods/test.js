let data = [
  {id: 'z123', name: 10},
  {id: 'z456', name: 20},
  {id: 'z789', name: 30},
];

let  tableData = data.map( obj => {
   var rObj = {};
   rObj[obj.id] = obj.name;
   return rObj;
});
console.log(tableData);