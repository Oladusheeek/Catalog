function parseCookie(cookie){
    return cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
}

const testset = JSON.parse(localStorage.getItem('testResult'))

const printScore = (testset) =>{
    let correct = 0;
    testset.forEach(word => {
        if(word.result == "correct"){
            correct++;
        }
    });
    let percentage = correct / testset.length
    //print score
    document.getElementById("score").innerHTML = correct + "/" + testset.length
    //print percentage
    document.getElementById("percentage").innerHTML = percentage.toFixed(2) * 100 + "%"
    //print Incorrect words
    for(let i=0; i<testset.length; i++){
        // warpper container for the result of tested words
        console.log(`${testset[i].result}`)
        let word_container = document.createElement("div")
        word_container.setAttribute("class", `word_container ${testset[i].result}`)

        // result of each tested word
        let word = document.createElement("h3")
        word.innerHTML = testset[i].name
        let word_translation = document.createElement("p")
        word_translation.innerHTML = `<strong>Correct Answer</strong> ${testset[i].translation}`
        let word_answer = document.createElement("p")
        word_answer.innerHTML = `<strong>Your Answer</strong> ${testset[i].answer}`
        word_container.appendChild(word)
        word_container.appendChild(word_answer)
        word_container.appendChild(word_translation)
        document.getElementById("the_result").appendChild(word_container)
    }
}

printScore(testset)