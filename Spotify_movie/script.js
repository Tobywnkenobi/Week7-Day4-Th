console.log('Spotify app')

const clientId = 'e165c77b3ea14e909750f4fd501d9a75'
const clientSecret = 'e8118a10b202436cbf33b5fae8c634f0'

async function requestAccessToken(){
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa(clientId + ':' + clientSecret)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    })
    if (res.ok){
        const data = await res.json()
        return data.access_token
        console.log(data)
        } else window.alert('Bad Request')
}

async function requestSongInfo(track, artist) {
    const res = await fetch(`https://api.spotify.com/v1/search?q=${track,${artist}&type=track`{
    method: "GET",
    headers:{
        Authorization : `Bearer ${await requestAccessToken()}`
        }
      }
    })
    if (res.ok){
        const data = await res.json()
        console.log(data.tracks.items[0].preview_url)
        } else window.alert('Bad Request')

(async ()=>await requestSongInfo('triumph','wu-tang clan'))()

const images = document.getElementsByTagName('img')
console.log(images)

for(const image of images){
    image.addEventListener('click', ()=>{
        const {track, artist} = getTrackAndArtist(image)
        const url = requestSongInfo(track, artist)
        playSong(url)
    })
}

function getTandA(imagenode){
    console.log(imageNode.alt)
    return{'track':'bar', artist:0}
}

function playSong() {
}