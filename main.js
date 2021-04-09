async function fetchWords(term) {
    
    const response = await fetch("https://geo.api.gouv.fr/communes?nom="+term+"&fields=departement&boost=population&limit=5")
    console.log(response)
    let data = await response.json()

    console.log(data)
    createWordList(data)


}

function createWordList(data) {

    let newHTML = ''
    document.getElementById("myList").innerHTML = newHTML
    for (let x = 0; x < data.length; x++) {
        const {nom, code, departement} = data[x]
        newHTML += `<li><a href="#">${nom}, ${code}, ${departement.nom}</a></li>`+'\n'
    }
    
    document.getElementById("myList").innerHTML = newHTML
}

myFunction()
fetchWords('Paris')

let myInput = document.getElementById("myInput")
myInput.addEventListener('input', function(){
    console.log(myInput.value)
    fetchWords(myInput.value)
})











/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

