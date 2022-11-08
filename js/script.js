const nodeList = document.querySelectorAll("p, h1, h2, h3, li, ul, ol, img");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].setAttribute('draggable', 'false')
}

const weaponImage = document.querySelectorAll('.weapon-image, .monster-image');
for (let i = 0; i < weaponImage.length; i++) {
  weaponImage[i].setAttribute('id', 'image1')
  weaponImage[i].setAttribute('onclick', 'showThumbnail(this.id)')
}

var mq = window.matchMedia("(max-width: 800px)");

async function showThumbnail(clicked_id) {
  if (mq.matches) {
    console.log('error')
  } else {
    document.getElementById("overlay").style.display = "inherit";
    document.getElementById("bigImage").style.display = "inherit";
    document.getElementById("bigImage").src = document.getElementById(clicked_id).src;
    console.log(clicked_id)
  }
}

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('bigImage');
  if (!container.contains(e.target)) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("bigImage").style.display = "none";
  }
});