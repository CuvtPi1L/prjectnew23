







// document.getElementById("submit").addEventListener("click",textBoxOutput()) 

// function textBoxOutput() {
//         userInputCity = document.getElementById("user_input").value;
//         // Perform validation (for example, checking if the input is not empty)
//         // if (userInputCity.trim() === "") {
//         // alert("Please enter some text.");
//         console.log(userInputCity)
//         return;
//         // }

//         // If validation passes, you can submit the form programmatically
//         // Uncomment the following line to submit the form
//         // document.getElementById("myForm").submit();
// };

// const data = JSON.stringify({
// 	url: 'https://beacon.schneidercorp.com/Application.aspx?AppID=909&LayerID=17429&PageTypeID=4&PageID=7825&Q=1935917836&KeyValue=1603238001'
// });

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('POST', 'https://http-cors-proxy.p.rapidapi.com/');
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.setRequestHeader('Origin', 'www.google.com');
// xhr.setRequestHeader('X-Requested-With', 'www.google.com');
// xhr.setRequestHeader('X-RapidAPI-Key', '628d4f7957msh347fc490a0885bbp18c16bjsna9a067fc315f');
// xhr.setRequestHeader('X-RapidAPI-Host', 'http-cors-proxy.p.rapidapi.com');

// xhr.send(data);

// function extractHTMLBlock() {
//         const url = 'https://beacon.schneidercorp.com/Application.aspx?AppID=909&LayerID=17429&PageTypeID=4&PageID=7825&Q=1935917836&KeyValue=1603238001';
//                 // Fetch the HTML content of the webpage
//                 fetch(url)
//                     .then(response => response.text())
//                     .then(html => {
//                         // Create a temporary container element to hold the parsed HTML
//                         const tempContainer = document.createElement('div');
//                         tempContainer.innerHTML = html;
        
//                         // Select the HTML block you want to extract (you can use CSS selectors)
//                         const htmlBlock = tempContainer.querySelector('.your-html-block-class');
        
//                         // Log the extracted HTML block
//                         console.log(htmlBlock.outerHTML);
//                     })
//                     .catch(error => {
//                         console.error('Error fetching data:', error);
//                     });
//             }

//     function fetchHTMLWithJSONP(url, callbackName, successCallback, errorCallback) {
//         // Create a unique callback function name to avoid conflicts
//         const callbackFuncName = 'jsonp_' + Math.random().toString(36).substring(2, 15);
      
//         // Generate a script tag with JSONP callback
//         const script = document.createElement('script');
//         script.src = url + (url.indexOf('?') === -1 ? '?' : '&') + 'callback=' + callbackFuncName;
      
//         // Define the callback function to handle the response
//         window[callbackFuncName] = function(data) {
//           successCallback(data);
//           document.body.removeChild(script); // Remove script after handling data
//           delete window[callbackFuncName]; // Clean up global function
//         };
      
//         // Handle errors (consider more robust error handling)
//         script.onerror = function(error) {
//           errorCallback(error);
//           document.body.removeChild(script);
//         };
      
//         // Append the script tag to the document body
//         document.body.appendChild(script);
//       }
      



      function parseCsvData(csvData) {
        const lines = csvData.split('\n');
        const headers = lines[0].split(',').map(header => header.trim());
        const data = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = values[j].replace(/"/g, '').trim();
            }
            data.push(obj);
        }
        return data;
    }

    function searchParcelId(data, city, address) {
        const result = data.find(item => item.CITYAREA.toUpperCase() === city.toUpperCase() && item.Address.toUpperCase() === address.toUpperCase());
        return result ? result["Parcel ID"] : "Parcel ID not found for the given city and address.";
    }

    function findParcelId() {
        const city = document.getElementById('cityInput').value.trim();
        const address = document.getElementById('addressInput').value.trim();

        if (!city || !address) {
            alert("Please enter both city and address.");
            return;
        }
        
        const csvData = `Parcel ID,Year Built,Building Area,CITYAREA,TOWNSHIPCODE,CITYTWNAREA,Occupancy,Lot Area (sf),Sale Date,Sale Price,Recording,Assessed Value,Address,Multi Parcel Sale,Vacant,Appr_Total
"1419300004","1910","1500","EARLHAM","19","ADAMS TWP","Church","43560","","","","133880","18058 BEAR CREEK RD, EARLHAM","","Y","133880"
"1424300010","1989","3132","VAN METER","19","ADAMS TWP","Church","664725.6","","","","672740","23213 347TH ST, VAN METER","","Y","672740"
"1519301008","1922","8612","DESOTO","6","DE SOTO","School - Class Room","435600","6/23/1993 12:00:00 AM","0","748-176","5386430","305 SPRUCE ST, DESOTO","","Y","5386430"
"1233112001","2023","14558","WAUKEE","16","WAUKEE","Shopping Center - Neighborhood","91416","","","","624600","750 W HICKMAN RD, WAUKEE","","N","2169540"`;


        const parsedData = parseCsvData(csvData);
        const parcelId = searchParcelId(parsedData, city, address);
        document.getElementById('result').innerText = parcelId;
        var a = document.createElement('a');  
                // Create the text node for anchor element.
                var link = document.createTextNode("link to property paper");
                 
                // Append the text node to anchor element.
                a.appendChild(link); 
                 
                // Set the title.
                a.title = "This is Link"; 
                 
                // Set the href property.
                a.href = "https://reports.camavision.com/rpdf?newcid=IA0039&pin=1519301008"; 
                 
                // Append the anchor element to the body.
                document.body.appendChild(a); 
                    return parcelIdp;
    }

    
