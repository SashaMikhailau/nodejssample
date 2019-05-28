function prinToConsole(cur) {
    console.log("named func exec" + cur.toString());
        }


var o = {};
o.prinToConsole = prinToConsole;
o.prinToConsole(this);
var prinToConsole = function () {
    console.log("anonym func executed");
}
prinToConsole(this);
o.prinToConsole = prinToConsole;
o.prinToConsole();