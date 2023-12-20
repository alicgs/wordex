let btn = document.getElementById("btn");
let sidebar = document.querySelector(".sidebar");
let logo = document.querySelector(".logo");
let number = document.querySelectorAll(".input-number")
btn.onclick = function()
{
    sidebar.classList.toggle("active");
}
window.addEventListener('scroll', function() {
    if(pageYOffset >= 72)
    {
        sidebar.style.top = "0"
    }
    else
    {
        sidebar.style.top = "72px"
    }
});
  let counter = 0;
  let timer = setInterval(()=>
  {
    if(counter == 15000)
    {
      number[0].innerHTML = counter
      clearInterval(timer)
    }
    else
    {
      number[0].innerHTML = counter
      counter += 200;
    }
  },22) 
  let counter2 = 0;
  let timer2 = setInterval(()=>
  {
    if(counter2 == 43498)
    {
      number[1].innerHTML = counter2
      clearInterval(timer2)
    }
    else
    {
      number[1].innerHTML = counter2;
      counter2 += 3107;
    }
  },117);
  let counter3 = 0;
let timer3 = setInterval(()=>
  {
    if(counter3 == 87)
    {
      number[2].innerHTML = counter3 + "%"
      clearInterval(timer3)
    }
    else
    {
      number[2].innerHTML = counter3 + "%"
      counter3 += 1;
    }
  },19) 