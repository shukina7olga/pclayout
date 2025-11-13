const daysBlock = document.querySelector('.timer__days')
const hoursBlock = document.querySelector('.timer__hours')
const minutesBlock = document.querySelector('.timer__minutes')
const secondsBlock = document.querySelector('.timer__seconds')

let interval // переменная для значения интервала. чтобы потом мы обнулили таймер

//функция для склонениями слов
const numWord = (value, words) => {
    value = Math.abs(value) % 100// берем только модуль числа на случай, если отрицательное значение придёт
   
    const lastNum = value % 10 //найти последнюю цифру
   
    if (value > 10 && value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum == 1) return words[0]
    return words[2]
}

const updateTimer = () => {
    const date = new Date()
    const dateDeadline = new Date('19 november 2025').getTime()
    const timeRemaining = (dateDeadline - date)/1000

    const days = Math.floor(timeRemaining / 60 / 60 / 24)
    const hours = Math.floor((timeRemaining / 60 / 60) % 24) // 1ое деление - в минуты перевод, 2ое - в часы
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const seconds = Math.floor(timeRemaining % 60) // остаток от деления на 60 (минуты) и выводим только то, что не поделилось
 
    //делаем, чтобы появлялся  0 перед числом. к примеру где 5 сек, было 05 сек и тд. f - форматированные
    const fDays = days < 10 ? '0' + days : days
    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds


    daysBlock.textContent = fDays
    hoursBlock.textContent = fHours
    minutesBlock.textContent = fMinutes
    secondsBlock.textContent = fSeconds
    
    // Склонение для всех единиц времени
    daysBlock.nextElementSibling.textContent = numWord(days, ['день', 'дня', 'дней'])
    hoursBlock.nextElementSibling.textContent = numWord(hours, ['час', 'часа', 'часов'])
    minutesBlock.nextElementSibling.textContent = numWord(minutes, ['минута', 'минуты', 'минут'])
    secondsBlock.nextElementSibling.textContent =  numWord(seconds, ['секунда', 'секунды', 'секунд'])// получаем следующий по очереди блок внутри верстки

    if (timeRemaining <= 0) {
        clearInterval(interval)
        daysBlock.textContent = '00'    
        hoursBlock.textContent = '00'
        minutesBlock.textContent = '00'
        secondsBlock.textContent = '00'
        document.querySelector('.main-display__timer').style.color = 'red'
    }
}

updateTimer()
interval = setInterval(updateTimer, 500) 










// 3ий этап. вывод ДНЕЙ ЧАСОВ МИНУТ СЕКУНД до дедлайна
// const daysBlock = document.querySelector('.timer__days')
// const hoursBlock = document.querySelector('.timer__hours')
// const minutesBlock = document.querySelector('.timer__minutes')
// const secondsBlock = document.querySelector('.timer__seconds')

// let interval

// const updateTimer = () => {
//     const date = new Date()
//     const dateDeadline = new Date('15 november 2025').getTime()
//     const timeRemaining = (dateDeadline - date)/1000

//     const days = Math.floor(timeRemaining / 60 / 60 / 24)
//     const hours = Math.floor((timeRemaining / 60 / 60) % 24) // 1ое деление - в минуты перевод, 2ое - в часы
//     const minutes = Math.floor((timeRemaining / 60) % 60)
//     const seconds = Math.floor(timeRemaining % 60) // остаток от деления на 60 (минуты) и выводим только то, что не поделилось
 
//     //делаем, чтобы появлялся  0 перед числом. к примеру где 5 сек, было 05 сек и тд. f - форматированные
//     const fDays = days < 10 ? '0' + days : days
//     const fHours = hours < 10 ? '0' + hours : hours
//     const fMinutes = minutes < 10 ? '0' + minutes : minutes
//     const fSeconds = seconds < 10 ? '0' + seconds : seconds


//     daysBlock.textContent = fDays
//     hoursBlock.textContent = fHours
//     minutesBlock.textContent = fMinutes
//     secondsBlock.textContent = fSeconds

//     if (timeRemaining <= 0) {
//         clearInterval(interval)
//         daysBlock.textContent = '00'
//         hoursBlock.textContent = '00'
//         minutesBlock.textContent = '00'
//         secondsBlock.textContent = '00'
//     }
// }

// updateTimer()
// interval = setInterval(updateTimer, 500) 




// 2ой этап. вывод ЧАСОВ МИНУТ СЕКУНД до дедлайна. без дней
// const hoursBlock = document.querySelector('.timer__hours')
// const minutesBlock = document.querySelector('.timer__minutes')
// const secondsBlock = document.querySelector('.timer__seconds')

// const updateTimer = () => {
//     const date = new Date()
//     const dateDeadline = new Date('25 november 2025').getTime()
//     const timeRemaining = (dateDeadline - date)/1000

//     const hours = Math.floor(timeRemaining / 60 / 60) // 1ое деление - в минуты перевод, 2ое - в часы
//     const minutes = Math.floor((timeRemaining / 60) % 60)
//     const seconds = Math.floor(timeRemaining % 60) // остаток от деления на 60 (минуты) и выводим только то, что не поделилось
 
//     //делаем, чтобы появлялся  0 перед числом. к примеру где 5 сек, было 05 сек и тд. f - форматированные
//     const fHours = hours < 10 ? '0' + hours : hours
//     const fMinutes = minutes < 10 ? '0' + minutes : minutes
//     const fSeconds = seconds < 10 ? '0' + seconds : seconds


//     hoursBlock.textContent = fHours
//     minutesBlock.textContent = fMinutes
//     secondsBlock.textContent = fSeconds

//     // console.log(timeRemaining);
// }
// const date = new Date().getTime() //количество милисекунд с 1 января 1970г в 00.00
// const dateDeadline = new Date('24 april 2026').getTime() //количество милисекунд до переданной даты

// console.log(date);
// console.log(dateDeadline);
// console.log(dateDeadline - date); // сколько пройдет от нынешней секунды до дедлайна




// 1ый этап. только вывод текущего времени
// const hoursBlock = document.querySelector('.timer__hours')
// const minutesBlock = document.querySelector('.timer__minutes')
// const secondsBlock = document.querySelector('.timer__seconds')

// const updateTimer = () => {
//     const date = new Date()

//     const hours = date.getHours()
//     const minutes = date.getMinutes()
//     const seconds = date.getSeconds()

//     //делаем, чтобы появлялся  0 перед числом. к примеру где 5 сек, было 05 сек и тд. f - форматированные
//     const fHours = hours < 10 ? '0' + hours : hours
//     const fMinutes = minutes < 10 ? '0' + minutes : minutes
//     const fSeconds = seconds < 10 ? '0' + seconds : seconds


//     hoursBlock.textContent = fHours
//     minutesBlock.textContent = fMinutes
//     secondsBlock.textContent = fSeconds

//     console.log(timeRemaining);
// }

// updateTimer()
// setInterval(updateTimer, 500) 
// сначала указали 1000 милисек. но 1 тик зависит от самого процессора компа. по этому на 
//сайте цифрры могут залипать. и принято ставить 500-700


