//     *
//    **
//   ***
//  ****
// *****
var space = "";
var star = "";
for(var row = 5; row >= 1; row--){
    for(var col=1; col < row; col++){
        space = space + " ";
    }
    for(var col2 = 5; col2>=row; col2--){
        star = star + "*";
    }
    var result = `${space}${star}`;
    console.log(result)
    space = "";
    star = "";
}
