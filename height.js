function heightTriangle(side1, base){
    //Divition of the base
    const divBase = base/2
    //Pitagoras theorem
    const pitagorasTheorem = (side1**2) - (divBase**2)
    //Square root
    const sqroot = Math.sqrt(pitagorasTheorem)
    return sqroot
}