class Slider{
    constructor({
        main,
        wrap, 
        position = 0,
        nextArrow,
        prevArrow,
        slidesToShow = 1,
        infinity = false,
        slideCounter,
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.nextArrow = this.main.querySelector(nextArrow);
        this.prevArrow = this.main.querySelector(prevArrow);
        this.slidesToShow = slidesToShow;
        this.slideCounter = slideCounter;
        this.option = {
            infinity,
            position,
            slideWidth: Math.floor(100 / this.slidesToShow),

        }
        
    }

    init(){
        this.zheStyles();
        this.incertStyle();
        this.controlSlider();
    }

    zheStyles(){
        this.main.classList.add('zhe-slider-style');
        this.wrap.classList.add('zhe-slider-wrap-style');

        for(let slide of this.slides){
            slide.classList.add('zhe-slider-slide-style')
        }
    }

    incertStyle(){
        const style = document.createElement('style');

        style.id = 'repairSlideOne';
        style.type = 'text/css';
        style.textContent = `
            .zhe-slider-wrap-style{
                display: flex;
                transition: transform .5s;
                will-change: transform;
            }

            .zhe-slider-slide-style{
                flex: 0 0 ${this.option.slideWidth}%;
                margin: auto 0;
            }
        `;

        document.head.appendChild(style);
    }

    controlSlider(){
        this.nextArrow.addEventListener('click', this.nextSlide.bind(this));
        this.prevArrow.addEventListener('click', this.prevSlide.bind(this));
    }

    nextSlide(){
        if(this.option.infinity){
            if(this.option.position <= this.slides.length - this.slidesToShow){
                ++this.option.position;
            }

            if(this.option.position > this.slides.length - this.slidesToShow){
                this.option.position = 0;
            }
        }else{
            if(this.option.position < this.slides.length - this.slidesToShow){
                ++this.option.position;
            }
        }
       
        this.wrap.style.transform = `translateX(-${this.option.position * this.option.slideWidth}%)`;
    }

    prevSlide(){
        if(this.option.infinity){
            if(this.option.position >= 0){
                --this.option.position;
            }
    
            if(this.option.position < 0 && this.option.infinity){
                this.option.position = this.slides.length - this.slidesToShow ;
            }
        }else{
            if(this.option.position > 0){
                --this.option.position;
            }
        }
        

        this.wrap.style.transform = `translateX(-${this.option.position * this.option.slideWidth}%)`;
    }
};

export default Slider;