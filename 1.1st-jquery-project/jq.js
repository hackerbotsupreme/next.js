// what js can fo - exmple
function fadein() {
    $('#img2').fadeToggle(3000);
    $('#img2').fadeToggle();
    // we can also give it time 
}









// jquery selectors
function hello() {
    // $('div').css('background-color','orange')
    // $('#p1').css('font-style','italic')// id 
    // $('.para').css('font-style','italic')//class
    $('#div1,#div2').css('background-color', 'green')
    $('#div1,li').css('background-color', 'purple')
    $('div > p').fadeToggle();
    $('p:first').fadeToggle();
    $('li : even').fadeToggle();
}









// Events in jqery 
// function sdjfaks()
// {
//     document.getElementById('img1').style.width= '500px';
// }
// this could be also written like 
// $('button').click(sdjfaks);
// function  sdjfaks()
// {
//     $('#img1').css('width','500px')
// }
// or it could be also written as 
// $('button').click(function(){
//     $('#img1').css('width','500px')
// })
// or it could be also written as 
// wheneaver we write document - we refers to the whole html document 
// $('document').ready(function(){
//     $('button').click(function(){
//         $('#img1').css('width','500px')
//     })
// })
// in javascript we had some buttons that works on double click only 
// in jquery it is like ,
// $('document').ready(function(){
//     $('button').dblclick(function(){
//         $('#img1').css('width','500px')
//     })
// })

$('document').ready(function () {
    // now we will see onmousehover(mouseenter) , onmouseout(mouseleave)
    // $('#img1').mouseenter(function(){
    //     $('#img1').css('width','500px')
    // })
    // $('#img1').mouseleave(function(){
    //     $('#img1').css('width','250px')
    // })
    // in js(which means also in jquery ) there are a common event that can act like both 
    // mouseenter + mouseleave
    $('#img1').hover(func1, func2)
    function func1() {
        $('#img1').css('width', '500px')
    }
    function func2() {
        $('#img1').css('width', '250px')
    }
})














// // effects in jquery
$('document').ready(function () {
    $('#btn1').click(function () {
        $('#img3').hide(2000);
    })
    $('#btn2').click(function () {
        $('#img3').show(2000);
    })
    $('#btn3').click(function () {
        $('#img3').toggle(3000);
    })
    $('#btn4').click(function () {
        $('#img3').fadeIn(3000);
    })
    $('#btn5').click(function () {
        $('#img3').fadeOut(3000);
    })
    $('#btn6').click(function () {
        $('#img3').toggle(3000);
    })
    $('#btn6').click(function () {
        $('#img3').fadeToggle(3000);
    })
    $('#btn7').click(function () {
        $('#img3').slideUp(3000);
    })
    $('#btn8').click(function () {
        $('#img3').slideDown(3000);
    })
    $('#btn9').click(function () {
        $('#img3').slideToggle(3000);
    })
    $('#btn10').click(function () {
        $('#img3').stop();
    })
})
$('document').ready(function () {
    $('#btnnn').click(function () {
        // $('#img').animate({
        //     left:'150px',
        //     opacity:'1',
        //     heigth:'400px',
        //     width:'400px'
        // },2000)
        $('#img').animate({
            left: '150px',
            opacity: '1',
            heigth: '400px',
            width: '400px'
        }, slow)
    })
})









// callbacks and cahining 
// $('document').ready(function(){
// $('#btnnn..').click(function(){
//     $('#imggg').animate({
//         left:'150px',
//         opacity:'1',
//         heigth:'400px',
//         width:'400px'
//     },slow)
//     alert('animated');
// })
// important 
// jquery processes the code line by line but when it comes to effects it performs the later task if current one is taking time 
// this program is gonna give alert and the animation at the same time 
// using callbacks 
//         $('#btnnn..').click(function(){
//         $('#imggg').animate({
//             left:'150px',
//             opacity:'1',
//             heigth:'400px',
//             width:'400px'
//         },slow,function(){
//             alert('animated');//callback
//         })
//         alert('animated');
//     })
// })

// slide-up with callback 
// $('document').ready(function(){
//     $('#btnnn..').click(function(){
//         $('#imggg').slideUp(2000,function(){
//             $('#imggg').slideDown(2000);
//         })
//     })
// })

// now lets move to chaining 
// chaining allows us to run multiple method s withing a single statement 
// we can change more than one method to a html element 

$('document').ready(function () {
    $('#btnnn..').click(function () {
        $('#imggg').slideUp(2000).css('opacity', '1').slideDown(3000).fadeIOut(2000).fadeIn(2000)
    })
})






// jquery dom manipulation 

// dom it defines the whole html document 
// in a hirarchial form to make it understandable ,for js  
// or jquery so that ither functions cn work on it 
//  it represents whole object in form of nodes or object whether it be elements  or anything in the dcument 
// the entire content of the dom can be accessed or manipulated using js/jquery

// manipulate means controlling something woth skills 
// $('document').ready(function () {
    // $('.div1').click(function(){
    //     var x= $('.p1').html();
    //     $('#span1').text(x)
    // })
    // $('.div1').click(function(){
    //     alert($('.p1').html())
    // })
    // $('.div1').click(function(){
    //     alert($('.p1').attr('class'))
    // })
    // reseeting teh id 
    // $('#btn1').click(function(){
    //     $('.p1').attr('id','p2id')
    // })
    // checking the id again 
    // $('.div1').click(function(){
    //     alert($('.p1').attr('id'))
    // })
    // retriving the rgb back-color of the box 
    // $('.div1').click(function(){
    //     alert($('.div1'.css('background-color')))
    // })
    // changing  the rgb back-color of the box  on click
//     $('.div1').click(function(){
//         $('.div1').css('background-color','green')
//     })
// })
$('document').ready(function () {
    // appending a p in the div1 
    // $('#btn1').click(function(){
    //     $('.div1').append('<p>This is a paragraph</p>')
    // })
    // appending the img 
    $('#btn1').click(function(){
        $('.div1').append('<img src="... "  height="100px"  width="100px"></img>')
    })
    // same goes for before , after , prepend , remove ,empty also 
})



