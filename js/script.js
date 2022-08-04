// helper function to get dom elements
const $ = (id) => document.getElementById(id)

window.addEventListener("load", () => {
    $("add").addEventListener("click", () => {
        let id = $('id').value
        let name1 = $('name').value
        let extension = $('extension').value
        let email = $('email').value
        let department = $('department').value
        let strResult = `ID: ${id} 
        Name:  ${name1} 
        Extension: ${extension} 
        Email: ${email} 
        Deparment: ${department}`
        console.log(strResult)
        // window.alert(strResult)
	})
})
