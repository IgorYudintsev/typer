export const arrayForDisplayFoo=(comparativeContentArr:Array<string>,marginNumbers:Array<number>)=>{
    let arrayForDisplay: Array<string> = []
    comparativeContentArr.map((el, index) => {
        return (arrayForDisplay.push(`<span style="margin-left: ${marginNumbers[index]}px">${el}</span><br>`))
    })
    return arrayForDisplay
}
//набрасываем марджины на элементы массива