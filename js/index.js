





// check if there is a color in local storge 

let mainColors = localStorage.getItem("color-option");

// console.log(mainColors);

if (mainColors !== null){
    // console.log("the local storage isnot empty")
    document.documentElement.style.setProperty("--main--color", mainColors);

}

 // remove active calss from all list items
 document.querySelectorAll(".colors-list li").forEach(ele => {
      ele.classList.remove("active");

      // add active class for data set color  === localStorage color
      if(ele.dataset.color === mainColors){
           ele.classList.add("active");
      }
 });





//  setting-box
  document.querySelector("i").onclick = function(){
    document.querySelector(".setting-box").classList.toggle("open");
  }

// switch colors

const colorli = document.querySelectorAll(".colors-list li");

// loop on list items
colorli.forEach(li => {
    // clickss on every list items
    li.addEventListener("click" , (e) => {
        // console.log(e.target.dataset.color);

        // set color on Root
       document.documentElement.style.setProperty("--main--color", e.target.dataset.color);

       // set color in localStorage
       localStorage.setItem("color-option" ,  e.target.dataset.color );

       // remove active class from all childerns
       let myEle = e.target.parentElement.querySelectorAll(".active");

       myEle.forEach(ele => {
        ele.classList.remove("active");
       })

       // add class active for the current ele
       e.target.classList.add("active");

    })
})


// switch backgrounds

const backGround = document.querySelectorAll(".random-background span");

// loop on list items
backGround.forEach(span => {
    // clickss on every list items
    span.addEventListener("click" , (e) => {
        
       // remove active class from all background ele
       let myElement = e.target.parentElement.querySelectorAll(".active");

       myElement.forEach(ele => {
        ele.classList.remove("active");
       })

        
       // add class active for the current ele
       e.target.classList.add("active");

    

       // check if backGround option is true let it work
       if(e.target.dataset.background === "yes"){
          backgroundOption===true;
          randomize();

          
        localStorage.setItem("Background-option",true );
    
       } else {
        backgroundOption===false;
        clearInterval(backgroundInterval);

        localStorage.setItem("Background-option",false );
       }
    })

   

    
})


// select landing page elements

let landingPage = document.querySelector(".landing-page");

// get Array of images

let ArrayImages = ["01.jpg","02.jpg","03.jpg","05.jpg"];

// change Background image Url



// get random number
let backgroundOption = true;
let backgroundInterval;

function randomize () {
    if (backgroundOption === true){
        backgroundInterval = setInterval (() => {
            let randomNumber = Math.floor(Math.random()*ArrayImages.length)
            // console.log(randomNumber)
        
            landingPage.style.backgroundImage = 'url("images/'+ ArrayImages[randomNumber]+'")';
        },2000);
        
    }
}

// check if there is backgroundOption in local storage
let MyBackground = localStorage.getItem("Background-option");
  if (MyBackground!==""){
    if(MyBackground===true){
        backgroundOption===true;
    }else{
        backgroundOption===false;

    } 
    // remove active class from all span
    document.querySelectorAll(".random-background span").forEach(el => {
       
            el.classList.remove("active");

         // add active class   
        el.addEventListener("click", (e) => {
            e.classList.add("active");
        });
       

        }); 

        //  save active class on the right element

        if(MyBackground==='true'){
              document.querySelector(" .random-background .yes").classList.add("active");
        }else {
            document.querySelector(" .random-background .No").classList.add("active");
        }

    }


    // select skill selectors

    let ourSkills = document.querySelector(".skills");

    window.onscroll = function () {
       
      // skills offset top

      let skillsTopOffset = ourSkills.offsetTop;

     // skills outer height

      let skillsOutterHeight = ourSkills.offsetHeight;

    //   console.log(skillsOutterHeight)

    // window height

    let windowHeight = this.innerHeight;
  
    // window scrollTop

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsTopOffset + skillsOutterHeight - windowHeight )){
       
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span")

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })

    }

      
    }




//  select my imges

let ourGallery = document.querySelectorAll(".gallery img");


ourGallery.forEach(img => {

    img.addEventListener("click" , () => {

        // create overlay
        let overlay = document.createElement("div");

        // add class for the overlay
        overlay.className = "popup-ovarlay";

        // add the popup-box to the body
       document.body.appendChild(overlay);

        // create popup-box 
        let popupbox = document.createElement("div");

        // add className for the popup-box
        popupbox.className = "popup-box";

      

      // create img 
      let imgbox =  document.createElement("img");

      
      // set the source for the image
      imgbox.src = img.src;


      popupbox.appendChild(imgbox);

      document.body.appendChild(popupbox);

      // create span text

      let mySpan = document.createElement("span");

      // create text for mySpan

      let SpanText = document.createTextNode("x");

      // append SpanText inside mySpan

      mySpan.appendChild(SpanText);

      // append mySpan to Popup-pox
      popupbox.appendChild(mySpan);

      mySpan.addEventListener("click" , (e) => {
        e.target.parentElement.remove();

       document.querySelector(".popup-ovarlay").remove();
      }) 


    })

})


// press any links from the landing page let me go for this section

let myLinks = document.querySelectorAll(".links a");

myLinks.forEach(li => {

    li.addEventListener("click" , (e) => {

        e.preventDefault();

         document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
         })
    })
})



