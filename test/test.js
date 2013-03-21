var differential = require("../differential.js")

require("tap").test("diff", function(t) {

  console.log(differential([
    [0,1,2],
    [1,2,3]
  ]).toDense())

  t.end()
})