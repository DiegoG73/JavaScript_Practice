// Square code
console.group("Square")
//const squareSide = 5
//console.log("The square sides measure: " + squareSide + "cm")
//Perimeter
function squarePerimeter(side){
    return side * 4
}
squarePerimeter()
//Area
function squareArea(side){
    return side * side
}
squareArea()
//console.log("The square area is: " + squareArea + "cm^2")
console.groupEnd()

//Triangle code
console.group("Triangles")
//Triangle perimeter
function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base
}
trianglePerimeter()

//Triangle area
function triangleArea(base, height){
    return (base * height) / 2
}
triangleArea()

//Triangle height
function heightTriangle(side1, base){
    //Divition of the base
    const divBase = base/2
    //Pitagoras theorem
    const pitagorasTheorem = (side1**2) - (divBase**2)
    //Square root
    const sqroot = Math.sqrt(pitagorasTheorem)
    return sqroot
}
console.groupEnd()

//Circle code
console.group("Circles")
const pi = Math.PI
//Circle diameter:
function circleDiameter(radius){
    return radius * 2
}
circleDiameter()
//Circumference
function circlePermiter(radius){
    const diameter = circleDiameter(radius)
    return diameter * pi
}
circlePermiter()
//Circle area
function circleArea(radius){
    return pi * radius**2
}
circleArea()

//Here we interact with html (Square)
function calculateSquarePerimeter(){
    const input = document.getElementById("SquareInput")
    const value = input.value

    const perimeter = squarePerimeter(value)
    alert(perimeter)
}
function calculateSquareArea(){
    const input = document.getElementById("SquareInput")
    const value = input.value

    const area = squareArea(value)
    alert(area)
}

function calculateTrianglePerimeter(){
    const input1 = document.getElementById("TriangleInput1")
    const input2 = document.getElementById("TriangleInput2")
    const input3 = document.getElementById("TriangleInput3")
    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value

    const perimeter = trianglePerimeter(value1, value2, value3)
    alert(perimeter)
}
function calculateTriangleArea(){
    const input1 = document.getElementById("TriangleInput1")
    const input2 = document.getElementById("TriangleInput2")
    const input3 = document.getElementById("TriangleInput3")
    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value
    
    const height = heightTriangle(value1, value3)
    const area = triangleArea(value3, height)
    alert(area)
}

function calculateCirclePerimeter(){
    const input = document.getElementById("CircleInput")
    const value = input.value

    const perimeter = circlePermiter(value)
    alert(perimeter)
}
function calculateCircleArea(){
    const input = document.getElementById("CircleInput")
    const value = input.value

    const area = circleArea(value)
    alert(area)
}