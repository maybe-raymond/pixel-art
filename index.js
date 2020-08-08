let con = document.querySelector("#con");
let r = document.querySelector("#reset");
let b = true
let option = true
let type


function Zero(){
	p.forEach( (c) => {
		c.style.background="white";}
  )
  num = prompt("How many rows do ypou want");
  if (!isNaN( Number(num))) {
    p.forEach( (c) =>{
      con.removeChild(c)
    } )
    create_div(Number(num))
  }
  p = document.querySelectorAll(".pixel")
}


function Rainbow(){
  return b = false
}


function black(){
  return b = true
}


function rubber(){
  return b = "r"
}

function create_div(a){
  let total = a*a;
  let wi = String(900/a);
  let hei = String(600/a)
	for (let i=1; i <= total; i++){
		let div = document.createElement("div");
		div.classList.add("pixel");
    div.style.width=`${wi}px`;
    div.style.height=`${hei}px`
		con.appendChild(div);
	}
}

function Click() {
	let p = document.querySelectorAll(".pixel")
	p.forEach( (c) => {
		c.addEventListener("click", () =>{
			if (b === true){
        c.style.background="black";
      }
      else if (b ==="r"){
          c.style.background="White";
      }
      else{
        let n1 =String(Math.floor(Math.random(249)*249))
        let n2 =String(Math.floor(Math.random(249)*249))
        let n3 =String(Math.floor(Math.random(249)*249))
        c.style.background= `RGB(${n1}, ${n2}, ${n3})`
}} )
	p.forEach((c) =>{
		c.removeEventListener("mousemove", () =>{
			if (b === true){
				c.style.background="black";
				console.log("removed")
			}
			else if (b ==="r"){
					c.style.background="White";
			}
			else{
				let n1 =String(Math.floor(Math.random(249)*249))
				let n2 =String(Math.floor(Math.random(249)*249))
				let n3 =String(Math.floor(Math.random(249)*249))
				c.style.background= `RGB(${n1}, ${n2}, ${n3})`}
		})
	});
} )}


function Scroll(){
	let p = document.querySelectorAll(".pixel")
	p.forEach( (c) => {
		c.addEventListener("mousemove", () =>{
			if (b === true){
        c.style.background="black";
      }
      else if (b ==="r"){
          c.style.background="White";
      }
      else{
        let n1 =String(Math.floor(Math.random(249)*249))
        let n2 =String(Math.floor(Math.random(249)*249))
        let n3 =String(Math.floor(Math.random(249)*249))
        c.style.background= `RGB(${n1}, ${n2}, ${n3})`}
			})
	p.forEach((c) =>{
		c.removeEventListener("click", () =>{
		if (b === true){
			c.style.background="black";
		}
		else if (b ==="r"){
				c.style.background="White";
		}
		else{
			let n1 =String(Math.floor(Math.random(249)*249))
			let n2 =String(Math.floor(Math.random(249)*249))
			let n3 =String(Math.floor(Math.random(249)*249))
			c.style.background= `RGB(${n1}, ${n2}, ${n3})`}
	})} )
})}

function main(){
  let init = create_div(30);
  init
}

let p = document.querySelectorAll(".pixel")
main()
