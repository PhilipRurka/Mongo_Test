use('Staging');

try {
  db.todos.deleteOne({
    _id:'65c3ec41b2308b247152df5c'
  })
} catch(e) {
  console.log('-----------------')
  console.log(e)
  console.log(JSON.stringify(e, null, 2))
  console.log('-----------------')
}