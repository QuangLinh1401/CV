function openTab(evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("content__inner");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}

//Horizontal scroll for the tabs on mousewheel. If tabs are longer than the content section, there's a scroll bar but it's hidden to retain the design.
if (window.innerWidth > 800) {
	const scrollContainer = document.querySelector(".tabs");

	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});
}





// ----------------------career-quotes
Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };

    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)` };

    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})` };

    } },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    } } });



const app = new Vue({
  el: '#app' });

// ----------------Slider 
const slider_quote = document.querySelector('#slide-end > img')
var index = 1
eventSlider = function() {
    var imgs = [
        '../picture/quote/image1.jpeg',
        '../picture/quote/image2.jpeg',
        '../picture/quote/image3.jpeg',
        '../picture/quote/image4.jpeg',
        '../picture/quote/image5.jpeg',
        '../picture/quote/image6.jpeg',
        '../picture/quote/image7.jpeg',
        '../picture/quote/image8.jpeg',
        '../picture/quote/image9.jpeg'
    ]
    if(index === 9){
        index = 0
    }
    else{
        slider_quote.src = imgs[index]
        index++
    }
    console.log(index)
}

setInterval(eventSlider,3000)