const icon_1 = $('.rotate-picture-1')
const music_1 = $('#mySong-1')

const icon_2 = $('.rotate-picture-2')
const music_2 = $('#mySong-2')

const icon_3 = $('.rotate-picture-3')
const music_3 = $('#mySong-3')

const icon_4 = $('.rotate-picture-4')
const music_4 = $('#mySong-4')

const icon_5 = $('.rotate-picture-5')
const music_5 = $('#mySong-5')

icon_1.onclick = function (){
    if(music_1.paused){
        music_1.play()
        icon_1.style.animation = 'xoayvong 10s linear 0s infinite'
    } else {
        music_1.pause()
        icon_1.style.animation = ''
    }
}

icon_2.onclick = function (){
    if(music_2.paused){
        music_2.play()
        icon_2.style.animation = 'xoayvong 10s linear 0s infinite'
    } else {
        music_2.pause()
        icon_2.style.animation = ''
    }
}

icon_3.onclick = function (){
    if(music_3.paused){
        music_3.play()
        icon_3.style.animation = 'xoayvong 10s linear 0s infinite'
    } else {
        music_3.pause()
        icon_3.style.animation = ''
    }
}

icon_4.onclick = function (){
    if(music_4.paused){
        music_4.play()
        icon_4.style.animation = 'xoayvong 10s linear 0s infinite'
    } else {
        music_4.pause()
        icon_4.style.animation = ''
    }
}

icon_5.onclick = function (){
    if(music_5.paused){
        music_5.play()
        icon_5.style.animation = 'xoayvong 10s linear 0s infinite'
    } else {
        music_5.pause()
        icon_5.style.animation = ''
    }
}

// ----------Tour-------

const tour_1 = $('.tour-1')
const tour_2 = $('.tour-2')
const tour_3 = $('.tour-3')
const tour_4 = $('.tour-4')
const tour_5 = $('.tour-5')
const tour_6 = $('.tour-6')
const tour_7 = $('.tour-7')

const btnTour_1 = $('.btn-primary')
const btnTour_2 = $('.btn-success')
const btnTour_3 = $('.btn-danger')
const btnTour_4 = $('.btn-warning')
const btnTour_5 = $('.btn-info')
const btnTour_6 = $('.btn-light')
const btnTour_7 = $('.btn-dark')

const letter = $('.letter-favorite')

btnTour_1.onclick = function() {
    if(tour_1.style.display === 'none'){
        tour_1.style.display = "block"
        tour_2.style.display = 'none'
        tour_3.style.display = 'none'
        tour_4.style.display = 'none'
        tour_5.style.display = 'none'
        tour_6.style.display = 'none'
        tour_7.style.display = 'none'
        letter.style.display = 'none'
    }
    else{
        tour_1.style.display = "none"
        letter.style.display = 'block'
    }
}
btnTour_2.onclick = function() {
    if(tour_2.style.display === 'none'){
        tour_2.style.display = "block"
        tour_1.style.display = 'none'
        tour_3.style.display = 'none'
        tour_4.style.display = 'none'
        tour_5.style.display = 'none'
        tour_6.style.display = 'none'
        tour_7.style.display = 'none'
        letter.style.display = 'none'
    }
    else{
        tour_2.style.display = "none"
        letter.style.display = 'block'
    }
}
btnTour_3.onclick = function() {
    if(tour_3.style.display === 'none'){
        tour_3.style.display = "block"
        tour_2.style.display = 'none'
        tour_1.style.display = 'none'
        tour_4.style.display = 'none'
        tour_5.style.display = 'none'
        tour_6.style.display = 'none'
        tour_7.style.display = 'none'
        letter.style.display = 'none'
    }
    else{
        tour_3.style.display = "none"
        letter.style.display = 'block'
    }
}
btnTour_4.onclick = function() {
    if(tour_4.style.display === 'none'){
        tour_4.style.display = "block"
        tour_2.style.display = 'none'
        tour_3.style.display = 'none'
        tour_1.style.display = 'none'
        tour_5.style.display = 'none'
        tour_6.style.display = 'none'
        tour_7.style.display = 'none'
        letter.style.display = 'none'
    }
    else{
        tour_4.style.display = "none"
        letter.style.display = 'block'
    }
}
btnTour_5.onclick = function() {
    if(tour_5.style.display === 'none'){
        tour_5.style.display = "block"
        tour_2.style.display = 'none'
        tour_3.style.display = 'none'
        tour_4.style.display = 'none'
        tour_1.style.display = 'none'
        tour_6.style.display = 'none'
        tour_7.style.display = 'none'
        letter.style.display = 'none'
    }
    else{
        tour_5.style.display = "none"
        letter.style.display = 'block'
    }
}
btnTour_6.onclick = function() {
    if(tour_6.style.display === 'none'){
        tour_6.style.display = "block"
        tour_2.style.display = 'none'
        tour_3.style.display = 'none'
        tour_4.style.display = 'none'
        tour_5.style.display = 'none'
        tour_1.style.display = 'none'
        tour_7.style.display = 'none'
        letter.style.display = 'none'
    }
    else{
        tour_6.style.display = "none"
        letter.style.display = 'block'
    }
}
btnTour_7.onclick = function() {
    if(tour_7.style.display === 'none'){
        tour_7.style.display = "block"
        tour_2.style.display = 'none'
        tour_3.style.display = 'none'
        tour_4.style.display = 'none'
        tour_5.style.display = 'none'
        tour_6.style.display = 'none'
        tour_1.style.display = 'none'
        letter.style.display = 'none'
    }
    else{
        tour_7.style.display = "none"
        letter.style.display = 'block'
    }
}

