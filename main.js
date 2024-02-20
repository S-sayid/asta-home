/* navigation */
let navbar = document.querySelector('#nav-icon')
let menu = document.querySelector('.top-nav')
let navicon = document.querySelector('#nav-bar')
let wholeNav = document.querySelector('.navigation')

/* Response menu show hede */
navbar.addEventListener('click', function(){
	menu.classList.toggle('hide')
	if(!menu.classList.contains('hide')){
		navicon.classList.remove('fa-bars')
		navicon.classList.add('fa-xmark')
	}else{
		navicon.classList.add('fa-bars')
		navicon.classList.remove('fa-xmark')
	}
})

/* menu fixed to top if scroll */
window.addEventListener('scroll', function(){
	this.scrollY > 100 ? wholeNav.classList.add('pos-fixed') : wholeNav.classList.remove('pos-fixed')
})

/* banner slider */
/* Store the elements in variables */
let sliderParent = document.querySelector('.slider-container')
let getChildren = Array.from(sliderParent.children)
let sldNav = document.querySelector('#slider-nav-inner')
let sldNavChild = Array.from(sldNav.children)


/* Change banner slider item */
let activeInterval = true
let current = 1
let cursub = null
function change(navIndex){
	if(navIndex){
		cursub = current - 1
		if(cursub == navIndex) return
		current = navIndex
		navIndex = null
		clearInterval(autochage)
		activeInterval = false
	}
	sldNavChild.forEach(val=>{
		 val.classList.remove('active')
	})
	getChildren.forEach(val=>{
		 val.classList.remove('active')
	})
	current > (getChildren.length-1) ? current = 0 : current = current
	getChildren[current].classList.add('active')
	sldNavChild[current].classList.add('active')
	if(!activeInterval){
		autochage = setInterval(change, 7000)
		activeInterval = true
	}
	current++
}

/* slide chage according to nav click*/
sldNavChild.forEach(item=>{
	item.addEventListener('click', function(){
		const index = this.dataset.id
		change(index)
	})
})

let autochage = setInterval(change, 7000)

/* logo slider section */
let brand = document.querySelector('#brand-tran')
let brandChild = brand.children[0]

function brandNext(){
	/*let info  = brandChild[0].getBoundingClientRect().width*/

	let childWidth = window.getComputedStyle(brandChild).width
	let chlidMargin = window.getComputedStyle(brandChild).marginLeft
	let con = Number(childWidth.slice(0, childWidth.indexOf('p')))+ Number(chlidMargin.slice(0, chlidMargin.indexOf('p'))* 2)

	brand.style.transition = '1s'
	brand.style.transform = 'translateX(-'+con+'px)';
	setTimeout(()=>{
		brand.style.transition = '0s'
		brand.appendChild(brand.children[0])
		brand.style.transform = 'translateX(0)'
	},1000)
}

setInterval(brandNext, 4000)

