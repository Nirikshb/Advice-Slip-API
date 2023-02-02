//i call this collecting id for future use
const advice = document.getElementById('advice')
const theAdvice = document.getElementById('theadvice')
const pebble = document.getElementById('pebble')

//it's preferred to add event listener to end of the code or that's what i've heard
//but i prefer my event listener up close
pebble.addEventListener('click', function(){
    newAdvice();
});

//creating a new function and using fetch method to get details
function newAdvice(){
const url = ('https://api.adviceslip.com/advice')
fetch(url)
.then((response) =>{
    return response.json();
})
.then((data) =>{
    //logged to check if data is getting printed or not
    //console.log(data.slip.advice)
    advice.innerHTML = (`Advice# ${data.slip.id}`) 
    theadvice.innerHTML = (`${data.slip.advice}`)
})
.catch((error) =>{
    console.log("try again");
    console.log(error);
})
}
// newAdvice()
//using onload to load it automatically so it loads 
document.body.onload = newAdvice