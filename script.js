function loadLogo() {

    const options = {
        headers: new Headers({
            "Cache-Control": "max-age=604800"
        })
    };

    const req = new Request("kl-logo.jpg", options);

    fetch(req)
        .then(response => response.blob())
        .then(blob => {
            const imageURL = URL.createObjectURL(blob);
            document.getElementById("logo").src = imageURL;
        })
        .catch(error => {
            console.log("Fetch failed:", error);
        });
}