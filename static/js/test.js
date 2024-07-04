const testset = []
let currentWord = null; // keep track of current word testing
const test_start_btn = document.getElementById('test_start_btn')
const test_skip_btn = document.getElementById('test_skip_btn')
const test_answer_btn = document.getElementById('test_answer_btn')
let time_limit = 10; // time limit default = 10s
let time_out = null; // time_out variable to clear timeout
let displayTimer = null

// set display style of word container to "none"
function setWordInvisible(id){
    document.getElementById(id).style.display = "none"
}

// Shuffle the array
function shuffleArray(array) {
    // Modern Fisher-Yates algorithm with O(n) time complexity and O(1) space complexity
    for (let i = array.length - 1; i > 0; i--) {// from last element, move to previous element
        let j = Math.floor(Math.random() * (i + 1)); // choose random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap it with the last element
    }
}

async function testWord(id, time_limit){
    // set current word
    currentWord = id

    // show the word
    toggleWordVisibility(id)
    
    // give limited time to take a test on word
    await timeout(time_limit)

    // when the time limit is passed, check the word translation with input and empty input
    checkWord(id, document.getElementById(currentWord).querySelector('.translation').value)
    document.getElementById(currentWord).querySelector('.translation').value = ''

    // hide the word after test is finished
    toggleWordVisibility(id)
}

// check if the translation of the word given id matches the input 
function checkWord(id, input){
    let targetWord = testset.find(word => word.id == id)
    if(input == testset.find(word => word.id == id).translation){
        targetWord.result = "correct"
    }else{
        targetWord.result = "incorrect"
    }
    targetWord.answer = input
}

// when skip is clikced
function skipWord(id, input){
    let targetWord = testset.find(word => word.id == id)
    targetWord.result = "incorrect"
    targetWord.answer = "skipped"
}

function toggleWordVisibility(id){
    document.getElementById(id).style.display = document.getElementById(id).style.display == "none" ? "flex" : "none"
}

function timeout (ms) {
    return new Promise(res => {
        let startTime = ms / 1000
        let currTimer = document.getElementById('curr_timer')
        currTimer.setAttribute('style', 'color: black')
        currTimer.innerHTML = startTime

        displayTimer = setInterval(() => {
            startTime -= 1
            if (startTime < 4) {
                currTimer.setAttribute('style', 'color: red')
            } else {
                currTimer.setAttribute('style', 'color: black')
            }
            currTimer.innerHTML = startTime
        }, 1000)

        time_out = setTimeout(() => {
            clearInterval(displayTimer)
            res()
        },ms)
    })
}

// set localstorage with a testset array and send them to result page
function showResult(){
    localStorage.setItem('testResult', JSON.stringify(testset))
    window.location.href="../result"
}

// when enter button is clicked, run test on words that are not tested yet.
const answer_or_skip = async function() {
    document.getElementById(currentWord).querySelector('.translation').value = ''

     // clearTimeout for previous timeout
     clearTimeout(time_out)

     // Clear interval for curr timer
     clearInterval(displayTimer)
 
     // toggle previous word visibility before starting the next word
     toggleWordVisibility(currentWord)
 
     currentIndex = testset.indexOf(testset.find(word=>word.id == currentWord)) + 1 //Index of current word
     // Proceed the rest of the test
     time_limit = document.getElementById('time_limit').value || time_limit
 
     // run tests on words left
     for(let j=currentIndex; j<testset.length; j++){
         currentWord = testset[j].id
         await testWord(testset[j].id,time_limit*1000)
     }
     
     //show result only when test is done
     if(testset[testset.length-1].result != "pending"){
         showResult()
     }
}

test_skip_btn.addEventListener('click', (e) => {
    skipWord(currentWord,document.getElementById(currentWord).querySelector('.translation').value)
    answer_or_skip()
})

test_answer_btn.addEventListener('click', (e) => {
    //check the word description with input and empty input
    checkWord(currentWord,document.getElementById(currentWord).querySelector('.translation').value)
    answer_or_skip()
})

// When test start button is clicked
test_start_btn.addEventListener('click', async (e) => {

    const wordset_container = document.getElementById('wordset_container')
    const words = wordset_container.children

    // initialize testset array and style
    for(i=0; i < words.length; i++) {
        if(words[i].className == "word_container"){
            var word = {
                id: words[i].childNodes[1].innerHTML,
                name: words[i].childNodes[3].innerHTML,
                translation: words[i].childNodes[5].innerHTML,
                result: "pending",
                answer: "pending"
            }
            testset.push(word)
            setWordInvisible(word.id)
        }
    }

    // hide setting and start button and show words
    document.getElementById("setting_container").style.display = "none"
    document.getElementById("wordset_container").style.display = "flex"

    // shuffle array
    shuffleArray(testset)

    // Set time limit
    time_limit = document.getElementById('time_limit').value || time_limit

    // run test on words
    for (let j=0; j<testset.length; j++){
        currentWord = testset[j].id
        await testWord(testset[j].id,time_limit*1000)
    }

    //show result only when test is done
    if(testset[testset.length-1].result != "pending"){
        showResult()
    }
})