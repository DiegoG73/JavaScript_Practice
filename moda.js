const list2 = [1, 2, 4, 9, 5, 0, 10, 23, 2, 78, 56, 23, 9, 26, 23, 76, 90, 87, 10, 5, 23, 57, 1, 2, 84, 62, 93, 23, 56, 90, 16]

const list2Count = {}

list2.map(
    function(element){
        if(list2Count[element]){
            list2Count[element] += 1
        }else{
            list2Count[element] = 1
        }
    }
)

const list2Array = Object.entries(list2Count).sort(
    function(elementA, elementB){
        return elementA[1] - elementB[1]
    }
)
const moda = list2Array[list2Array.length - 1]
// const list2Array = Object.entries(list2Count).sort(
//     function(acumulatedValue, newValue){
//         acumulatedValue - newValue
//     }
// )