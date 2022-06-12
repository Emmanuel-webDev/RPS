function displayedImg(){
    let myPix = ["1603193.jpg","6Tpo9BaRc (3).png", "imgbin_post-it-note-paper-png.png"];
    let randomImg = Math.floor(Math.random()*myPix.length);
    document.getElementById('first').src= myPix[randomImg]
}

function displayedImgtwo(){
    let myPix = ["1603193.jpg","6Tpo9BaRc (3).png", "imgbin_post-it-note-paper-png.png"];
    let randomImgtwo = Math.floor(Math.random()*myPix.length);
    document.getElementById('second').src= myPix[randomImgtwo]
}
