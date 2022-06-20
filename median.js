function calculateArithmeticAverage(list){
    const listPlus = list.reduce(
        function(accumulatedValue = 0, newElement){
            return accumulatedValue + newElement
        }
    )

    const listAverage = listPlus / list.length
    return listAverage
}

const list1 = [10000, 400, 200, 1, 500, 725, 893, 346]
list1.sort(function(a,b){
    return a - b
})

const meadleList1 = parseInt(list1.length / 2)



function isPair(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

let median;
if (isPair(list1.length)){
    const element1 = list1[meadleList1 - 1]
    const element2 = list1[meadleList1]
    const averageElements = calculateArithmeticAverage([element1, element2])

    median = averageElements
}else{
    median = list1[meadleList1]
}