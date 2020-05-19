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
        transDir = 'X',
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.nextArrow = this.main.querySelector(nextArrow);
        this.prevArrow = this.main.querySelector(prevArrow);
        this.slidesToShow = slidesToShow;
        this.slideCounter = slideCounter;
        this.transDir = transDir;
        this.option = {
            infinity,
            position,
            slideWidth: Math.floor(100 / this.slidesToShow),

        }
        
    }

    init(){
        this.zheStyles();
        this.controlSlider();
    }

    zheStyles(){
        this.main.classList.add('zhe-slider-style');
        this.wrap.classList.add('zhe-slider-wrap-style');

        for(let i = 0; i < this.slides.length; i++){
            this.slides[i].classList.add('zhe-slider-slide-style');
        }
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
       
        this.wrap.style.transform = `translate${this.transDir}(-${this.option.position * this.option.slideWidth}%)`;
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
        

        this.wrap.style.transform = `translate${this.transDir}(-${this.option.position * this.option.slideWidth}%)`;
    }

};

export default Slider;