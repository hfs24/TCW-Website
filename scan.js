// Select the HTML element with the tag 'section'
const section = document.querySelector('section');

// Set the file URL for the fetch request to fetch data from
let requestURL = 'scannetwork.txt';

// Use setTimeout to delay the fetch request
setTimeout(function() {
  fetch(requestURL)
    .then(response => {
      if (!response.ok) {
        // If the file does not exist or there is another error, handle it here
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // If the file exists, parse the data and call 'func' function with the parsed data
      const dat = JSON.parse(data);
      func(dat);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      // Handle the error, such as displaying a message to the user
    });
}, 10000);

// Function to display an image in the section
function display_image(src, width, height) {
  var a = document.createElement("img");
  a.src = src;
  a.width = width;
  a.height = height;
  section.appendChild(a);
}

// Function to process and display data
function func(obj) {
  
  const list = obj;

  // Loop through the list of data
  for (let i = 0; i < list.length; i++) {
    // Set images based on RSSI values
    if (list[i].rssi <= -90) {
      list[i].rssi = display_image('w3.webp', 40, 35);
    } else if (list[i].rssi <= -70) {
      list[i].rssi = display_image('w2.webp', 40, 35);
    } else if (list[i].rssi < -55) {
      list[i].rssi = display_image('w1.webp', 40, 35);
    } else {
      list[i].rssi = display_image('w0.webp', 40, 35);
    }

    // Create elements for displaying SSID, RSSI, and a radio button
    const ssidpara = document.createElement('s');
    const rssipara = document.createElement('p');
    const checkbox = document.createElement('input');
    //checkbox.type = 'radio';
    checkbox.type = 'button';
    checkbox.name = 'radiobutton';
    checkbox.value = 'connect';
    checkbox.id ='che';
    checkbox.setAttribute("class", "democlasss2");
    //checkbox.setAttribute("class", "democlass");


    // Set text content for SSID and RSSI
    rssipara.textContent = ' ';
    ssidpara.textContent = list[i].ssid;

    // Set the onclick event for the radio button to call 'popupForm3' function
    checkbox.onclick = function() { popupForm3(i); };

    // Append SSID, radio button, and RSSI elements to the 'section'
    section.appendChild(ssidpara); 
    section.appendChild(checkbox);
    section.appendChild(rssipara);

  

         
  }
  section.setAttribute('data-list', JSON.stringify(list));



}


function popupForm3(index) {
  

    const section = document.querySelector('section');
    if (!section) {
        alert("Error: Section with network data not found.");
        return; // Stop execution if the section is not found
    }

    const dataListAttribute = section.getAttribute('data-list');
    if (!dataListAttribute) {
        alert("Error: No network data available.");
        return; // Stop execution if the attribute is empty or not set
    }

    let list;
    try {
        list = JSON.parse(dataListAttribute);
    } catch (error) {
        alert("Error: Failed to load network data.");
        return; // Stop execution if parsing fails
    }

    // Check if 'list' is an array and 'index' is within bounds
    if (!Array.isArray(list) || index < 0 || index >= list.length) {
        alert("Error: Selected network is out of bounds.");
        return; // Stop execution if list is not an array or index is out of bounds
    }

    const selectedNetwork = list[index];

    document.getElementById("spin90").style.display = "block";

    fetch('wifistatus.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("spin90").style.display = "none"; // Hide spinner

            // Check if the SSID is already connected
            if (selectedNetwork.ssid === data.trim()) {
                alert(`Already connected to ${selectedNetwork.ssid}.`);
            } else {
                document.getElementById("popupForm3").style.display = "block";
                document.getElementById('txt').innerHTML = selectedNetwork.ssid;
                document.getElementById('input1_wifista2').value = selectedNetwork.ssid;
            }
        }).catch(error => {
            document.getElementById("spin90").style.display = "none"; // Ensure spinner is hidden on error
            alert("Error: Failed to check network status.");
        });

    document.getElementById('send').onclick = function(event) {
        event.preventDefault(); // Prevent default form submission

        var form = document.getElementById("my_form");
        alert('Changes will be applied after REBOOT.');

        form.submit();
        setTimeout(function() {
            window.location.reload();
        }, 300); // Adjust delay as needed
    };

    
}

// Function to close the popup form
function closeForm() {
  document.getElementById("popupForm3").style.display = "none";
}

// Function to close another form
function closeForm2() {
  document.getElementById("sec").style.display = "none";
}

// Function to show/hide password
function showpass() {
  var pasElements = document.getElementsByClassName("input2_passwordsta");
  var eyeIcon = document.getElementsByClassName("ur")[0]; // Assuming there's only one eye icon

  for (let i = 0; i < pasElements.length; i++) {
    var pas = pasElements[i];
    pas.type = pas.type === "password" ? "text" : "password";
  }

  // Toggle eye icon
  eyeIcon.src = eyeIcon.src.includes("ey.png") ? "noeye.png" : "ey.png";
}

