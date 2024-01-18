const value = document.getElementById('value');
const  plusbutton = document.getElementById('plus');
const  minusbutton = document.getElementById('minus');
const  resetbutton = document.getElementById('reset');

 const updatevalue = () =>{
    value.innerHTML = count;
 }

 let count = 0;
 let intervalid = 0;

 plusbutton.addEventListener('mousedown',() => {
    intervalid = setInterval(()=>{
        count += 1;
        updatevalue();


    },100);

 });

 minusbutton.addEventListener('mousedown',() => {
    intervalid = setInterval(()=>{
        count -= 1;
        updatevalue();


    },100);
});

 minusbutton.addEventListener('mousedown',() => {
    intervalid = setInterval(()=>{
        count += 1;
        updatevalue();


    },100);
});
  
  resetbutton.addEventListener('click',() => {
    count = 0;
    updatevalue();

  });

 document.addEventListener('mouseup',()=> clearInterval(intervalid));