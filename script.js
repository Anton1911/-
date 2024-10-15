const startBtn = document.querySelector(".upload__images");
const gallery = document.querySelector(".gallery");
const errorMessage = document.getElementById("errorMessage");

async function getImage() {
    try {
        document.getElementById("loader").style.display = "block";
        console.log('Показан лоадер');
        const res = await fetch ("https://dog.ceo/api/breeds/image/random/50");
        console.log('Загрузка выполнена');
        if(!res.ok) {
            throw new Error("Ошибка загрузки, повторите позже");
        }
        const data = await res.json();
        console.log('Данные получены'. data);
        if(data) {
            displayImage(data.message)
        }
    }

    catch (e) {
        console.error(e.message);
        errorMessage.textContent = e.message;
        errorMessage.style.display = "block";
    }

    finally {
        document.getElementById("loader").style.display = "none";
    }
}

function displayImage(urls) {
    gallery.innerHTML = "";
    urls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        gallery.appendChild(img);
    });
}

startBtn.addEventListener("click", getImage);


