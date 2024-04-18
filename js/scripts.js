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
    let backgroundImage = localStorage.getItem('backgroundImage');
    if (!backgroundImage) {
        backgroundImage = 'textures/backgrounds/default.jpg';
    }
    document.body.style.backgroundImage = `url(${backgroundImage})`;
}

function openGame(event, url, title) {
    const imgSrc = event.currentTarget.querySelector('img').src;
    sessionStorage.setItem('gameImg', imgSrc);
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
	
        function goBack() {
            window.history.back();
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
		
		
