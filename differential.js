"use strict"

var top = require("simplicial-complex")
var boundaryCells = require("boundary-cells")
var coorientation = require("cooriented")
var CSRMatrix = require("csr-matrix")

function differential(cells, boundary_cells) {
  boundary_cells = boundary_cells || boundaryCells(cells)
  var items = []
  for(var i=0, ilen=cells.length; i<ilen; ++i) {
    var c = cells[i]
    for(var j=0, jlen=c.length; j<jlen; ++j) {
      var bc = c.slice(0)
      bc.splice(j, 1)
      var idx = top.findCell(boundary_cells, bc)
      var b = boundary_cells[idx]
      items.push([idx, i, coorientation(c, b)])
    }
  }
  var result = CSRMatrix.fromList(items, boundary_cells.length, cells.length)
  result.boundaryCells = boundary_cells
  return result
}

module.exports = differential