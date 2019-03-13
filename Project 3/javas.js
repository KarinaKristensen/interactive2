
$(document).ready(function(){
    animateDiv('.circle');
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width()/2 - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    
    let elements = document.querySelectorAll(myclass)
    for(let counter = 0; counter < elements.length; counter ++){

        var newq = makeNewPosition();

        $(elements[counter]).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
          if(counter == 0) {
                animateDiv(myclass);        
            }
        });
    }
    
};


// let elements = []
// let positions = []
// animateDiv('#c1');
// // animateDiv('.b');
// // animateDiv('.c');
// // animateDiv('.d');


// // function makeNewPosition(){
    
// //     // Get viewport dimensions (remove the dimension of the div)
// //     var h = $(window).height() - 50;
// //     var w = $(window).width() - 50;
    
// //     var nh = Math.floor(Math.random() * h);
// //     var nw = Math.floor(Math.random() * w);
    
// //     return [nh,nw];    
    
// // }









// function animateDiv(myclass){
//     // var newq = makeNewPosition();


//     elements = document.querySelectorAll(myclass)


//     for(let counter = 0; counter < elements.length; counter ++){

//         let x = window.innerWidth/2 * Math.random()
//         let y = window.innerHeight * Math.random()

//         if(!positions[counter]){
//             positions[counter] = {
//                 x:0,
//                 y:0
//             }
//         }

//         let startX = positions[counter].x+'px'
//         let startY = positions[counter].y+'px'

//         positions[counter] = {
//             'x' : x,
//             'y' : y,
//         }
//         console.log(positions[counter])

//         let animation = elements[counter].animate([
//             { top: startX, left: startY },
//             { top: y+'px', left: x+'px' }
//         ],{
//             duration:500
//         })
//         if(counter == 0){
//             animation.onfinish  = ()=>{
                
//                 animateDiv('#c1')
//             }
//         }
        
//     }

//     // .animate({ top: newq[0], left: newq[1] }, 1000,   function(){
//     //   animateDiv(myclass);        
//     // });
    


// // for(let counter = 0; counter < elements.length; counter ++){

// //         let x = elements[counter].offsetLeft + (Math.random() - 0.5) * 10
// //         let y = elements[counter].offsetTop + (Math.random() - 0.5) * 10

// //         if(x < 0){
// //             x = 0
// //         }

// //         if(x > window.innerWidth / 2){
// //             x = window.innerWidth / 2
// //         }

// //         if(y < 0){
// //             y = 0
// //         }

// //         if(x > window.innerHeight / 2){
// //             x = window.innerHeight / 2
// //         }


// //         elements[counter].style.top = y + 'px'
// //         elements[counter].style.left = x + 'px'
// //     }



// };
