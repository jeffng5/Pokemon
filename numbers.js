let axios = require('axios')

//fav number api request
let url = "http://numbersapi.com/5?json"
let ourFirstPromise = axios.get(url);


ourFirstPromise
    .then(data=> console.log(data))
    .catch(err => console.log(err));

//api request for a bumch of numbers
let url1 = "http://numbersapi.com/5,10,13,23,11"
let bunchNumbersPromise = axios.get(url1)

bunchNumbersPromise
    .then(data=> console.log(data))
    .catch(err => console.log(err));



//request for 4 facts about your favorite number

let url4 = "http://numbersapi.com/5"

facts=[]
axios.get(url4)
    .then(res=>{
        console.log(res.data)
        facts.push(res.data)
        return axios.get(url4)
    })
    .then(res=>{
        console.log(res.data)
        facts.push(res.data)
        return axios.get(url4)
    })
    .then(res=>{
        console.log(res.data)
        facts.push(res.data)
        return axios.get(url4)
    })
    .then(res=>{
        console.log(res.data)
        facts.push(res.data)
        return axios.get(url4)
    })
    .catch (err=> console.log("REJECTED!!", err))

console.log(facts)

// 4 facts of the number 5
//5 is the number of dots in a quincunx.
//5 is the number of Justices on the Supreme Court of the United States necessary to render a majority decision.
//5 is the most common number of gears for automobiles with manual transmission.
//5 is the number of points in a pentagram.