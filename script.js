const wrap = document.getElementById("wrapper")
let i = 0;

fetch("https://catfact.ninja/breeds")
.then((res) => res.json())
.then((info) => {
    console.log(info.data)
    info.data.forEach(cat => {
        const catDiv = document.createElement("div")
        const catImg = document.createElement("img")
        const catBreed = document.createElement("h2")
        const catCntry = document.createElement("h3")
        const catCoat = document.createElement("p")
        
        catDiv.id += "catDiv" + i
        i++


        catBreed.id = "cat-breed"
        catCntry.className ="cat-country"
        catCoat.className= "cat-coat"

        catBreed.textContent = "Breed: " + cat.breed
        catCntry.textContent = "Country of Origin: " + cat.country
        catCoat.textContent = cat.coat === "Long" ? "Long-Hair: They shed a lot of hair" : "Short-Hair: Not a lot of grooming needed"

        catDiv.appendChild(catBreed)
        catDiv.appendChild(catCntry)
        catDiv.appendChild(catCoat)

        wrap.appendChild(catDiv)

    });
})