// document.querySelector('button').addEventListener('click',apiiRequest)
const STAT_URL = 'https://feeder-league.herokuapp.com/allStats'
const select = document.querySelector('#player')
console.log(select)

// async function apiiRequest() {
//     setTimeout()
//     try{
//         const response = await fetch(`https://feeder-league.herokuapp.com/allStats`)
//         const data = await response.json()
//         const statsArray = Object.keys(data)
//         for(let i = 0; i < statsArray.length; i++){
//             const option = document.createElement('option')
//             option.value = statsArray[i]
//             option.innerText = statsArray[i]
//             select.appendChild(option)
//         }
//         console.log(data)
//         console.log(statsArray)    
//     } catch(error){
//         console.log('feederee')
//     }
// }

fetch(STAT_URL)
    .then(res => {
        return res.json()
    })
    .then(data => {
        const statsArray = Object.keys(data)
        for(let i = 0; i < statsArray.length; i++){
            const option = document.createElement('option')
            option.value = statsArray[i]
            option.innerText = statsArray[i]
            select.appendChild(option)
        }
    })

select.addEventListener('change' , event => {
    let url = `https://feeder-league.herokuapp.com/api/${event.target.value}`
    apiRequest(url)
})

async function apiRequest(url) {
    const playerName = document.querySelector('option').value
    try{
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        console.log(data)
        console.log(data['Team Average'])
        teamAverage(data)
        position(data)
        ppg(data)
        rpg(data)
        apg(data)
        blocks(data)
        steals(data)
        fg(data)
        threept(data)
        ft(data)
        assit(data)
        profile(data)
    } catch(error){
        console.log(error)
    }
}





function teamAverage(array) {
    let one = array['Team Average']
    document.getElementById('teamav').innerHTML =`${one}`
}
function position(array) {
    let one = array['Position']
    document.getElementById('position').innerHTML =`${one}`
}
function ppg(array) {
    let one = array['PPG']
    document.getElementById('ppg').innerHTML =`${one}`
}
function rpg(array) {
    let one = array['RPG']
    document.getElementById('rpg').innerHTML =`${one}`
}
function apg(array) {
    let one = array['APG']
    document.getElementById('apg').innerHTML =`${one}`
}
function blocks(array) {
    let one = array['Blocks']
    document.getElementById('blocks').innerHTML =`${one}`
}
function steals(array) {
    let one = array['Steals']
    document.getElementById('steals').innerHTML =`${one}`
}
function fg(array) {
    let one = array['FG %']
    document.getElementById('fg').innerHTML =`${one}`
}
function threept(array) {
    let one = array['3PT %']
    document.getElementById('3pt').innerHTML =`${one}`
}
function ft(array) {
    let one = array['FT%']
    document.getElementById('ft').innerHTML =`${one}`
}
function assit(array) {
    let one = array['Assist/TO']
    document.getElementById('to').innerHTML =`${one}`
}
function profile(array) {
    let one = array['overAll']
    document.querySelector('.dog-img').src = one
}
