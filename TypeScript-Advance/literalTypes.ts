
type Role= "Admin" | "User"
let users:Role = "Admin"

//literalType and Functions
function confirmDialog(answer:"yes" | "no"){
    console.log(`result: ${answer}`)
}
confirmDialog("yes")