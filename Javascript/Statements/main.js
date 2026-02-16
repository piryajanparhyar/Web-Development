var ColorName = "blue"
console.log(".....................If Statements.........................")
if (ColorName === "grey") {
    console.log("selected color Name is grey!");
    alert("selected Color Name is grey!")
} else if (ColorName === "blue") {
    console.log("selected Color Name is blue!");
    alert("selected Color Name is blue!")
} else if (ColorName === "pink") {
    console.log("selected Color Name is pink!");
    alert("selected Color Name is pink!")
} else {
    console.log(ColorName + " " + "Color not found");
    alert(ColorName + " " + "Color not found")
}

console.log("......................switch Statements........................")
switch (ColorName) {
    case "grey": console.log("selected color Name is grey!");
        break;
    case "blue": console.log("selected color Name is blue!");
        break;
    case "pink": console.log("selected color Name is pink!");
    default:
        console.log(ColorName + " " + "Color not found");
}







