//Helper functions
function isPair(number){
    return (number % 2 === 0)
}

function calculateArithmeticAverage(list){
    const listPlus = list.reduce(
        function(accumulatedValue = 0, newElement){
            return accumulatedValue + newElement
        }
    )

    const listAverage = listPlus / list.length
    return listAverage
}

//Median calculator
function medianSalaries(list){
    const middle = parseInt(list.length / 2)

    if(isPair(list.length)){
        const personMiddle1 = list[middle -1]
        const personMiddle2 = list[middle]

        const median = calculateArithmeticAverage([personMiddle1, personMiddle2])
        return median
    }else{
        const personMiddle = list[middle]
        return personMiddle
    }
}

//General median
const salariesCol = colombia.map(
    function(person){
        return person.salary
    }
)

const colSortedSalaries = salariesCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
)

const generalMedianCol = medianSalaries(colSortedSalaries)

//Top 10% median
const spliceStart = (colSortedSalaries.length * 90) / 100
const spliceCount = (colSortedSalaries.length - spliceStart)
const colTop10Salaries = colSortedSalaries.splice(spliceStart, spliceCount)

const top10ColMedian = medianSalaries(colTop10Salaries)

console.log({
    generalMedianCol,
    top10ColMedian
})