// function checkForSelection() {
    // if (document.getElementById("departnments").selectedIndex === 0) {
    //     alert("Please select a departnment.");
    //     return true;
    // }
// }
checkForSelection("selectedIndex")
function checkForSelection(selectID) {

    var target = document.getElementById(selectID);
    if (target.selectedIndex === 0) {
        alert("Please select a departnment.");
        return false;
    }
}

console.log(SelectedIndex)