const div = document.querySelector(".grid-container")
const wrapper = document.createElement('div')
div.appendChild(wrapper)
wrapper.classList.add('wrapper')



       
const user = prompt(" Choose  a number")
const gridItem = document.createElement('div');



wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
const width1 = 666;
const width2 = user
const finalwidth = `${width1 / width2}%`
// wrapper.style.width = finalwidth
  
       
     function   creategriditems(user){
       
    for (let i = 0; i < user; i++) {
    const gridItem = document.createElement('div');
gridItem.classList.add('grid-item');
    gridItem.style.backgroundColor = "white"; 
    // gridItem.style.width = finalwidth;
        gridItem.addEventListener("mousemove",()=>{
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            gridItem.style.backgroundColor = randomColor;
        
        
        })
        
        wrapper.appendChild(gridItem);

}
}
creategriditems(user)



