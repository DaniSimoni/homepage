
function getScore(score) {
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal

if (scoreA) {   
        scoreFinal = "A"
}   else if (scoreB) {   
        scoreFinal = "B"
}   else if (scoreC) {   
        scoreFinal = "C"
}   else if (scoreD) {   
        scoreFinal = "D"
}   else if (scoreF) {   
        scoreFinal = "F"
}   else if (scoreF) {   
    scoreFinal = "Nota Inválida"
}
   return scoreFinal
}

console.log(getScore(101))
console.log(getScore(100))
console.log(getScore(95))
console.log(getScore(89))
console.log(getScore(75))
console.log(getScore(69))
console.log(getScore(-10))
console.log(getScore(40))
console.log(getScore(0))



//exercicio planilha familiar

let family = {
    incomes: [1500, 1200, 320, 150, 250],
    expenses: [145.25, 350, 2780, 590, 360]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0 

        let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }
        console.log(`Seu saldo é ${balanceText}: R$ ${total}`)
}
calculateBalance()


// celcius x farenheit

function transformDegree(degree)    {
    const celciusExist = degree.toUpperCase().includes('C')
    const farenheitExist = degree.toUpperCase().includes('F')

    if(!celciusExist && !farenheitExist) {
        throw new Error('Grau não identificado!')
}
          
let updateDegree = Number(degree.toUpperCase().replace("F",""));
let formula = farenheit => (farenheit - 32)* 5/9
let degreeSign = 'C'

if(celciusExist) {
    updateDegree = Number(degree.toUpperCase().replace("C",""));
    formula = celsius => celsius * 9/5 + 32
    degreeSign = 'F'
}

    return formula(updateDegree) + degreeSign

}

    try {
        console.log(transformDegree('10C'))
        console.log(transformDegree('50F'))
        transformDegree('50Z')
    } catch (error) {
        console.log(error.message)
    }




    //// sistema simples biblioteca


const booksByCategory = [
{
    category: "Riqueza",
    books: [
        {
            title: "Os segredos da mente milhonária",
            author: "T. Harv Eker",
        },
        {
            title: "O homem mais rico da Babilônia",
            author: "George S. Clason",
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
        },
    ],
},
{
    category: "Ingeligência Emocional",
    books: [       
        {
            title: "Você é substituível",
            author: "Augusto Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
        },
        {
            title: "Os 7 hábitos das pessoal altamente eficazes",
            author: "Stephen R. Covey",
        },
    ],
},
];              

        const totalCategories = booksByCategory.lenght      

            console.log(totalCategories);
            for(let category of booksByCategory) {
                console.log('Total de livros na Categorias: ', category.category)
                console.log(category.books.lenght)  
            }

    
