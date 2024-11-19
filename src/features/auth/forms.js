
export const getForm = () => {
    const path = window.location.pathname;
    if (path === '/register' || path === '/login') {
        const form = document.getElementById('form')
        form.addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries(
                new FormData(e.target)
            )
            console.log(JSON.stringify(data))
            alert(JSON.stringify(data))
        })

    }
}



