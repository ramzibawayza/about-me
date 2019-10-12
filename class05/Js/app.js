function makecoffee(numofcups, style, withmolk ) {
    console.log('before return');
if (withmolk) {

return 'making ' + numofcups + ' cups of ' + style + ' coffee';
} else if (style == 'turkish') {
    return 'making ' + numofcups + ' cups of ' + style + ' coffee';
}
// console.log('after return');
}
console.log('before calling makecoffee ');
var coffee = makecoffee (1,'turkish',true);
console.log('after calling makecoffee ');
console.log('coffeerersult', coffee)
// var coffeeresult = console.log('coffee ' + coffee );
