var differential = require("../differential.js")

require("tap").test("diff", function(t) {

  var D = differential([[0,1,2],[1,2,3]])
  console.log(D.toDense())
  console.log(D.boundaryCells)

  t.end()
})