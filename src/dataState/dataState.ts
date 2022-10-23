export const dataState: DataStateType = {
    pages:
        [
            {
                heading: "Цикл while",
                about: " Цикл while имеет следующий синтаксис: ",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`let i=0;\n`, `while(i<3){\n`, `alert(i);\n`, `i++;\n`, `}`],
                marginNumbers: [0, 0, 20, 20, 0],
            },
            {
                heading: "Цикл for",
                about: " Цикл while имеет следующий синтаксис: ",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`for(let i=0; i<3; i++){\n`, `alert(i);\n`, `}`],
                marginNumbers: [0, 20, 0],
            },
            {
                heading: "Конструкция \"switch\"",
                about: " Конструкция switch заменяет собой сразу несколько if.",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`let x=1+1;\n`, `switch(x){\n`, `case 1:\n`, `alert('Недолет');\n`, `break;\n`, `case 2:\n`, `alert('В цель!');\n`, `break;\n`, `case 3:\n`, `alert('Перелет');\n`, `break;\n`, `default:\n`, `alert('Вообще не в ту сторону...');\n`, `}`],
                marginNumbers: [0, 0, 20, 40, 40, 20, 40, 40, 20, 40, 40, 20, 40],
            },
            {
                heading: "Функция",
                about: "Для создания функций мы можем использовать объявление функции.",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`function showMessage(){\n`, `alert('Hello world!');\n`, `}\n`, `showMessage();`],
                marginNumbers: [0, 20, 0, 0],
            },
            {
                heading: "Стрелочная функция",
                about: "Мы стараемся использовать стрелочные функции вместо 'function declaration'",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`const sum=(a,b)=>{\n`, `const result=a+b;\n`, `return result;\n`, `}\n`, `alert(sum(1,2));`],
                marginNumbers: [0, 20, 20, 0, 0],
                       },
            {
                heading: "Объект",
                about: "Объект это ящик с  папками, каждая из которых имеет свое название",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`const user={\n`, `name:"Sanyok",\n`, `age:13\n`, `}`],
                marginNumbers: [0, 20, 20, 0],
                        },
            {
                heading: "Конструкция \"if else\"",
                about: "Если условие совпадает, то..., иначе",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`const number=100200\n`, `if(number==100200){\n`, `alert('Наше число!');\n`, `}else{\n`, `alert('Что-то не то...');\n`, `}`],
                marginNumbers: [0, 0, 20, 0, 20, 0],
            },
            {
                heading: "Метод массива map",
                about: "map-для программиста, это как вилка за ужином",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`const arr=[1,2,3,4,5];\n`, `arr.map((el,index)=>{\n`, `return(\n`, `{el}\n`, `)\n`, `})`],
                marginNumbers: [0, 0, 20, 100, 80, 0],
            },
            {
                heading: "Метод массива filter",
                about: "filter-для программиста, это как нож для стей(т/к)а",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`const arr=[1,2,3,4,5];\n`, `arr.filter(el=> alert(el!==3))`],
                marginNumbers: [0, 0],
            },
            {
                heading: "Метод массива slice",
                about: "CodeWars начнет решаться, когда вы поймете этот метод. Это просто",
                text: "Избегайте лишних пробелов. <br> Не делайте, пожалуйста, отступы вначале строки пробелами.",
                comparativeContentArr: [`const arr=[1,2,3,4,5];\n`, `alert(arr.slice(1,3))`],
                marginNumbers: [0, 0],
            },
        ],
}

export type DataStateType = {
    pages: Array<PagesType>
}

export type PagesType = {
    heading: string
    about: string
    text: string
    comparativeContentArr: Array<string>
    marginNumbers: Array<number>
}
