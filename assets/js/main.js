
$(document).ready(function() {
    let slides = []

    loadJSON().then(() => initOwlCreatorContent()).then(() => initAllCarousels())

    async function loadJSON(){
       await fetch("../assets/json/slides.json")
        .then(response => {
        return response.json();
        }).then(jsonData => {
         slides = jsonData
        })
    }
 
   async function initAllCarousels() {
        var owl = $('.owl-carousel');
       await owl.owlCarousel({
            nav : false,
            slideSpeed : 300,
            items : 1, 
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false,
            loop:true,
            autoplay:true,
            dots: false,
        });
           await owl.owlCarousel();
            // Go to the next item
            $('.icon-right-open').click(function() {
                owl.trigger('next.owl.carousel');
            })
            // Go to the previous item
            $('.icon-left-open').click(function() {
                owl.trigger('prev.owl.carousel', [300]);
            });

       await $("#owl-custom-2").owlCarousel({
            nav : false,
            slideSpeed : 300,
            items : 1, 
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false,
            loop:true,
            autoplay:true,
            dots: false,
        });
    }

    function initOwlCreatorContent(){

            slides.forEach(i => {

                    // Create Owl item 
            var owlItem = document.createElement("div");
            
            // Owl first child
            var tagTitle = document.createElement("div");
            var tagDescription = document.createElement("div");
            var tagActionBTN = document.createElement("button");
            
            // Owl second child
            var tagParagraphTitle = document.createElement("p");
            var tagParagraphDescription = document.createElement("p");
            var icon = document.createElement("i");
            
            // Owl third child
            var textTitle = document.createTextNode(i?.title);
            var textDescription = document.createTextNode(i?.description);
            var textActionBTN = document.createTextNode(i?.buttonText.toUpperCase());
            
            //Append second child to first child
            tagTitle.appendChild(tagParagraphTitle);
            tagDescription.appendChild(tagParagraphDescription);
            
            //Append third child to second child
            tagParagraphTitle.appendChild(textTitle);
            tagParagraphDescription.appendChild(textDescription);
            tagActionBTN.appendChild(icon);
            tagActionBTN.appendChild(textActionBTN);
            
            //Attributes
            owlItem.className = "item";
            tagTitle.className = "owl-custom-title";
            tagDescription.className = "owl-custom-description";
            tagActionBTN.className = "owl-overlay-button";
            tagActionBTN.setAttribute("onClick", `customHREF('${i?.buttonLink}')`);

            //Image || Background color logic
            if (i?.background?.backgroundImage) {
                var tagIMG = document.createElement("img");
                tagIMG.src = i?.background?.backgroundImage
                owlItem.appendChild(tagIMG);
            } else if (i?.background?.backgroundColor) {
                var divBackgroundColor = document.createElement("div");
                divBackgroundColor.className = "divBackgroundColor";
                divBackgroundColor.setAttribute("style", `background: ${i?.background?.backgroundColor};height: 326.69px;width: 1920px;`);
                owlItem.appendChild(divBackgroundColor);
            }
            icon.className = "icon-star";
            icon.alt = "a_mountain_view";
            
            //Append all first childs to item div (OWL)
            owlItem.appendChild(tagTitle);
            owlItem.appendChild(tagDescription);
            owlItem.appendChild(tagActionBTN);
            
            //Apend item (owl) in DOM
            var element = document.getElementById("owl-custom");
            element.appendChild(owlItem);

            })

            
      }
   
  });

  function on() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector("#videoID").play()
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector("#videoID").pause()
  }

  function customHREF(param){
    window.open(
        `https://www.evonomix.com${param}`,
        '_blank'
      )
  }

 