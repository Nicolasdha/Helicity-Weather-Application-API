
// Load local weather information upon window load
window.addEventListener('load', ()=> {


    let long;
    let lat;
    let marker = false;
    const temperatureDegreeDigits = document.querySelector('.temperature__degree--digits')
    const locationTimezone = document.querySelector('.location__timezone')
    const locationDate = document.querySelector('.location__date')
    const precipProbability__card = document.querySelector('#precipProbability__card')
    const humidity__card = document.querySelector('#humidity__card')
    const windSpeed__card = document.querySelector('#windSpeed__card')
    const cloudCover__card = document.querySelector('#cloudCover__card')
    const high__low__card = document.querySelector('#high__low__card')
    const weekly_1_card = document.querySelector("#weekly1")
    const weekly_2_card = document.querySelector("#weekly2")
    const weekly_3_card = document.querySelector("#weekly3")
    const weekly_4_card = document.querySelector("#weekly4")
    const weekly_5_card = document.querySelector("#weekly5")
    const weekly_6_card = document.querySelector("#weekly6")
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   

    if(navigator.geolocation){

        // Get current position for API
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // Heroku hosted proxy to make as many proxy requests as needed without getting locked out
            const proxy = 'https://fierce-stream-08080.herokuapp.com/';
            const api =`${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
          
            fetch(api)
            .then(response => response.json())
            
            .then(data => {

                // Current conditions of Day0
                let {temperature, summary, icon, precipProbability, humidity, windSpeed, cloudCover, windGust, time} = data.currently; 
                let precipSummary = data.daily.summary 
                let currentHigh = data.daily.data[0].temperatureHigh
                let currentLow = data.daily.data[0].temperatureLow

               
                // Set DOM Elements from the API
                temperatureDegreeDigits.innerHTML =`<span class="click">Current Temperature: ${Math.floor(temperature)}°F ${summary}</span>`

                precipProbability__card.innerHTML = `Precipitation Probability: ${precipProbability}% <br>${precipSummary}`

                humidity__card.textContent = `Humidity: ${Math.floor(humidity*100)}%`;

                windSpeed__card.innerHTML = `Wind Speed: ${windSpeed} mph <br> Wind Gust: ${windGust}  mph`;

                cloudCover__card.textContent = `Cloud cover: ${Math.floor(cloudCover*100)}%`;

                high__low__card.innerHTML = `Today's high: ${currentHigh}°F<br> Today's low: ${currentLow}°F`;

                // Regex to take America out of the location's name
                let timeZone= data.timezone.replace(/(America\/)/, " ");


                let epoch = data.daily.data[0].time;
                let date = new Date(epoch * 1000);
                let currentDateDay = date.getDay()
                let currentDateMonth = date.getMonth()
                let currentDateDate = date.getDate()
                let currentDateYear = date.getFullYear()
            

                // Set DOM with current location and date of Day0
                locationTimezone.textContent = timeZone
                locationDate.textContent = `${dayArray[currentDateDay]},  ${monthArray[currentDateMonth]}   ${dateSuffix(currentDateDate)}  ${currentDateYear}`


                // To set DOM elements of Day1 in weekly line-up
                const temperatureHighDay1 = data.daily.data[1].temperatureHigh
                const temperatureLowDay1 = data.daily.data[1].temperatureLow
                const summaryDay1 = data.daily.data[1].summary
                const iconDay1 = data.daily.data[1].icon
                const precipProbabilityDay1 = data.daily.data[1].precipProbability*100
                const windSpeedDay1 = data.daily.data[1].windSpeed
                const cloudCoverDay1 = data.daily.data[1].cloudCover*100
                const windGustDay1 = data.daily.data[1].windGust
                const timeDay1 = data.daily.data[1].time

                epoch = timeDay1;
                date = new Date(epoch * 1000);
                currentDateDay = date.getDay()
                currentDateMonth = date.getMonth()
                currentDateDate = date.getDate()
                currentDateYear = date.getFullYear()

                weekly_1_card.innerHTML = 
                `<p>
                    <span>
                        ${dayArray[currentDateDay]}, ${monthArray[currentDateMonth]} ${dateSuffix(currentDateDate)} ${currentDateYear}
                    </span>
                        <br><br>
                    High: ${temperatureHighDay1}°F<br>Low: ${temperatureLowDay1}°F
                        <br><br>
                    ${summaryDay1}
                        <br><br>
                    Precipitation Probability: ${Math.floor(precipProbabilityDay1)}%
                        <br><br>
                    Cloud Cover: ${Math.floor(cloudCoverDay1)}%
                        <br><br>
                    Wind Speed: ${windSpeedDay1} mph<br>Wind Gust: ${windGustDay1} mph
                </p>`


                // To set DOM elements of Day2 in weekly line-up
                const temperatureHighDay2 = data.daily.data[2].temperatureHigh
                const temperatureLowDay2 = data.daily.data[2].temperatureLow
                const summaryDay2 = data.daily.data[2].summary
                const iconDay2 = data.daily.data[2].icon
                const precipProbabilityDay2 = data.daily.data[2].precipProbability*100
                const windSpeedDay2 = data.daily.data[2].windSpeed
                const cloudCoverDay2 = data.daily.data[2].cloudCover*100
                const windGustDay2 = data.daily.data[2].windGust
                const timeDay2 = data.daily.data[2].time

                epoch = timeDay2;
                date = new Date(epoch * 1000);
                currentDateDay = date.getDay()
                currentDateMonth = date.getMonth()
                currentDateDate = date.getDate()
                currentDateYear = date.getFullYear()
              
                weekly_2_card.innerHTML = 
                `<p>
                    <span>
                        ${dayArray[currentDateDay]}, ${monthArray[currentDateMonth]} ${dateSuffix(currentDateDate)} ${currentDateYear}
                    </span>
                        <br><br>
                    High: ${temperatureHighDay2}°F<br>Low: ${temperatureLowDay2}°F
                        <br><br>
                    ${summaryDay2}
                        <br><br>
                    Precipitation Probability: ${Math.floor(precipProbabilityDay2)}%
                        <br><br>
                    Cloud Cover: ${Math.floor(cloudCoverDay2)}%
                        <br><br>
                    Wind Speed: ${windSpeedDay2} mph<br>Wind Gust: ${windGustDay2} mph
                </p>`


                // To set DOM elements of Day3 in weekly line-up
                const temperatureHighDay3 = data.daily.data[3].temperatureHigh
                const temperatureLowDay3 = data.daily.data[3].temperatureLow
                const summaryDay3 = data.daily.data[3].summary
                const iconDay3 = data.daily.data[3].icon
                const precipProbabilityDay3 = data.daily.data[3].precipProbability*100
                const windSpeedDay3 = data.daily.data[3].windSpeed
                const cloudCoverDay3 = data.daily.data[3].cloudCover*100
                const windGustDay3 = data.daily.data[3].windGust
                const timeDay3 = data.daily.data[3].time

                epoch = timeDay3;
                date = new Date(epoch * 1000);
                currentDateDay = date.getDay()
                currentDateMonth = date.getMonth()
                currentDateDate = date.getDate()
                currentDateYear = date.getFullYear()
              
                weekly_3_card.innerHTML = 
                `<p>
                    <span>
                        ${dayArray[currentDateDay]}, ${monthArray[currentDateMonth]} ${dateSuffix(currentDateDate)} ${currentDateYear}
                    </span>
                        <br><br>
                    High: ${temperatureHighDay3}°F<br>Low: ${temperatureLowDay3}°F
                        <br><br>
                    ${summaryDay3}
                        <br><br>
                    Precipitation Probability: ${Math.floor(precipProbabilityDay3)}%
                        <br><br>
                    Cloud Cover: ${Math.floor(cloudCoverDay3)}%
                        <br><br>
                    Wind Speed: ${windSpeedDay3}<br>Wind Gust: ${windGustDay3} mph
                </p>`

                // To set DOM elements of Day4 in weekly line-up
                const temperatureHighDay4 = data.daily.data[4].temperatureHigh
                const temperatureLowDay4 = data.daily.data[4].temperatureLow
                const summaryDay4 = data.daily.data[4].summary
                const iconDay4 = data.daily.data[4].icon
                const precipProbabilityDay4 = data.daily.data[4].precipProbability*100
                const windSpeedDay4 = data.daily.data[4].windSpeed
                const cloudCoverDay4 = data.daily.data[4].cloudCover*100
                const windGustDay4 = data.daily.data[4].windGust
                const timeDay4 = data.daily.data[4].time

                epoch = timeDay4;
                date = new Date(epoch * 1000);
                currentDateDay = date.getDay()
                currentDateMonth = date.getMonth()
                currentDateDate = date.getDate()
                currentDateYear = date.getFullYear()

                weekly_4_card.innerHTML = 
                `<p>
                    <span>
                    ${dayArray[currentDateDay]}, ${monthArray[currentDateMonth]} ${dateSuffix(currentDateDate)} ${currentDateYear}
                    </span>
                        <br><br>
                    High: ${temperatureHighDay4}°F<br>Low: ${temperatureLowDay4}°F
                        <br><br>
                    ${summaryDay4}
                        <br><br>
                    Precipitation Probability: ${Math.floor(precipProbabilityDay4)}%
                        <br><br>
                    Cloud Cover: ${Math.floor(cloudCoverDay4)}%
                        <br><br>
                    Wind Speed: ${windSpeedDay4} mph<br>Wind Gust: ${windGustDay4} mph
                </p>`

                // To set DOM elements of Day5 in weekly line-up
                const temperatureHighDay5 = data.daily.data[5].temperatureHigh
                const temperatureLowDay5 = data.daily.data[5].temperatureLow
                const summaryDay5 = data.daily.data[5].summary
                const iconDay5 = data.daily.data[5].icon
                const precipProbabilityDay5 = data.daily.data[5].precipProbability*100
                const windSpeedDay5 = data.daily.data[5].windSpeed
                const cloudCoverDay5 = data.daily.data[5].cloudCover*100
                const windGustDay5 = data.daily.data[5].windGust
                const timeDay5 = data.daily.data[5].time

                epoch = timeDay5;
                date = new Date(epoch * 1000);
                currentDateDay = date.getDay()
                currentDateMonth = date.getMonth()
                currentDateDate = date.getDate()
                currentDateYear = date.getFullYear()
              
                weekly_5_card.innerHTML = 
                `<p>
                    <span>
                        ${dayArray[currentDateDay]}, ${monthArray[currentDateMonth]} ${dateSuffix(currentDateDate)} ${currentDateYear}
                    </span>
                        <br><br>
                    High: ${temperatureHighDay5}°F
                        <br>
                    Low: ${temperatureLowDay5}°F
                        <br><br>
                    ${summaryDay5}
                        <br><br>
                    Precipitation Probability: ${Math.floor(precipProbabilityDay5)}%
                        <br><br>
                    Cloud Cover: ${Math.floor(cloudCoverDay5)}%
                        <br><br>
                    Wind Speed: ${windSpeedDay5} mph<br> Wind Gust: ${windGustDay5} mph
                </p>`

                // To set DOM elements of Day6 in weekly line-up
                const temperatureHighDay6 = data.daily.data[6].temperatureHigh
                const temperatureLowDay6 = data.daily.data[6].temperatureLow
                const summaryDay6 = data.daily.data[6].summary
                const iconDay6 = data.daily.data[6].icon
                const precipProbabilityDay6 = data.daily.data[6].precipProbability*100
                const windSpeedDay6 = data.daily.data[6].windSpeed
                const cloudCoverDay6 = data.daily.data[6].cloudCover*100
                const windGustDay6 = data.daily.data[6].windGust
                const timeDay6 = data.daily.data[6].time

                epoch = timeDay6;
                date = new Date(epoch * 1000);
                currentDateDay = date.getDay()
                currentDateMonth = date.getMonth()
                currentDateDate = date.getDate()
                currentDateYear = date.getFullYear()
              
                weekly_6_card.innerHTML = 
                `<p>
                    <span>
                        ${dayArray[currentDateDay]}, ${monthArray[currentDateMonth]} ${dateSuffix(currentDateDate)} ${currentDateYear}
                    </span>
                        <br><br>
                    High: ${temperatureHighDay6}°F<br>Low: ${temperatureLowDay6}°F
                        <br><br>
                    ${summaryDay6}
                        <br><br>
                    Precipitation Probability: ${Math.floor(precipProbabilityDay6)}%
                        <br><br>
                    Cloud Cover: ${Math.floor(cloudCoverDay6)}%
                        <br><br>
                    Wind Speed: ${windSpeedDay6} mph<br>Wind Gust: ${windGustDay6} mph
                </p>`

                // Set Skycon for each container
                const skycon = new Skycons({"color": 'rgb(13, 0, 189)'});
                skycon.add("currentIcon", Skycons[icon.replace(/-/g,"_").toUpperCase()]);
                skycon.play()
                const skyconWhite = new Skycons({"color": "white"});
                skyconWhite.add("precip", Skycons.RAIN);
                skyconWhite.add("wind", Skycons.WIND);
                skyconWhite.add("humid", Skycons.FOG);
                skyconWhite.add("cloudy", Skycons.CLOUDY);
                skyconWhite.add("highLow", Skycons.CLEAR_DAY);
                skyconWhite.set("weekly1Canvas",  Skycons[iconDay1.replace(/-/g,"_").toUpperCase()]);
                skyconWhite.set("weekly2Canvas",  Skycons[iconDay2.replace(/-/g,"_").toUpperCase()]);
                skyconWhite.set("weekly3Canvas",  Skycons[iconDay3.replace(/-/g,"_").toUpperCase()]);
                skyconWhite.set("weekly4Canvas",  Skycons[iconDay4.replace(/-/g,"_").toUpperCase()]);
                skyconWhite.set("weekly5Canvas",  Skycons[iconDay5.replace(/-/g,"_").toUpperCase()]);
                skyconWhite.set("weekly6Canvas",  Skycons[iconDay6.replace(/-/g,"_").toUpperCase()]);
                skyconWhite.play();

                // Event listener for clicking on current temperature to change to °F/°C
                temperatureDegreeDigits.addEventListener('click', toCelsius);

                // Function to change current temperature to °F/°C
                function toCelsius() {
                    if (marker === true) {
                        temperature = Math.floor((temperature * 9/5) + 32);
                        temperatureDegreeDigits.textContent =  'Current temperature: ' + temperature + '°F  ' + summary
                        marker = false;
                    } else if (marker === false) {
                        temperature = Math.floor((temperature - 32) * (5/9));
                        temperatureDegreeDigits.textContent = 'Current temperature: ' + temperature + '°C  ' + summary
                        marker = true;
                    }
                }
            });
        });
    } 
});


// Function to format the suffix for each date
function dateSuffix(date){
    if(date == 1 || date == 21 || date == 31){
        date = date +"st"
    }else if(date ==2 ||date == 22 ){
        date = date+"nd"
    }else if(date ==3 || date ==  23){
    date = date +"rd"
    }else {
        date = date +"th"
    }
    return date
}