import * as MODEL from "./model.js";

function initListeners() {
    //nav link is clicked, event is triggered
    $("nav a").click( (e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id; //variable for id of link

        MODEL.setCurrentPageContent(btnID) //pass link id to the model function
    });
}
 
$(document).ready(function () {
    MODEL.setCurrentPageContent("home") //automatically goes to the home page on load
    initListeners();
});