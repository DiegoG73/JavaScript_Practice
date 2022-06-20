function calculateArithmeticAverage(list){
    const listPlus = list.reduce(
        function(accumulatedValue = 0, newElement){
            return accumulatedValue + newElement
        }
    )

    const listAverage = listPlus / list.length
    return listAverage
}