
const apikey="129064343545b4f9182ad3e133dc6c6a";

const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const icon1=document.querySelector(".icon");

async function Findweather(city){
  
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity p").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind p").innerHTML=data.wind.speed +"km/h";
  
    if(data.weather[0].main == "Clouds"){
        icon1.src="clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon1.src="rain.png";
    }

    else if(data.weather[0].main == "Drizzle"){
        icon1.src="drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        icon1.src="mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        icon1.src="snow.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon1.src="clear.png";
    }

}

searchbtn.addEventListener("click",()=>{
    Findweather(searchBox.value);
})