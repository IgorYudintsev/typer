import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {S} from '../styles/allContentStyles'
import Highlight from 'react-highlight';
import {useNavigate} from "react-router-dom";

import {PagesType} from "../dataState/dataState";
import {linesLengthFoo} from "../helpers/linesLengthFoo";
import {unshrinkComparativeContentArrFoo} from "../helpers/unshrinkComparativeContentArrFoo";
import {arrayForDisplayFoo} from "../helpers/arrayForDisplayFoo";
import {contentForDisplayFoo} from "../helpers/contentForDisplayFoo";

export type ContentType = {
    pages: PagesType[]
    route: number
}

export const Content = (props: ContentType) => {
    let navigate = useNavigate()
    const {route} = props
    const {
        heading,
        about,
        text,
        comparativeContentArr,
        marginNumbers
    } = props.pages[route]

    const unshrinkComparativeContentArr = unshrinkComparativeContentArrFoo(comparativeContentArr)   //в строку записываем данные из массива comparativeContentArr (данные для сравнения)

    const linesLength = linesLengthFoo(comparativeContentArr)                      //получаем длину каждой строки

    const arrayForDisplay = arrayForDisplayFoo(comparativeContentArr, marginNumbers)   //набрасываем марджины на элементы массива

    const contentForDisplay = contentForDisplayFoo(arrayForDisplay)                  //в строку записываем данные из массива чтобы отобразить пример


    useEffect(() => {                                                        //перезагружаем и обнуляем все данные при переходе на новые страницы
        setShowContent(contentForDisplay)
        setTextUser('')
        setDisabled(true)
    }, [route])

    const [textUser, setTextUser] = useState('')                        // то что набирает юзверь
    const [showContent, setShowContent] = useState<string>(contentForDisplay)    // то что отрисовывается
    const [disabled, setDisabled] = useState(true)                     // раздизэблить кнопку переходов
    const [errorCounter, setErrorCounter] = useState<number>(0)        // считает кол-во ошибок
    // console.log("errorCounter",errorCounter)


    useEffect(() => {                                                        // если юзверь удалит содежимое поля выделением, то обнули кол-во ошибок
        setErrorCounter(0)
    }, [!textUser])

    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.code === 'Backspace') {
            if (errorCounter <= 0) {
                setErrorCounter(0)                   // чтобы не уходило в отрицательные величины
            } else {
                setErrorCounter(errorCounter - 1)    // т.к. даже удаление неправильных символов приводит +1 к errorCounter
            }
        }
    }

    const openNextTaskButton = (numberOfSymbol:number) => {
        if (numberOfSymbol === unshrinkComparativeContentArr.length && errorCounter === 0) {           // открываем кнопку перехода
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextUser(event.currentTarget.value)
        const numberOfSymbol = event.currentTarget.value.length                      //номер последнего набранного юзером символа
        //console.log('numberOfSymbol', numberOfSymbol)

        openNextTaskButton(numberOfSymbol)                                           // открываем кнопку перехода

        if (unshrinkComparativeContentArr.startsWith(event.currentTarget.value)) {    //сравниваем набираемый текст с шаблоном (comparativeContent)
            setShowContent(contentForDisplay)
        } else {
            //@ts-ignore
            if (event.nativeEvent.inputType !== 'deleteContentBackward') {            //считай ошибки при любом нажатии, кроме backSpace
                setErrorCounter(errorCounter + 1)
            }

            let errorLine = linesLength.findIndex(el => el >= numberOfSymbol)         //найдет нужный индекс, чтобы добавить по этому адресу background-color: red

            if (errorCounter <= 0) {
                setShowContent(contentForDisplay.replace(arrayForDisplay[errorLine], `<span style="background-color: red">${arrayForDisplay[errorLine]}</span>`))
            }

        }
    }

    return (
        <S.Wrapper>
            <S.Box>
                <S.Header>{heading}</S.Header>
                <S.About>{about}</S.About>

                <S.Example>
                    <S.MarginLeft>
                        <Highlight innerHTML>
                            {showContent}
                        </Highlight>
                    </S.MarginLeft>
                </S.Example>

                <S.TextWrapper>
                    <S.Text dangerouslySetInnerHTML={{__html: text}}/>
                </S.TextWrapper>

                <S.TextAreaWrapper error={errorCounter > 0 ? errorCounter : undefined}>
                    <textarea name="" id="" cols={80} rows={10} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}
                              value={textUser}/>
                </S.TextAreaWrapper>

                <S.ButtonWrapper disabled={disabled}>
                    <button disabled={disabled}
                            onClick={() => navigate(props.pages.length - 1 === route ? `/show/0` : `/show/${route + 1}`)}>Переход
                        к следующему
                        заданию
                    </button>
                </S.ButtonWrapper>
            </S.Box>
        </S.Wrapper>
    );
};
//----------------------------------------------------------------------------------------------------------
// import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
// import {S} from '../styles/allContentStyles'
// import Highlight from 'react-highlight';
// import {useNavigate} from "react-router-dom";
//
// import {PagesType} from "../dataState/dataState";
// import {linesLengthFoo} from "../helpers/linesLengthFoo";
// import {unshrinkComparativeContentArrFoo} from "../helpers/unshrinkComparativeContentArrFoo";
// import {arrayForDisplayFoo} from "../helpers/arrayForDisplayFoo";
// import {contentForDisplayFoo} from "../helpers/contentForDisplayFoo";
//
// export type ContentType = {
//     pages: PagesType[]
//     route: number
// }
//
// export const Content = (props: ContentType) => {
//     let navigate = useNavigate()
//     const {route} = props
//     const {
//         heading,
//         about,
//         text,
//         comparativeContentArr,
//         marginNumbers
//     } = props.pages[route]
//
//     const unshrinkComparativeContentArr=  unshrinkComparativeContentArrFoo(comparativeContentArr)   //в строку записываем данные из массива comparativeContentArr (данные для сравнения)
//
//     const linesLength = linesLengthFoo(comparativeContentArr)                      //получаем длину каждой строки
//
//     const arrayForDisplay= arrayForDisplayFoo(comparativeContentArr,marginNumbers)   //набрасываем марджины на элементы массива
//
//     const contentForDisplay= contentForDisplayFoo(arrayForDisplay)                  //в строку записываем данные из массива чтобы отобразить пример
//
//
//     useEffect(() => {                                                        //перезагружаем и обнуляем все данные при переходе на новые страницы
//         setShowContent(contentForDisplay)
//         setTextUser('')
//         setDisabled(true)
//     }, [route])
//
//     const [textUser, setTextUser] = useState('')                        // то что набирает юзверь
//     const [showContent, setShowContent] = useState<string>(contentForDisplay)    // то что отрисовывается
//     const [disabled, setDisabled] = useState(true)                     // раздизэблить кнопку переходов
//     const [errorCounter, setErrorCounter] = useState<number>(0)        // считает кол-во ошибок
//     // console.log("errorCounter",errorCounter)
//
//
//     useEffect(() => {                                                        // если юзверь удалит содежимое поля выделением, то обнули кол-во ошибок
//         setErrorCounter(0)
//     }, [!textUser])
//
//     const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
//         if (event.code === 'Backspace') {
//             if (errorCounter <= 0) {
//                 setErrorCounter(0)                   // чтобы не уходило в отрицательные величины
//             } else {
//                 setErrorCounter(errorCounter - 1)    // т.к. даже удаление неправильных символов приводит +1 к errorCounter
//             }
//         }
//     }
//
//     const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
//         setTextUser(event.currentTarget.value)
//         const numberOfSymbol = event.currentTarget.value.length                  //номер последнего набранного юзером символа
//         //console.log('numberOfSymbol', numberOfSymbol)
//
//         if (numberOfSymbol === unshrinkComparativeContentArr.length && errorCounter === 0) {           // открываем кнопку перехода
//             setDisabled(false)
//         } else {
//             setDisabled(true)
//         }
//
//         if (unshrinkComparativeContentArr.startsWith(event.currentTarget.value)) {
//             setShowContent(contentForDisplay)                                     //сравниваем набираемый текст с шаблоном (comparativeContent)
//         } else {
//             //@ts-ignore
//             if (event.nativeEvent.inputType !== 'deleteContentBackward') {
//                 setErrorCounter(errorCounter + 1)
//             }
//
//             let errorLine = linesLength.findIndex(el => el >= numberOfSymbol)   //найдет нужный индекс, чтобы добавить по этому адресу background-color: red
//
//             if (errorCounter <= 0) {
//                 setShowContent(contentForDisplay.replace(arrayForDisplay[errorLine], `<span style="background-color: red">${arrayForDisplay[errorLine]}</span>`))
//             }
//
//         }
//     }
//
//     return (
//         <S.Wrapper>
//             <S.Box>
//                 <S.Header>{heading}</S.Header>
//                 <S.About>{about}</S.About>
//
//                 <S.Example>
//                     <S.MarginLeft>
//                         <Highlight innerHTML>
//                             {showContent}
//                         </Highlight>
//                     </S.MarginLeft>
//                 </S.Example>
//
//                 <S.TextWrapper>
//                     <S.Text dangerouslySetInnerHTML={{__html: text}}/>
//                 </S.TextWrapper>
//
//                 <S.TextAreaWrapper error={errorCounter > 0 ? errorCounter : undefined}>
//                     <textarea name="" id="" cols={80} rows={10} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}
//                               value={textUser}/>
//                 </S.TextAreaWrapper>
//
//                 <S.ButtonWrapper disabled={disabled}>
//                     <button disabled={disabled}
//                             onClick={() => navigate(props.pages.length - 1 === route ? `/show/0` : `/show/${route + 1}`)}>Переход
//                         к следующему
//                         заданию
//                     </button>
//                 </S.ButtonWrapper>
//             </S.Box>
//         </S.Wrapper>
//     );
// };
//----------------------------------------------------------------------------------------------------------
// import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
// import {S} from '../styles/allContentStyles'
// import Highlight from 'react-highlight';
// import {useNavigate} from "react-router-dom";
//
// import {PagesType} from "../dataState/dataState";
// import {linesLengthFoo} from "../helpers/linesLengthFoo";
//
// export type ContentType = {
//     pages: PagesType[]
//     route: number
// }
//
// export const Content = (props: ContentType) => {
//     let navigate = useNavigate()
//     const {route} = props
//     const {
//         heading,
//         about,
//         text,
//         comparativeContentArr,
//         marginNumbers
//     } = props.pages[route]
//
//
//     let unshrinkComparativeContentArr = ``                                       //в строку записываем данные из массива comparativeContentArr (данные для сравнения)
//     comparativeContentArr?.map(el => unshrinkComparativeContentArr += el)
//     //console.log(unshrinkComparativeContentArr)
//
//     let linesLength: Array<number> = []                                         //записываем длину каждой строки
//     let sum = 0
//     comparativeContentArr?.map(el => {
//         sum += el.length
//         return (
//             linesLength.push(sum)
//         )
//     })
//     // console.log("linesLength",linesLength)
//
//     linesLengthFoo(comparativeContentArr)
//
//
//     let arrayForDisplay: Array<string> = []                                                 //в строку записываем данные из массива чтобы отобразить пример
//     comparativeContentArr.map((el, index) => {
//         return (arrayForDisplay.push(`<span style="margin-left: ${marginNumbers[index]}px">${el}</span><br>`))
//     })
//
//     let contentForDisplay = ''                                                  //в строку записываем данные из массива чтобы отобразить пример
//     arrayForDisplay.map(el => contentForDisplay += el)
//
//
//     useEffect(() => {                                                      //обнуляем все данные при переходе на страницы
//         setShowContent(contentForDisplay)
//         setTextUser('')
//         setDisabled(true)
//     }, [route])
//
//     const [textUser, setTextUser] = useState('')                        // то что набирает юзверь
//     const [showContent, setShowContent] = useState<string>(contentForDisplay)    // то что отрисовывается
//     const [disabled, setDisabled] = useState(true)                     // раздизэблить кнопку переходов
//     const [errorCounter, setErrorCounter] = useState<number>(0)        // считает кол-во ошибок
//     // console.log("errorCounter",errorCounter)
//
//
//     useEffect(() => {                                                        // если юзверь удалит содежимое поля выделением, то обнули кол-во ошибок
//         setErrorCounter(0)
//     }, [!textUser])
//
//     const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
//         if (event.code === 'Backspace') {
//             if (errorCounter <= 0) {
//                 setErrorCounter(0)                   // чтобы не уходило в отрицательные величины
//             } else {
//                 setErrorCounter(errorCounter - 1)    // т.к. даже удаление неправильных символов приводит +1 к errorCounter
//             }
//         }
//     }
//
//     const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
//         setTextUser(event.currentTarget.value)
//         const numberOfSymbol = event.currentTarget.value.length                  //номер последнего набранного юзером символа
//         //console.log('numberOfSymbol', numberOfSymbol)
//
//         if (numberOfSymbol === unshrinkComparativeContentArr.length && errorCounter === 0) {           // открываем кнопку перехода
//             setDisabled(false)
//         } else {
//             setDisabled(true)
//         }
//
//         if (unshrinkComparativeContentArr.startsWith(event.currentTarget.value)) {
//             setShowContent(contentForDisplay)                                     //сравниваем набираемый текст с шаблоном (comparativeContent)
//
//         } else {
//             //@ts-ignore
//             if (event.nativeEvent.inputType !== 'deleteContentBackward') {
//                 setErrorCounter(errorCounter + 1)
//             }
//
//             let errorLine = linesLength.findIndex(el => el >= numberOfSymbol)   //найдет нужный индекс, чтобы добавить по этому адресу background-color: red
//             console.log(errorLine)
//
//             if (errorCounter <= 0) {
//                 setShowContent(contentForDisplay.replace(arrayForDisplay[errorLine], `<span style="background-color: red">${arrayForDisplay[errorLine]}</span>`))
//             }
//
//         }
//     }
//
//     return (
//         <S.Wrapper>
//             <S.Box>
//                 <S.Header>{heading}</S.Header>
//                 <S.About>{about}</S.About>
//
//                 <S.Example>
//                     <S.MarginLeft>
//                         <Highlight innerHTML>
//                             {showContent}
//                         </Highlight>
//                     </S.MarginLeft>
//                 </S.Example>
//
//                 <S.TextWrapper>
//                     <S.Text dangerouslySetInnerHTML={{__html: text}}/>
//                 </S.TextWrapper>
//
//                 <S.TextAreaWrapper error={errorCounter > 0 ? errorCounter : undefined}>
//                     <textarea name="" id="" cols={80} rows={10} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}
//                               value={textUser}/>
//                 </S.TextAreaWrapper>
//
//                 <S.ButtonWrapper disabled={disabled}>
//                     <button disabled={disabled}
//                             onClick={() => navigate(props.pages.length - 1 === route ? `/show/0` : `/show/${route + 1}`)}>Переход
//                         к следующему
//                         заданию
//                     </button>
//                 </S.ButtonWrapper>
//             </S.Box>
//         </S.Wrapper>
//     );
// };

//----------------------------------------------------------------------------------------------------------


// import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
// import {S} from '../styles/allContentStyles'
// import Highlight from 'react-highlight';
// import {useNavigate} from "react-router-dom";
//
// import {PagesType} from "../dataState/dataState";
//
// export type ContentType = {
//     pages: PagesType[]
//     route: number
// }
//
// export const Content = (props: ContentType) => {
//     let navigate = useNavigate()
//     const {route} = props
//     const {
//         heading,
//         about,
//         text,
//         content,
//         comparativeContentArr
//     } = props.pages[route]
//
//
//     let unshrinkComparativeContentArr = ``                                       //в строку записываем данные из массива comparativeContentArr (данные для сравнения)
//     comparativeContentArr?.map(el => unshrinkComparativeContentArr += el)
//     //console.log(unshrinkComparativeContentArr)
//
//     let linesLength: Array<number> = []                                                          //записываем длину каждой строки
//     let sum = 0
//     comparativeContentArr?.map(el => {
//         sum += el.length
//         return (
//             linesLength.push(sum)
//         )
//     })
//     // console.log("linesLength",linesLength)
//
//     let contentForDisplay = ''                                                  //в строку записываем данные из массива чтобы отобразить пример
//     content.map(el => contentForDisplay += el)
//
//     useEffect(() => {                                                      //обнуляем все данные при переходе на страницы
//         setShowContent(contentForDisplay)
//         setTextUser('')
//         setDisabled(true)
//     }, [route])
//
//     const [textUser, setTextUser] = useState('')                        // то что набирает юзверь
//     const [showContent, setShowContent] = useState<string>(contentForDisplay)    // то что отрисовывается
//     const [disabled, setDisabled] = useState(true)                     // раздизэблить кнопку переходов
//     const [errorCounter, setErrorCounter] = useState<number>(0)        // считает кол-во ошибок
//     // console.log("errorCounter",errorCounter)
//
//
//     useEffect(() => {                                                        // если юзверь удалит содежимое поля выделением, то обнули кол-во ошибок
//         setErrorCounter(0)
//     }, [!textUser])
//
//     const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
//         if (event.code === 'Backspace') {
//             if (errorCounter <= 0) {
//                 setErrorCounter(0)                   // чтобы не уходило в отрицательные величины
//             } else {
//                 setErrorCounter(errorCounter - 1)    // т.к. даже удаление неправильных символов приводит +1 к errorCounter
//             }
//         }
//     }
//
//     const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
//         setTextUser(event.currentTarget.value)
//         const numberOfSymbol = event.currentTarget.value.length                  //номер последнего набранного юзером символа
//         //console.log('numberOfSymbol', numberOfSymbol)
//
//         if (numberOfSymbol === unshrinkComparativeContentArr.length && errorCounter === 0) {           // открываем кнопку перехода
//             setDisabled(false)
//         } else {
//             setDisabled(true)
//         }
//
//         if (unshrinkComparativeContentArr.startsWith(event.currentTarget.value)) {
//             setShowContent(contentForDisplay)                                     //сравниваем набираемый текст с шаблоном (comparativeContent)
//
//         } else {
//             //@ts-ignore
//             if (event.nativeEvent.inputType !== 'deleteContentBackward') {
//                 setErrorCounter(errorCounter + 1)
//             }
//
//             let errorLine = linesLength.findIndex(el => el >= numberOfSymbol)   //найдет нужный индекс, чтобы добавить по этому адресу background-color: red
//
//             if (errorCounter <= 0) {
//                 setShowContent(contentForDisplay.replace(content[errorLine], `<span style="background-color: red">${content[errorLine]}</span>`))
//             }
//
//         }
//     }
//
//     return (
//         <S.Wrapper>
//             <S.Box>
//                 <S.Header>{heading}</S.Header>
//                 <S.About>{about}</S.About>
//
//                 <S.Example>
//                     <S.MarginLeft>
//                         <Highlight innerHTML>
//                             {showContent}
//                         </Highlight>
//                     </S.MarginLeft>
//                 </S.Example>
//
//                 <S.TextWrapper>
//                     <S.Text dangerouslySetInnerHTML={{__html: text}}/>
//                 </S.TextWrapper>
//
//                 <S.TextAreaWrapper error={errorCounter > 0 ? errorCounter : undefined}>
//                     <textarea name="" id="" cols={80} rows={10} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}
//                               value={textUser}/>
//                 </S.TextAreaWrapper>
//
//                 {/*<S.ButtonWrapper disabled={disabled}>*/}
//                 {/*    <button disabled={disabled} onClick={() => navigate(`/show/${route + 1}`)}>Переход к следующему*/}
//                 {/*        заданию*/}
//                 {/*    </button>*/}
//                 {/*</S.ButtonWrapper>*/}
//
//                 <S.ButtonWrapper disabled={disabled}>
//                     <button disabled={disabled}
//                             onClick={() => navigate(props.pages.length - 1 === route ? `/show/0` : `/show/${route + 1}`)}>Переход
//                         к следующему
//                         заданию
//                     </button>
//                 </S.ButtonWrapper>
//             </S.Box>
//         </S.Wrapper>
//     );
// };


//----------------------------------------------------------------------------------------------------------


