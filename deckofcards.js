let axios = require('axios')

let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let url2= 'https://deckofcardsapi.com/api/deck/<</deck_id>>/draw/?count=1'

axios.get(url)
    .then(res=>{
        console.log(res.data)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
        })
    .then(res=>{
        console.log(res.data)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)

    })
    .then(res=>{
        console.log(res.data)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)

    })
    .catch(err=> console.log("MESSED UP!", err))