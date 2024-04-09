function enableCloaking() {
    const pageTitle = document.title;
    const icon = document.querySelector("link[rel~='icon']");
    icon.href = "https://raw.githubusercontent.com/cooliowebsite/cooliowebsite.github.io/main/textures/icons/classroom.webp";
    localStorage.setItem('cloakingEnabled', true);
    
    // Set the global title
    document.title = "Home";
}

// Function to disable cloaking
function disableCloaking() {
    const cloakingEnabled = localStorage.getItem('cloakingEnabled');
    if (cloakingEnabled === 'true') {
        const icon = document.querySelector("link[rel~='icon']"); // Get the favicon link element
        icon.href = "textures/icons/logo.png"; // Restore favicon
        localStorage.setItem('cloakingEnabled', false); // Save cloaking state to local storage
        document.title = "Coolio - Settings"; // Restore settings page title
        
    }
}

// Function to load cloaking state from local storage
function loadCloakingState() {
    const cloakingEnabled = localStorage.getItem('cloakingEnabled');
    if (cloakingEnabled === 'true') {
        enableCloaking();
    } else {
        disableCloaking();
    }
}

// Other functions for background handling from local storage
function setBackground(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const imageUrl = reader.result;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        localStorage.setItem('backgroundImage', imageUrl); // Save to local storage
    }
    reader.readAsDataURL(file);
}

function setPresetBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    localStorage.setItem('backgroundImage', imageUrl); // Save to local storage
}

function loadBackgroundFromLocalStorage() {
    const backgroundImage = localStorage.getItem('backgroundImage');
    if (backgroundImage) {
        document.body.style.backgroundImage = `url(${backgroundImage})`;
    }
}

function openGame(url, title, description) {
    sessionStorage.setItem('gameUrl', url);
    sessionStorage.setItem('gameTitle', title);
    window.location.href = 'gm.html';
}	
		function filterGames() {
            var input, filter, boxContainer, boxes, box, p, i, txtValue;
            input = document.getElementById("searchInput");
            filter = input.value.toUpperCase();
            boxContainer = document.getElementById("boxContainer");
            boxes = boxContainer.getElementsByClassName("box");
            for (i = 0; i < boxes.length; i++) {
                box = boxes[i];
                p = box.getElementsByTagName("p")[0];
                txtValue = p.textContent || p.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    box.style.display = "";
                } else {
                    box.style.display = "none";
                }
            }
        }
		
		function aboutBlank(url) {
        var newTab = window.open('', '_blank');
        newTab.document.write('<html><body style="margin:0;"><iframe width="100%" height="100%" src="' + url + '" frameborder="0"></iframe></body></html>');
        newTab.document.close();
    }

        function toggleFullScreen() {
            const iframe = document.getElementById('gameIframe');
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
