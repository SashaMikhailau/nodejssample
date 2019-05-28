console.log("external script loaded");
var i = 0;
var f = function () {
    console.log("external file (module) func executed");
console.log(i++);
}

module.exports = f;