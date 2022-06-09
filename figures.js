// Square code
console.group("Square")
const squareSide = 5
console.log("The square sides measure: " + squareSide + "cm")
//Perimeter
const squarePerimeter = squareSide * 4
console.log("The perimeter of the square is: " + squarePerimeter + "cm")
//Area
const squareArea = squareSide * squareSide
console.log("The square area is: " + squareArea + "cm^2")
console.groupEnd()

//Triangle code
console.group("Triangles")
const triangleSide1 = 6
const triangleSide2 = 6
const triangleBase = 4
console.log("The triangle sides measure: " + triangleSide1 + "cm, " + triangleSide2 + "cm, " + triangleBase + "cm")
const triangleHeight = 5.5
console.log("The triangle height is: " + triangleHeight + "cm")
//Triangle perimeter
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase
console.log("The perimeter of the triangle is: " + trianglePerimeter + "cm")
//Triangle area
const triangleArea = (triangleBase * triangleHeight) / 2
console.log("The triangle area is: " + triangleArea + "cm^2")
console.groupEnd()

//Circle code
console.group("Circles")
const circleRadius = 4
console.log("The circle radius is: " + circleRadius + "cm")
const circleDiameter = circleRadius * 2 
const pi = Math.PI
//Circumference
const circlePerimeter = circleDiameter * pi
console.log("The circle perimeter is: " + circlePerimeter + "cm")
//Circle area
const circleArea = (pi * circleRadius**2)
console.log("The circle area is: " + circleArea + "cm^2")
console.groupEnd()