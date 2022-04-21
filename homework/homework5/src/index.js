const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
  ];

  

  const changeColorBtn = document.querySelector("button");

  function handleClick(){
    const leftColor = Math.floor(Math.random()*colors.length);
    const rightColor = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundImage= `linear-gradient(0.25turn,${colors[leftColor]},${colors[rightColor]})`
    console.log(colors[rightColor])
  }

  changeColorBtn.addEventListener("click",handleClick)