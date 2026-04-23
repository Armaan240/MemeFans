const meme =[
    "https://media1.tenor.com/m/lUahHT79aBcAAAAd/i-am-back-estoy-de-vuelta.gif",
    "https://media1.tenor.com/m/GQ1IqDGPMCAAAAAC/spongebob-squarepants-patrick-star.gif",
    "https://media1.tenor.com/m/0IY2yYb6MaIAAAAd/spongebob-spongebob-meme.gif",
    "https://media.tenor.com/2roX3uxz_68AAAAC/cat-meme.gif",
    "https://media.tenor.com/x8v1oNUOmg4AAAAC/rizz.gif",
    "https://media1.tenor.com/m/22sY651arsgAAAAC/hiromi-higuruma-higuruma-jjk.gif"
];

const btn = document.getElementById("ducky");

let isDownloadinging = false; 

btn.onclick = async () => {
    if (isDownloadinging) return;
    isDownloadinging = true;
 btn.textContent ="Ducking..."
 btn.disabled = true;

try {
    const url = meme[Math.floor(Math.random() * meme.length)];
    const res = await fetch(url);
    const blob = await res.blob();
const a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "meme.gif";
document.body.appendChild(a);
a.click();

URL.revokeObjectURL(a.href);
} catch (e){ console.log("Ducky is lazy af :P");
}
finally{

    btn.disabled = false;
    isDownloadinging = false;
    btn.textContent = "Duck ME";

}
   
}

