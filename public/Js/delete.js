const borrar = document.querySelectorAll('.Borrar')

borrar.forEach(btn => {
    btn.addEventListener('click', () => {
        
        const endpoint = `/inicio/cursos/${btn.dataset.id}`
        fetch(endpoint, {method:'delete'})
        .then(response => response.json())
        .then(data => {
            window.location.href = data.redirect
        })
    })
})