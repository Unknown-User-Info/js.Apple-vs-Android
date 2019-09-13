document.getElementById("android-btn").addEventListener("click", setAndroid);
document.getElementById("apple-btn").addEventListener("click", setApple);

function setAndroid() {
    //Change main image
    document.getElementById("main-image").src = "images/Android-Logo.jpg";
    //Change debate link words
    document.getElementById("link-words").innerHTML = "Android Home";
    //Change debate link color
    document.getElementById("link").classList.remove("debate");
    document.getElementById("link").classList.remove("apple");

    document.getElementById("link").classList.add("android");
    //Change debate link
    document.getElementById("link").href = "https://www.android.com/";
    //Change the body background color
    document.body.style.backgroundColor = "#a4c93b";
}

function setApple() {
    //Change main image
    document.getElementById("main-image").src = "images/Apple-Logo.jpg";
    //Change debate link words
    document.getElementById("link-words").innerHTML = "Apple Home";
    //Change debate link color
    document.getElementById("link").classList.remove("debate");
    document.getElementById("link").classList.remove("android");

    document.getElementById("link").classList.add("apple");
    //Change debate link
    document.getElementById("link").href = "https://www.apple.com/";
    //Change the body background color
    document.body.style.backgroundColor = "#b6bcca";
}