let start = document.querySelector(".btn1")
let answer
let check = document.querySelector(".btn2")
let input = document.querySelector(".text")
let hint = document.querySelector(".hint")
let para = document.querySelectorAll(".para1")
let textfield = document.querySelector(".textfield")
let btn3 = document.querySelector(".btn3")




start.addEventListener("click", () => {
    fetch("https://random-words-api.vercel.app/word")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            answer = data[0]
            console.log(answer);
            textfield.style.visibility = "visible"
            btn3.style.visibility = "visible"

        })
})
check.addEventListener("click", () => {
    if (input.value == answer.word) {
        alert("wow,...your answer is correct")
        input.value = ""
        fetch("https://random-words-api.vercel.app/word")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                answer = data[0]
                console.log(answer);


            })
    } else {
        alert("oh no....your answer is wrong")
        input.value = ""
    }



})
hint.addEventListener("click", (e) => {

    console.log(e.target)
    e.target.innerHTML = '<i class="fa-regular fa-lightbulb"></i> hint'
    para[0].innerHTML = '<i class="fa-regular fa-lightbulb"></i> the word has' + answer.word.length + 'letters'
    para[1].innerHTML = ' <i class="fa-regular fa-lightbulb"></i>the word means that' + answer.definition
})