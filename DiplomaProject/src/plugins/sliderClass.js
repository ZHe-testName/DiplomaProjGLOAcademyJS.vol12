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
        slideTranslate = false,
        controlsOn = true,
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.nextArrow = this.main.querySelector(nextArrow);
        this.prevArrow = this.main.querySelector(prevArrow);
        this.slidesToShow = slidesToShow;
        this.slideCounter = slideCounter;
        this.transDir = transDir;
        this.slideTranslate = slideTranslate;
        this.controlsOn = controlsOn;
        this.option = {
            infinity,
            position,
            slideWidth: Math.floor(100 / this.slidesToShow),

        }
        
    }

    init(){
        this.controlSlider();
    }

    zheStyles(mainClass, wrapClass, slidesClass){
        this.main.classList.add(mainClass);
        this.wrap.classList.add(wrapClass);

        for(let i = 0; i < this.slides.length; i++){
            this.slides[i].classList.add(slidesClass);
        }
    }

    incertStyle(idStr, cssStyles){
        const style = document.createElement('style');

        style.id = idStr;
        style.type = 'text/css';
        style.textContent = cssStyles;

        document.head.appendChild(style);
    };

    controlSlider(){
        this.nextArrow.addEventListener('click', this.nextSlide.bind(this));
        this.prevArrow.addEventListener('click', this.prevSlide.bind(this));
    }

    turnOffControls(){
        this.controlsOn = false;
    }

    turnOnControls(){
        this.controlsOn = true;
    }

    nextSlide(){
        if(this.controlsOn){
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
            
            if(this.slideTranslate){
                for(let i = 0; i < this.slides.length; i++){
                    this.slides[i].style.transform = `translate${this.transDir}(-${this.option.position * this.option.slideWidth}%)`;
                }
            }else{
                this.wrap.style.transform = `translate${this.transDir}(-${this.option.position * this.option.slideWidth}%)`;
            }
        }
    }

    prevSlide(){
        if(this.controlsOn){
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
            
            if(this.slideTranslate){
                for(let i = 0; i < this.slides.length; i++){
                    this.slides[i].style.transform = `translate${this.transDir}(-${this.option.position * this.option.slideWidth}%)`;
                }
            }else{
                this.wrap.style.transform = `translate${this.transDir}(-${this.option.position * this.option.slideWidth}%)`;
            }
        }
    }

};

export default Slider;

//zheStyles() вызвать сразу после инициализации для привязки стилей
//Пирмер

// .zhe-slider-wrap-style{
//     display: flex;
//     transition: transform .5s;
//     will-change: transform;
// }

// .zhe-slider-slide-style{
//     flex: 0 0 100%;
//     margin: auto 0;
//     transition: transform .5s;
//     will-change: transform;
// }
// `;