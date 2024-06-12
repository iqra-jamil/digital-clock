console.log("digital clock");
async function upadateClock(){
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
   try{
    const response=await fetch("https://worldtimeapi.org/api/ip");
    const data=await response.json();
    const dateTime= new Date(data.datetime);
    
    const timePart=dateTime.toLocaleTimeString();
    const datePart=dateTime.toLocaleDateString();

    
    timeElement.textContent = timePart;
    dateElement.textContent = datePart;
   }
   catch(error){
    console.error("fetching error" ,error);
    clockElement.textContent="error";
   }
}
setInterval(upadateClock ,1000);
upadateClock();