import '../benner/Benner.css';

const Benner = ()=> {
    return(
        // carousel container
        <div class="carousel-container">
        {/* carousel inner  */}
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src="images/benner1.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="images/benner2.jpg" alt=""></img>
          </div>
          <div class="carousel-item">
            <img src="images/benner3.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="images/benner4.jpg" alt=""></img>
        </div>
        <div class="carousel-item">
            <img src="images/benner5.jpg" alt=""></img>
        </div>
        <div class="carousel-item">
            <img src="images/benner6.jpg" alt=""></img>
        </div>
        </div>
        <div class="button-p-n">
            <button class="carousel-control-prev hover" type="button" id="prev">
                &#10094;
            </button>
            <button class="carousel-control-next hover" type="button" id="next">
                &#10095;
            </button>
        </div>
      </div>
    )
}

export default Benner;