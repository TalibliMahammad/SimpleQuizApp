const quizData = [


    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

];

/* dəyişkən 
arraydan li_lərə suallar
düzgün variantlar seçiləndə yaşıl səhv variantlar olanda qırmızı olmalıdı butona klik edildikdə
və növbəti suala keçməlidi.
sonda düzgün və səhv cavablar görünnəlidir və ilk suala qayıtmalıdır.


*/
let btn = document.querySelector("button")
let inp = document.querySelectorAll("input")
let li = document.querySelectorAll("label")
let ques = document.querySelector("h1")
let count = 0;
let trueAnswer = 0;
let handleID = null;
btn.disabled = true;
function quiz() {
    if (count < quizData.length) {
        ques.innerHTML = quizData[count].question
        li[0].innerHTML = quizData[count].a
        li[1].innerHTML = quizData[count].b
        li[2].innerHTML = quizData[count].c
        li[3].innerHTML = quizData[count].d

    } else {
        alert(`Test bitdi. Ümumi suallar ${quizData.length} Düzgün cavablar ${trueAnswer}`)
        count = 0;
    }
}
quiz()

inp.forEach(inpAll => {
    inpAll.addEventListener("change", (o) => {
        btn.disabled = false;
        handleID = inpAll.id
    })
})
btn.addEventListener("click", () => {
    if (quizData[count].correct == handleID) {
        trueAnswer++
        nextquestion("green")
    } else {
        nextquestion("red")
    }

})

function nextquestion(color) {
    btn.style.backgroundColor = color;
    setTimeout(() => {
        count++
        btn.style.backgroundColor = "";
        btn.disabled = true;
        inp.forEach(inpA => inpA.checked = false);
        quiz()
    }, 1000)
}