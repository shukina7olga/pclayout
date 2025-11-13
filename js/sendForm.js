const sendForm = () => {
    const form = document.querySelector('.modal')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendObj = {
            name: text.value,
            tel: tel.value,
            email: email.value
        }

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(sendObj), 
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`)
            }
            return response.json()
        })
        .then((json) => {
            console.log(json)
            alert('Данные успешно отправлены!')
        })
        .catch((error) => {
            console.error('Ошибка:', error)
            alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.')
        })
        .finally(() => {
            // Очистка формы
            form.reset()
        })
    })
}

sendForm()