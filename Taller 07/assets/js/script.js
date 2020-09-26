const artist{

    name="Fredy Mercury",
    group="Queen",
    album="News of the world"
}

const artistString=JSON.stringify(artist)
localStorage.setItem('Artist', artist)



const artistStorage=JSON.parse(localStorage.getItem('Artist'))

const nombreArtista=document.getElementById('nombre')
const bandaArtista=document.getElementById('banda')
const albumArtista=document.getElementById('album')

nombreArtista.innerText=artistStorage.artist
bandaArtista.innerText=artistStorage.group
albumArtista.innerText=artistStorage.album