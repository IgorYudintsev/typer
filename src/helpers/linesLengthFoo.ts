export const linesLengthFoo=(comparativeContentArr:Array<string>)=>{
    let linesLength: Array<number> = []
    let sum = 0
    comparativeContentArr.map(el => {
        sum += el.length
        return (
            linesLength.push(sum)
        )
    })
    return linesLength
    // console.log("linesLength",linesLength)
}
//записываем длину каждой строки