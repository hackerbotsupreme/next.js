$('document').ready(function () {
    // you go to the site to see the magic 
    // mm/dd/yy
    // $('#date').datepicker();
    // and one more thing about this daepicker is we can control it
    $('#date').datepicker({
        showOtherMonths: true,//displaying other month dates 
        selectOtherMonths: true,//making them selectable 
        showButtonPannel: true,//showing buttons under the panel 
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2016, 1, 5),// restricting the year , month
        maxDate: new Date(2023, 1, 6),
        numberofMonths: 2
    });
})












// tooltip 
$('document').ready(function () {
    $('#tool').tooltip({
        content: 'this is the place for name ',//this takes the value an puts it inse the title 
        track: true,//tip will move along with the mouse 
        // obseerve that the animation is fade-in and fade-out by default 
        // show:{effect:'slideDown',duration:2000,delay:250},
        // show:{effect:'highlight',duration:2000,delay:250},
        show: { effect: 'pulsate', duration: 2000, delay: 250 },
        hide: { effect: 'explode', duration: 2000 }
    });
})













// accordian 
$('document').ready(function () {
    $('#divvv').accordion({
        collapsible: true,
        icons: { header: "ui-icon-caret-1-s", activeHeader: 'ui-icon-caret-1-n' },
        animate: 2000,
        event: 'mouseover',
    });
})








// dialogBox 
$('document').ready(function () {
    $('#btn-btn').click(function () {
        $('#dialog').dialog('open');
    })
    $('#dialog').dialog({
        title: 'title using property',
        draggable: false,
        resizeble: false,
        closeOnEsacape: false,
        modal: true,
        autoOpen: false,
    });
})











// Autocomplete Widget in jquery UI
// var language = ['html','css','javascript','php','java','p','c++','c#','perl','ruby','scala','basic']
$('document').ready(function () {
    $('#input').autocomplete({
        // source: language,
        source: ['html', 'css', 'javascript', 'php', 'java', 'p', 'c++', 'c#', 'perl', 'ruby', 'scala', 'basic'],
    }, {
        delay: 2000,
        minLength: 3,
        autoFocus: true,
        autoFocus: false,
    });
})














// WIDGET MODIFICATON in jquery UI
$('document').ready(function () {
    $('#dialogn').dialog({
        draggable: true,
        resizeble: true,
        closeOnEsacape: true,
        model: false,
        autoOpen: true,
        height:250,
        width: 250,
    })
    $('#btnX').click(function () {
        // alert('get is working ')
        // var model = $('#dialog').dialog('option', 'model')
        // var model = $('#dialog').dialog('option', 'draggable')
        var model = $('#dialog').dialog('option', 'height')
        alert(model)
    })
    $('#btnY').click(function () {
        // alert('set is working ')
        // $('#dialog').dialog('option', 'draggable', true)
        // $('#dialog').dialog('option', 'model', true)
        // $('#dialog').dialog('option', 'model', false)
        $('#dialog').dialog('option', 'height', 300)
    })
})

















// Draggable interactioin  in jquery UI
$('document').ready(function () {
    $('.box').draggable({
        // axis:'x',
        cursor:'grabbing',
        opacity:'0.5',
        // containment:'parent',
        // grid:[300,300],
        snap:true,
        snapTolerance:100,
    })
})















// Sortable interactioin  in jquery UI
$('document').ready(function () {
    $('.sort').sortable({
        opacity: 0.5,
        cursor:'grabbing',
        containment: 'parent',
        delay:300,
        distance:50,
    })
})
















// Resizable interactioin  in jquery UI
$('document').ready(function () {
    $('#imageX').resizable({
        animate: true,
        containment: 'parent',
        maxHeight: 400,
        maxWIdth:400,
        minHeight:150,
        minWidth:150,
        ghost:true,
        aspectRatio:16/9,
    })
})
















// Theme Customization  in jquery UI
$('document').ready(function () {
    $('#dialog1').dialog({
        draggable:true,
        resizable:true,
        closeOnEsacape:true,
        modal:false,
        autoOpen:true,
    })
    $('#date').datrpicker({
        showOtherMonths: true,
        changeMonth: true,
        changeYear:true,
        // to theme th eproject we can use themes 
        //  from the jquery ui , click on themes 
        // then click on roll yor own
        // 

    })
})