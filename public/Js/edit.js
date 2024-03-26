const Editar = document.querySelectorAll('.Editar')

Editar.forEach(btn => {
    btn.addEventListener('click', () => {
        
        const endpoint = `/inicio/editar/${btn.dataset.up}`
        fetch(endpoint)
        .then(result => {})
        .then(data => {
            window.location.href = `/inicio/editar/${btn.dataset.up}`
        })
    })
})