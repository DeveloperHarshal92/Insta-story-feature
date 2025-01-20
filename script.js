let arr = [
  {
    dp: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1467632499275-7a693a761056?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHwxfDB8fHww",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1661629259850-9a893425f1f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1495298599282-d8920eb5009b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  },
];

let storiyan = document.querySelector("#storiyan");
let clutter = "";

arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
          <img id="${idx}" src="${elem.dp}" alt="">
        </div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", (dets) => {
  let fullScreen = document.querySelector("#full-screen")
  storiyan.style.dispaly = "none"
  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;
  fullScreen.style.border = "12px solid black"
  fullScreen.style.borderImage = "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888) 1";
 
  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 3000);
});
