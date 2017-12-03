var url = window.location.href
var items = document.querySelectorAll('.menu-item-link')
items.forEach(function(item){
    if(item.href == url) {item.style.color = '#c30'}else{
        item.style.color = '#333'
    }
})

// setTimeout(function(){
//     var login = document.querySelector('.gitment-editor-login-link')
    
//     document.querySelector('.gitment-editor-login').innerHTML = login.outerHTML
    
// },2000)