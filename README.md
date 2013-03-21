differential
============
Returns the differential operator of a simplicial complex in the integral homology.

Usage
=====
Install using npm:

    npm install differential

And use it as follows:

```javascript
var differential = require("differential")

var D = differential([[0,1,2],[1,2,3]])
console.log(D.toDense())
console.log(D.boundaryCells)
```


Credits
=======
(c) 2013 Mikola Lysenko. BSD License