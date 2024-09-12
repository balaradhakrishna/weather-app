
    let form=document.getElementById("parent-form")
    let cityName=document.getElementById("city-name")
    let cityTemp=document.getElementById("city-temp")
    let apiKey="74913fdadd69c14fec0b99c93e697cb8"
    form.addEventListener("submit",()=>{
        event.preventDefault()
        cityTemp.innerHTML=""
        // console.log("City name is ",cityName.value)
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appId=${apiKey}&units=metric`
        fetch(url)
            .then((res)=>{
                console.log(res)
                return res.json()
            }) 
            .then((res)=>{
                console.log(res)
                if (res.code === "404"){
                    alert("City name not found")
                }
                else{

                    let {main,name,sys}=res
                    let div=document.createElement("div")
                    div.classList.add("city")
                    const result=`
                    <h1>${name}</h1>
                    <p>
                        <p class="degree">${main.temp}<sup>°</sup>C </p>
                        <p class="highlow">H: ${main.temp_max}
                        L: ${main.temp_min}</p> <br>
                        feels like: ${main.feels_like}<sup>°</sup>C <br>
                        Country: ${sys.country} 
                        
                        
                        </p>
                    `
                    div.innerHTML=result
                    cityTemp.appendChild(div)
                }
            })
    })