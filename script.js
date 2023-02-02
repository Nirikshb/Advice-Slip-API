const advice = document.getElementById('advice')
const theAdvice = document.getElementById('theadvice')
const pebble = document.getElementById('pebble')

pebble.addEventListener('click', function(){
    newAdvice();
});


function newAdvice(){
const url = ('https://api.adviceslip.com/advice')
fetch(url)
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
    console.log(data.slip.advice)
    advice.innerHTML = (`Advice# ${data.slip.id}`) 
    theadvice.innerHTML = (`${data.slip.advice}`)
})
.catch((error) =>{
    console.log("try again");
    console.log(error);
})

}
// newAdvice()
document.body.onload = newAdvice