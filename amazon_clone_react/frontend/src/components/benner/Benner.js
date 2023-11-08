import '../benner/Benner.css';

const Benner = ()=> {
    return(
        // container
    <div class="container">
        {/* benner section */}
        <div class="benner">
            <div class="benner_image">
                <img src="http://127.0.0.1:5500/Amazon_clone/images/benner1.jpg" alt=""></img>
            </div>
            <div class="button">
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
            </div>
        </div>
    </div>
    )
}

export default Benner;