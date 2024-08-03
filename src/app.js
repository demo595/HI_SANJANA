
function initializeImageDisplay() 
{
    
    const btns = document.getElementsByClassName("btns");
    const images = document.getElementsByClassName("images");

   
    btns[0].style.borderBottom = "2px solid red";
    images[0].style.display = "block";

    for (let i = 0; i < btns.length; i++) 
    {
        btns[i].addEventListener("click", function() 
        {
            
            for (let j = 0; j < images.length; j++) 
            {
                images[j].style.display = "none";
                btns[j].style.borderBottom = "3px solid rgb(179, 212, 226)";
                btns[j].style.color = "black";
            }
            
            
            images[i].style.display = "block";
            btns[i].style.borderBottom = "2px solid red";
            btns[i].style.color = 'rgb(85, 43, 43)';
            

            if (btns[i] === btns[5]) 
            {
                audio.style.display = "block";
                audio.play();
            } 
            else 
            {
                
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }
}


initializeImageDisplay();

