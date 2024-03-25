const input = document.querySelectorAll('input')
const button = document.querySelector('#button')
const text = document.querySelector('.p-anim')
button.addEventListener('click', () => {
    text.innerHTML = 'Ваше животное:'
    const FirstInput = Number(input[0].value)
    const SecondInput = Number(input[1].value)
    const ThirdInput = Number(input[2].value)
    const Mlecopet = FirstInput * 0.8 + SecondInput * 0.2 + ThirdInput * 0.2;
    const Ptica = FirstInput * 0.5 + SecondInput * 0.7 + ThirdInput * 0.2;
    const Reptile = FirstInput * 0.3 + SecondInput * 0.2 + ThirdInput * 0.8;

    if (Mlecopet > Ptica , Mlecopet > Reptile) {
        text.innerHTML += ' Млекопетающее'
    }
    else if (Ptica > Mlecopet , Ptica > Reptile) {
        text.innerHTML += ' Летающее'
    }
    else if (Reptile > Mlecopet , Reptile > Ptica) {
        text.innerHTML += ' Рептилия'
    }
    else {
        text.innerHTML = 'Введите данные'
    }
})

const ButtonForRefresh = document.querySelector('.Refresh')
ButtonForRefresh.addEventListener('click', () => {
    text.innerHTML = 'Ваше животное:'
    for (let i in input){
        input[i].value = ''
    }
})
