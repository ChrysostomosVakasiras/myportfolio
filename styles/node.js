const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
const portfolioSubs = document.getElementsByClassName('subtitle')

//Opening up the windows
portfolioItems[0].addEventListener('click',()=>{
     portwindow[0].style.visibility='visible'
     btn[0].style.visibility='visible'
     // console.log(portwindow[0].children[0].children[0].children.)
     let vid =document.getElementsByClassName('gifcontainer-left')[0]
     vid.play()
     
})
portfolioItems[1].addEventListener('click',()=>{
     portwindow[1].style.visibility='visible'
     btn[0].style.visibility='visible'
     let vid =document.getElementsByClassName('gifcontainer-left')[1]
     vid.play()
})
portfolioItems[2].addEventListener('click',()=>{
     portwindow[2].style.visibility='visible'
     btn[0].style.visibility='visible'
     let vid =document.getElementsByClassName('gifcontainer-left')[2]
     vid.play()
})


//Selected all now to be more specific
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover',()=>{
         portfolioItem.childNodes[1].classList.add('img-darken'); 
         portfolioItem.children[1].children[1].classList.remove('subtitle')  
         portfolioItem.children[1].children[1].classList.add('subtitles') 
         portfolioItem.children[1].children[0].classList.remove('logo')
         
    })    
    portfolioItem.addEventListener('mouseout',()=>{
        portfolioItem.childNodes[1].classList.remove('img-darken');
        portfolioItem.children[1].children[1].classList.remove('subtitles')  
        portfolioItem.children[1].children[1].classList.add('subtitle') 
        portfolioItem.children[1].children[0].classList.add('logo')
   })    
});
const btn=document.querySelectorAll('.back')
const portwindow =document.querySelectorAll('.portfoliocloseup')


// Closing and reseting to homepage
btn[0].addEventListener('click',()=>{
    portwindow[0].style.visibility='hidden'
    btn[0].style.visibility='hidden'
    let vid =document.getElementsByClassName('gifcontainer-left')[0]
    vid.pause()
    
})
btn[0].addEventListener('click',()=>{
     portwindow[1].style.visibility='hidden'
     btn[0].style.visibility='hidden'
     let vid =document.getElementsByClassName('gifcontainer-left')[1]
     vid.pause()
 })
 btn[0].addEventListener('click',()=>{
     portwindow[2].style.visibility='hidden'
     btn[0].style.visibility='hidden'
     let vid =document.getElementsByClassName('gifcontainer-left')[2]
     vid.pause()
 })
