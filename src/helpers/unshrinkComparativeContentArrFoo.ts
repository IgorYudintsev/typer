export const unshrinkComparativeContentArrFoo=(comparativeContentArr:Array<string>)=>{
    let unshrinkComparativeContentArr = ``
    comparativeContentArr.map(el => unshrinkComparativeContentArr += el)
    return unshrinkComparativeContentArr
    //console.log(unshrinkComparativeContentArr)
}

//в строку записываем данные из массива comparativeContentArr (данные для сравнения)