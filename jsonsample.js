var object = {
    a: "string",
    arr: [{}, {}],
    innerobject: {}
};
var str = JSON.stringify(object);
console.log(object);
console.log(str);

var similarObject = JSON.parse(str);
console.log(similarObject);

console.log(object === similarObject);