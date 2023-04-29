// start pre-loader
let preLoader = document.querySelector("#pre-loader");

window.addEventListener("load" , () => {
  preLoader.style.display = "none";
})

// ******************************************************* //

// start scroller progress top of page
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// document.documentElement.scrollHeight >>  دى طول الصفحه كامله كلها
// document.documentElement.clientHeight >>  دى طول الحته اللى ظاهره ليك وشايفها قدامك بس

let scrollerTopPage = () => {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
}

window.addEventListener("scroll", scrollerTopPage);

// *************************************************** //

// *** start x button have social media icons < facebook - whats .. > **

let navigation = document.querySelector(".navigation");
let toggleBtnNav = document.querySelector(".toggle-plus");

toggleBtnNav.addEventListener("click", () => {
  navigation.classList.toggle("open")
});

navigation.addEventListener("mousedown", () => {
  navigation.addEventListener("mousemove" , onDrag)
})

function onDrag({movementY}) {
  // this code will get all css style of navigation
  let navigationStyle = window.getComputedStyle(navigation);
  
  // here getting top of navigation value and converting it to string "35px" >>> "35" 
  let navigationTop = parseInt(navigationStyle.top) // navigationTop = "35" css زى ما هو مكتوب فى  

  // here getting height of navigation value and converting it to string "300px" >>> "300"
  let navigationHeight = parseInt(navigationStyle.height) // navigationHeight = "300" css زى ما هو مكتوب فى 
  
  // getting window height
  let windowHeight = window.innerHeight; // دا طول الصفحه 
  
  // logic to make btn draggable
  
  // arrow if // navigation.style.top = navTop > 0 ? `${ navigationTop + movementY }px` : "1px";

  if (navigationTop > 0) {
    navigation.style.top =`${ navigationTop + movementY }px`;
  } else {
    navigation.style.top = "1px"
  }

  if (navigationTop > windowHeight - navigationHeight) {
    navigation.style.top = `${ windowHeight - navigationHeight }px`;
  }
}

navigation.addEventListener("mouseup", () => {
  // remove Event //
  navigation.removeEventListener("mousemove" , onDrag)
})
// when leave mouse out navigation عند تحريك الماوس بعيد عن الناف
navigation.addEventListener("mouseleave", () => {
  // remove Event //
  navigation.removeEventListener("mousemove" , onDrag)
})

// Start dark mood
let iconDarkMood = document.getElementById("toggle-mood");
let bigBody = document.body;
let darkModeStorage = localStorage.getItem("dark-mode");

let addDarkMode = () => {
  // to add moon class to iconMood to be moon icon
  iconDarkMood.classList.add("bi-moon-fill");
  // to add dark class to body
  bigBody.classList.add("dark");
  // to save darkMood enabled in localStorage
  localStorage.setItem("dark-mode", "enabled");
};

let removeDarkMode = () => {
  // to remove moon class from iconMood to be sun icon
  iconDarkMood.classList.remove("bi-moon-fill");
  // to remove dark class from body
  bigBody.classList.remove("dark");
  // to save darkMood disabled in localStorage
  localStorage.setItem("dark-mode", "disabled");
};

if (darkModeStorage === "enabled") {
  addDarkMode(); // set state of darkMode on page load
}

iconDarkMood.addEventListener("click", () => {

  darkModeStorage = localStorage.getItem("dark-mode"); // update darkMode when clicked !Important
  
  if (darkModeStorage === "disabled") {
    addDarkMode();
  } else {
    removeDarkMode();
  }
});

// // End dark mood

// ************************************************************* //

// start button to up
let btnUp = document.querySelector(".btn-up");

let btnUpScroll = () => {
  // btn-up scroll to top
  if (window.scrollY >= 250) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
};

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", btnUpScroll);

// ** start type effect write on landing h1 && p < i'm frontEnd > **//
// H1 >> Hello I'm Ahmed
let h1 = document.querySelector(".header-h1");
let h1DataText = h1.getAttribute("data-text"); // Hello I'm Ahmed

let i = 0;

let writeEffectH1 = () => {
    
    let typeWriteH1 = setInterval ( function () {

        h1.textContent += h1DataText[i];
        i++;

        //  if i (عدد حروف الجمله) small than length - 1 stop interval 
        
        if (i >= h1DataText.length) {
            clearInterval(typeWriteH1);
        }
        
    } , 200);

};

window.addEventListener("load", writeEffectH1)

// p >> I'm a Front-End Developer located in Egypt.
let p = document.querySelector(".front");
let pDataText = p.getAttribute("data-text"); // I'm a Front-End Developer located in Egypt.

let j = 0;

let writeEffectP = () => {

    setTimeout(() => {
        let typeWriteP = setInterval ( function () {

            p.textContent += pDataText[j];
            j++;
    
            //  if i (عدد حروف الجمله) small than length - 1 stop interval 
            
            if (j >= pDataText.length) {
                clearInterval(typeWriteP);
            }
            
        } , 200);
    }, 3000);

};

window.addEventListener("load", writeEffectP)


// ** End type effect write on landing h1 && p < i'm frontEnd > **//


// start progress in skill section //
                    //  HTML progress   //
let circularProgressHtml = document.querySelector(".circular-progress-html"),
    progressValueHtml = document.querySelector(".progress-value-html");

let progressStartValueHtml = 0,
    progressEndValueHtml = 98;    

let htmlProgress = setInterval(() => {
        
    progressStartValueHtml++;

    progressValueHtml.textContent = `${progressStartValueHtml}%`
    circularProgressHtml.style.background = `conic-gradient(var(--main-color) ${progressStartValueHtml * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueHtml == progressEndValueHtml){
        clearInterval(htmlProgress);
    }

    }, 20);

                //  CSS progress  //

let circularProgressCss = document.querySelector(".circular-progress-css"),
    progressValueCss = document.querySelector(".progress-value-css");

let progressStartValueCSS = 0,    
    progressEndValueCSS = 90;    

let cssProgress = setInterval(() => {
        
    progressStartValueCSS++;

    progressValueCss.textContent = `${progressStartValueCSS}%`
    circularProgressCss.style.background = `conic-gradient(var(--main-color) ${progressStartValueCSS * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueCSS == progressEndValueCSS){
        clearInterval(cssProgress);
    }

    }, 20);

                            //  java-script progress   //

let circularProgressJs = document.querySelector(".circular-progress-js"),
    progressValueJs = document.querySelector(".progress-value-js");

let progressStartValueJs = 0,    
    progressEndValueJs = 75;    

let jsProgress = setInterval(() => {
        
    progressStartValueJs++;

    progressValueJs.textContent = `${progressStartValueJs}%`
    circularProgressJs.style.background = `conic-gradient(var(--main-color) ${progressStartValueJs * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueJs == progressEndValueJs){
        clearInterval(jsProgress);
    }

    }, 20);

                            //  bootstrap progress  //

let circularProgressBootstrab = document.querySelector(".circular-progress-bootstrab"),
    progressValueBootstrab = document.querySelector(".progress-value-bootstrab");

let progressStartValueBootstrab = 0,    
    progressEndValueBootstrab = 95;    

let bootstrapProgress = setInterval(() => {
        
    progressStartValueBootstrab++;

    progressValueBootstrab.textContent = `${progressStartValueBootstrab}%`
    circularProgressBootstrab.style.background = `conic-gradient(var(--main-color) ${progressStartValueBootstrab * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueBootstrab == progressEndValueBootstrab){
        clearInterval(bootstrapProgress);
    }

    }, 20);

                            //  Sass progress   //

let circularProgressSass = document.querySelector(".circular-progress-sass"),
    progressValueSass = document.querySelector(".progress-value-sass");

let progressStartValueSass = 0,    
    progressEndValueSass = 87;    

let sassProgress = setInterval(() => {
        
    progressStartValueSass++;

    progressValueSass.textContent = `${progressStartValueSass}%`
    circularProgressSass.style.background = `conic-gradient(var(--main-color) ${progressStartValueSass * 3.6}deg, #7a7a7a96 10deg)`

    if(progressStartValueSass == progressEndValueSass){
        clearInterval(sassProgress);
    }

    }, 20);
// End progress in skill section //


// ************** start ul li projects ****************************************//
let liProject = document.querySelectorAll(".swicher-project li");
let imgsProjects = document.querySelectorAll(".big-box"); 

liProject.forEach( (li)=> {
    li.addEventListener("click", manageImg);
    li.addEventListener("click", removeActive);
});
        // remove active class from all li and add to the current element you clicked on it
function removeActive(){
    liProject.forEach((li) => {
        li.classList.remove("active-pro");
        this.classList.add("active-pro");
    })
};
// manage img
function manageImg() {
    imgsProjects.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.work).forEach((ele) => {
        ele.style.display = "block";
    })
};

// ************** End ul li projects ************************************//
