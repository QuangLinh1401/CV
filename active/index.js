const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const first = $$(".tab-item");
const second = $$(".tab-pane");

first.forEach((element, index) => {
  const pane = second[index];
  element.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// --------------------music----------

const icon = $('#song-icon')
const music = $('#mySong')

icon.onclick = function (){
    if(music.paused){
        music.play()
        icon.src = '../picture/pause.png'
    } else {
        music.pause()
        icon.src = '../picture/play.png'
    }
}

