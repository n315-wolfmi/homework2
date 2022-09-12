//content variables
var homeContent = ``
var aboutContent = ``
var productsContent = ``
var contactContent = ``

//receive current page id from controller
function setPageContent(pageID) {
    let contentName = pageID + "Content" //appends "Content" to the end of the current page id
    $("#app").html(eval(contentName)) //puts the variable containing the page content into the page
}

export { setPageContent }