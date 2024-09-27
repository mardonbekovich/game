const randomNumber = Math.floor(Math.random() * 100) + 1

console.log(randomNumber);
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const result = document.querySelector('#result')



btn.addEventListener('click', () => {
    const userGuess = Number(input.value)
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.innerText = ' vvedi chislo 1 do 100'
        // input.value=''
    } else if (userGuess == randomNumber) {
        result.innerText = 'You win🫵'
        setTimeout(() => {
            randomNumber = Math.floor(Math.random() * 100) + 1
            result.innerText = 'zagaday snova ti ne uspel'
            input.value=''
        }, timeout);
    } else if (userGuess < userGuess) {
        result.innerText = `plese write ${userGuess} mbolshe number👆`
        input.value=''
    } else {
        result.innerText = `plese write ${userGuess}menshe number👇`
        input.value=''
    }
})