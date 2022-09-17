//content variables
var homeContent = `<section class="home">
<div class="home-hero">
    <div class="hero-info">
        <p class="hero-title">WELCOME</p>
        <p class="hero-title">TO OUR WEBSITE!</p>
        <p class="hero-desc">Facilis voluptatem aliquid dolore fugit provident blanditiis eveniet tenetur. </p>
        <a href="#" id="products" class="hero-btn">See Products <i class="fa-solid fa-chevron-right fa-xl"></i></a>
    </div>
</div>
<div class="home-doublecard">
    <div class="doublecard-left">
        <p class="title1">Excellent Service</p>
        <p class="title2">Lorem ipsum dolor sit amet elit. </p>
        <p class="left-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, iste ullam nostrum inventore atque ipsum eveniet eligendi quia dolores sapiente adipisci labore! Quo error dolor quibusdam eius incidunt dicta harum.</p>
        <a href="#" id="contact" class="doublecard-btn">Contact Us <i class="fa-solid fa-chevron-right fa-xl"></i></a>
    </div>
    <div class="doublecard-right"></div>
</div>
</section>`
var aboutContent = `<section class="about">
<div class="about-top">
    <p class="about-title">ABOUT OUR WEBSITE</p>
    <p class="about-subtitle"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b></p>
    <p class="about-subtitle"><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus odio tempore hic, fuga soluta voluptatum aliquid quasi.</i></p>
    <div class="top-content">
        <div class="about-hero"></div>
        <div class="about-info">
            <p class="info-title">Lorem ipsum dolor sit amet consectetur.</p>
            <p class="info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi mollitia accusamus, hic fugit reprehenderit soluta repellat consectetur sunt. Sequi dolor sint exercitationem optio ratione neque accusantium ipsa consequuntur impedit?</p>
        </div>
    </div>
</div>
<div class="about-bottom">
    <p class="bottom-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div class="bottom-triplecards">
        <div class="triplecard">
            <p class="triplecard-title">WE ARE A WEBSITE</p>
            <p class="triplecard-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus excepturi officia commodi culpa! Voluptatem, officia modi. Aut sapiente explicabo beatae, iste labore necessitatibus aliquid numquam id!</p>
            <a href="#" class="triplecard-btn"><i class="fa-solid fa-chevron-right fa-xl"></i></a>
        </div>
        <div class="triplecard">
            <p class="triplecard-title">THAT DOES STUFF</p>
            <p class="triplecard-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus excepturi officia commodi culpa! Voluptatem, officia modi. Aut sapiente explicabo beatae, iste labore necessitatibus aliquid numquam id!</p>
            <a href="#" class="triplecard-btn"><i class="fa-solid fa-chevron-right fa-xl"></i></a>
        </div>
        <div class="triplecard">
            <p class="triplecard-title">AND OTHER STUFF</p>
            <p class="triplecard-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus excepturi officia commodi culpa! Voluptatem, officia modi. Aut sapiente explicabo beatae, iste labore necessitatibus aliquid numquam id!</p>
            <a href="#" class="triplecard-btn"><i class="fa-solid fa-chevron-right fa-xl"></i></a>
        </div>
    </div>
</div>
</section>`
var productsContent = ``
var contactContent = ``

//receive current page id from controller
function setPageContent(pageID) {
    let contentName = pageID + "Content" //appends "Content" to the end of the current page id
    $("#app").html(eval(contentName)) //puts the variable containing the page content into the page
}

export { setPageContent }