export const contentForDisplayFoo=(arrayForDisplay:Array<string>)=>{
    let contentForDisplay = ''
    arrayForDisplay.map(el => contentForDisplay += el)
    return contentForDisplay
}
//в строку записываем данные из массива чтобы отобразить пример