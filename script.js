const beershite = "./asserts/img1.jpg";
const nechedics = "./asserts/img2.jpg";
const retrofuter = "./asserts/img3.jpg";
const lbfeatpoppete = "./asserts/img4.jpg";
const suriti = "./asserts/img5.jpg";
const twist = "./asserts/img6.jpg";
const soffa = "./asserts/img7.jpg";
const larbusissonireee = "./asserts/img8.jpg";

// select the headings

const beershiteHeading = document.querySelector(".img1")
const nechedicsHeading = document.querySelector(".img2")
const retrofuterHeading = document.querySelector(".img3")
const lbfeatpoppeteHeading = document.querySelector(".img4")
const suritiHeading = document.querySelector(".img5")
const twistHeading = document.querySelector(".img6")
const soffaeHeading = document.querySelector(".img7")
const larbusissonireeeHeading = document.querySelector(".img8")


const keyObject = {
   beershiteHeading:beershite,
   nechedicsHeading:nechedics,
   retrofuterHeading:retrofuter,
   lbfeatpoppeteHeading:lbfeatpoppete,
   suritiHeading:suriti,
   twistHeading:twist,
   soffaeHeading:soffa,
   larbusissonireeeHeading:larbusissonireee
}

const headingsArray = [beershiteHeading,nechedicsHeading,retrofuterHeading,lbfeatpoppeteHeading,suritiHeading,twistHeading,soffaeHeading,larbusissonireeeHeading];


// for vedio section
const vedioSection = document.querySelector(".vedio-section")
const vedio = document.querySelector(".vedio")
// Store the current playback state before removing the video
let playbackState = 0;
if (!vedio.paused) {
  playbackState = vedio.currentTime;
}


// selecting the main
const main = document.querySelector(".main")

headingsArray.forEach((heading)=>{
 
  heading.addEventListener("mouseenter",()=>{
    console.log(heading)

    if(heading===beershiteHeading){
       main.style.backgroundImage = `url(${beershite})`;
       main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
       main.style.backgroundPosition= "center"; /* Centers the background image */
    }


    if(heading===nechedicsHeading){
      main.style.backgroundImage = `url(${nechedics})`;
      main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
      main.style.backgroundPosition= "center"; /* Centers the background image */
   }
   

   
   if(heading===retrofuterHeading){
    main.style.backgroundImage = `url(${retrofuter})`;
    main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
    main.style.backgroundPosition= "center"; /* Centers the background image */
 }


 
 if(heading===lbfeatpoppeteHeading){
  main.style.backgroundImage = `url(${lbfeatpoppete})`;
  main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
  main.style.backgroundPosition= "center"; /* Centers the background image */
}


if(heading===suritiHeading){
  main.style.backgroundImage = `url(${suriti})`;
  main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
  main.style.backgroundPosition= "center"; /* Centers the background image */
}


if(heading=== twistHeading){
  main.style.backgroundImage = `url(${twist})`;
  main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
  main.style.backgroundPosition= "center"; /* Centers the background image */
}

if(heading===soffaeHeading){
  main.style.backgroundImage = `url(${soffa})`;
  main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
  main.style.backgroundPosition= "center"; /* Centers the background image */
}

if(heading===larbusissonireeeHeading){
  main.style.backgroundImage = `url(${larbusissonireee})`;
  main.style.backgroundSize = "cover"; /* Ensures the background image covers the entire container */
  main.style.backgroundPosition= "center"; /* Centers the background image */
}
    vedio.remove();
    console.log(keyObject[heading.classList[0]])
  })

  heading.addEventListener("mouseleave",()=>{
    vedioSection.appendChild(vedio)
    if (vedio.autoplay) {
      vedio.currentTime = playbackState;
      vedio.play();
    }
  })
  
})

const imgArray = [beershite,nechedics,retrofuter,lbfeatpoppete,suriti,twist,soffa,larbusissonireee]