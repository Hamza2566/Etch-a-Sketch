const div = document.querySelector(".grid-container")
const wrapper = document.createElement('div')
div.appendChild(wrapper)
wrapper.classList.add('wrapper')
const h2 =document.createElement('h2')

h2.textContent= "Project: Etch-a-Sketch"
h2.style.color = "black"
h2.classList.add('project')

div.appendChild(h2)



       
const user = prompt(" Choose  a number")
const gridItem = document.createElement('div');



wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
const width1 = 666;
const width2 = user
const finalwidth = `${width1 / width2}%`
  
       
     function   creategriditems(user){
       
    for (let i = 0; i < user; i++) {
    const gridItem = document.createElement('div');
    gridItem.style.width = finalwidth
gridItem.classList.add('grid-item');
    gridItem.style.backgroundColor = "white"; 
        gridItem.addEventListener("mousemove",()=>{
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            gridItem.style.backgroundColor = randomColor;




        
        })
        
        wrapper.appendChild(gridItem);

        

}
}





        


creategriditems(user)


const reset = document.createElement('button')
reset.classList.add('reset')
reset.textContent = "Reset"
reset.addEventListener("click", () => {
  div.innerHTML  = "  "
  window.location.reload();
//   const user = prompt(" Choose  a number")
})


div.appendChild(reset)

