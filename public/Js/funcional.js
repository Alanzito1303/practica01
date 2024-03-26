const left = document.getElementById('left')

const barLat = document.getElementById('bar_lat')

left.addEventListener('click', () => {
        
        if(left.className === 'bi bi-chevron-compact-left'){
            
            barLat.classList.add('desplazar_bar_lateral')
            left.className = 'bi bi-chevron-compact-right'
        }else {
            barLat.classList.remove('desplazar_bar_lateral')
            left.className = 'bi bi-chevron-compact-left'
        }
    })

