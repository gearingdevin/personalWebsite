//alert("test");
//$('#p1').css('color', 'red');


// $('.mainSelect').on('click', function() {
//     //$(this).material_select();
//     //alert('test');
//   });

// const phaseOptions = ['A', 'B', 'C'];

// const roomOptions = ['Control', 'Building 1142', 'Hydropaunics', 'Battery'];
// const roomOptionsLetters = ['C', 'L', 'Q', 'V'];

// const locationOptions = ['A-Rack', 'B-Rack', 'Conference Room', 'Office', 'Main Entrance', 'Break Room', 'Server Room', 'Seed Table', 'Water Treatment'];
// const locationOptionsLetters = ['A', 'B', 'C', 'F', 'M', 'R', 'S', 'T', 'W'];

// const itemOptions = ['Appliance', 'Misc. Electronic', 'Measuring Device', 'Fan', 'Light', 'Pump', 'Tool'];
// const itemOptionsLetters = ['A', 'C', 'E', 'F', 'L', 'P', 'T'];

// var wemoList = [];
// var powerChart;



function initialization() {
    $('.tabs').tabs(); //INIT MENU TABS
    $('.modal').modal(); //INIT MODAL
    typeEffect();
    contactHover();

}




function contactHover() {
    $(".grow").hover(
        function () {
            // $(this).append($("<span> ***</span>"));
            var text = $(this).parent().find(".txt");
            //console.log(this);
            //$(text).removeClass('hidden');
            // $(text).fadeIn("slow", function () {
            //     // Animation complete
            // });
            

        });

}

$('.grow')
                .mouseenter(function () {
                    var text = $(this).parent().find(".txt");
                    $(text).fadeIn("slow", function () {
                        // Animation complete
                    });
                })
                .mouseleave(function () {
                    var text = $(this).parent().find(".txt");
                    $(text).fadeOut("slow", function () {
                        // Animation complete
                    });
                });



function typeEffect() {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 8) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;

    };

    TxtType.prototype.tick = function () {

        if (this.loopNum < 19) {
            if (this.loopNum == 18) {
                this.isDeleting = false;
            }
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
            // if (this.loopNum < 5) {
            setTimeout(function () {
                that.tick();
            }, delta);
            // }
            // if(this.loopNum >= 5){
            //     return;
            // }
        }
        else {
            return;
        }
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

}


$(document).ready(function () {
    initialization();






});

//CHECK TO SEE WHICH TAB IS ACTIVE. HIDE ALL OTHER DATA FADE IN CURRENT DATA
var oldTab = ($(".active").attr('href')).substring(1);
//     alert(selectedTab);


// $(window).mousedown(function() {
//     var currentTab = $(".active").attr('href');
//     if(currentTab != oldTab){
//         oldTab = currentTab;
// var parClass = currentTab.substring(1);
// //alert(parClass);
// $(`.${parClass}`).removeClass('hidden');
// //alert( "Handler for .mousedown() called." );
//     }

// });

$("ul.tabs > li > a").click(function (e) {
    //alert( $(this).attr("href") );
    var pulString = ($(this).attr("href"));
    var parClass = pulString.substring(1);
    if (parClass != oldTab) {
        $(`.${oldTab}`).fadeOut(0, function () {
            // Animation complete
        });

        oldTab = parClass;
        //$(`.${parClass}`).removeClass('hidden');
        $(`.${parClass}`).fadeIn("slow", function () {
            // Animation complete
        });
    }
});



$("#resumeButton").on("click", function () {
    $('.tabs').tabs('select', 'resumeTab');
});

$("#aboutButton").on("click", function () {
    $('.tabs').tabs('select', 'aboutTab');
});

document.getElementById('personalImage').draggable = false;






//const startingOffset_table = $('#wemoTable').offset();








// Or with jQuery

//$(document).ready(function () {

//$('select').formSelect();


//var jsonCallList = $.getJSON("/api/devices");


// $.getJSON("/api/devices", function (data) {
// jsonCallList.done(function (data) {
//     var items = [];
//     //var valM = $('select.minorSelect').val();
//     //alert(valM);
//     $.each(data, function (key2, val2) {
//         wemoList.push(val2);
//         $("#wemoTablePower").append(`<tr class = "wemoTablePower">
//         <td style="width: 30%">${val2['name']}</td>
//         <td class="wemoIP" style="width: 30%">${val2['ip']}</td>
//         <td class="wemoIP" style="width: 30%">${val2['status']}</td>
//         </tr>` );
//     });
// });

// $.each(wemoList, function (key2, val2) {



//         $("#wemoTablePower").append(`<tr class = "wemoTablePower">
//         <td style="width: 30%">${val2['name']}</td>
//         <td class="wemoIP" style="width: 30%">${val2['ip']}</td>
//         <td class="wemoIP" style="width: 30%">${val2['status']}</td>
//         </tr>` );




// });
// var instance = M.FormSelect.getInstance(elem);
// alert(instance);
//});


// $(document).mousemove(function( event ) {
//     // var msg = "Handler for .mousemove() called at ";
//     // msg += event.pageX + ", " + event.pageY;
//     // $( "#log" ).append( "<div>" + msg + "</div>" );
//     var offsetCheck = $('#wemoTable').offset();
//     console.log(offsetCheck);
//   });




// function ValidateIPaddress(ipaddress) {
//     if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
//         return (true)
//     }
//     return (false)
// }



// $('.tabs').tabs();
// $('.modal').modal();




//     var jqxhr = $.getJSON(url);
// jqxhr.done(function(data) {

//     draw_polygon(data);
// });
//var jsonCallList = $.getJSON("/api/devices");


// $.getJSON("/api/devices", function (data) {
// jsonCallList.done(function (data) {
//     var items = [];
//     $.each(data, function (key, val) {

//         wemoList.push(val['ip']);
//         //console.log(val['ip']+" WHAT");
//         var jsonCallStatus = $.getJSON(`/wemo?id=${val['ip']}`);

//         jsonCallStatus.done(function (dataS) {
//             $.each(dataS, function (keyS, valS) {
//                 //console.log("Value: " + valS);
//                 //console.log("IP: " + val['ip']);
//                 var slicedIP = (val['ip']).slice(-2);
//                 slicedIP = slicedIP.replace(/\./g, "");


//                 $("#wemoTable").append(`<tr class = "wemoTable">
//                     <td style="width: 30%">${val['name']}</td>
//                     <td class="wemoIP" style="width: 30%">${val['ip']}</td>
//                     <td style="width: 30%">
//                         <div class="container toggleButton" style="margin: 0 auto;">
//                             <label class="switch" for="checkbox">
//                                 <input type="checkbox"  id="${slicedIP}"/>
//                                 <div class="slider round" style="height: 3em !important"></div>
//                             </label>
//                         </div>
//                     </td>
//                     <td style="width: 10%">
//                     <i class="fa fa-times-circle-o fa-2x removeButton" aria-hidden="true"></i>

//                     <td>
//                     </tr>` );

//                 if (valS == '0' || valS == 0) {
//                     $(`#${slicedIP}`).prop("checked", false);
//                 }
//                 if (valS == '1' || valS == 1) {
//                     $(`#${slicedIP}`).prop("checked", true);
//                 }
//                 if (valS == '2' || valS == 2) {
//                     $(`#${slicedIP}`).parent().find('.slider').addClass("toggleDisabled");
//                     $(`#${slicedIP}`).parent().find('.slider:before').addClass("toggleDisabled");
//                 }

//             });
//             rowpos = $('.tableContentWemo tr:first').position();
//             //console.log("ROW POSITION: " + rowpos.top);
//         });
//         //rowpos = $('.tableContentWemo tr:first').position();
//         // $('html, body').animate({
//         //     scrollTop: ($('.tbl-content').offset().top)
//         // },500);
//         //$( "tbl-content" ).offset({ top: 10});


//         // $("#wemoTable").append(`<tr class = "wemoTable">
//         //         <td style="width: 30%">${val['name']}</td>
//         //         <td class="wemoIP" style="width: 30%">${val['ip']}</td>
//         //         <td style="width: 30%">
//         //             <div class="container" style="margin: 0 auto;">
//         //                 <label class="switch" for="checkbox">
//         //                     <input type="checkbox" id="checkbox" />
//         //                     <div class="slider round" style="height: 3em !important"></div>
//         //                 </label>
//         //             </div>
//         //         </td>
//         //         <td style="width: 10%">
//         //         <i class="fa fa-times-circle-o fa-2x removeButton" aria-hidden="true"></i>
//         //         <i class="fa fa-lightbulb-o fa-2x toggleButton" aria-hidden="true"></i>
//         //         <td>
//         //         </tr>` );




//     });




// });

// function labelGeneration(dataAmount, powerData) {
//     var generatedLabels = [];
//     //console.log(powerData);
//     $.each(powerData, function (index, value) {
//         //console.log((powerData[index]).time != undefined);
//         if ((powerData[index]) != undefined) {
//             generatedLabels.push(((powerData[index].time)));
//             //console.log(powerData[index].time);
//         }

//     });
//     return generatedLabels;
//     //at end return array that will be labels ex: ['','','',...]
// }

// function dataGeneration(dataAmount, powerData) {
//     var generatedData = [];
//     $.each(powerData, function (index, value) {

//         generatedLabels.push(((powerData[index].time)));
//         console.log(powerData[index].time);

//     });
//     return generatedLabels;
// }

//powerChart();



// var poolColors = function (a) {
//     var pool = [];
//     for (i = 0; i < a; i++) {
//         pool.push(dynamicColors());
//     }
//     return pool;
// }

// var dynamicColors = function () {
//     var r = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);
//     return "rgba(" + r + "," + g + "," + b + ", 1" + ")";
// }

// function createDataSetsJSON(wemoAmount, dataAmount, powerData, generatedLabels) {
//     var jsonObj = [];
//     var powerArray = [];
//     var nameArray = [wemoAmount];
//     //var count= -1;


//     for (var i = 0; i < wemoAmount; i++) {
//         powerArray.push(new Array());
//     }
//     //first get power and names

//     //fills name array
//     $.each(powerData, function (index, value) {
//         var count = -1;
//         $.each(value.wemos, function (index2, value2) {
//             count = count + 1;
//             //console.log('INDEX: '+v);
//             nameArray[count] = value2.ip;

//             //console.log(powerArray);
//             //console.log(index+''+count+" POWER:"+value2.power);
//             var newTime = {};
//             //console.log(value.date);
//             var parsedDate = String((value.date)).replace(/\//g, "-");
//             var reorderedDate = parsedDate.substring(6, 10)+'-'+parsedDate.substring(3,5)+'-'+parsedDate.substring(0,2);
//             var timeZoneCode = "T";
//             var parsedDateTime = reorderedDate+timeZoneCode+(value.time+':00');
//             //parsedDate = (value.date).replace("/", "-");
//             console.log(value.date);

//             newTime["t"] = value.date;
//             newTime["y"] = value2.power;

//             //OLD WORKS WITH LABELS
//             //(powerArray[count]).push(value2.power);

//             //NEW ???
//             (powerArray[count]).push(newTime);


//             //console.log("BS: " + (powerArray[count]));

//         });
//     });
//     //console.log('POWER A: ' + powerArray[0]);

//     //then append everything to structure
//     for (var i = 1; i < nameArray.length; i++) {
//         var fill = false;
//         var label = nameArray[i];
//         var data = powerArray[i];
//         var borderWidth = 2;
//         var backgroundColor = poolColors(100);
//         var borderColor = backgroundColor;
//         var radius = 0;


//         var itemWemo = {};
//         itemWemo["fill"] = fill;
//         itemWemo["label"] = label;
//         itemWemo["data"] = data;
//         itemWemo["borderWidth"] = borderWidth;
//         itemWemo["backgroundColor"] = backgroundColor;
//         itemWemo["borderColor"] = borderColor;
//         itemWemo["radius"] = radius;

//         //console.log(itemWemo);
//         jsonObj.push(itemWemo);

//     }


//     var jsonString = JSON.stringify(jsonObj);
//     var chartUnits = ' (mW)';
//     var chartTitle = 'Wemo Power';


//     var ctx = document.getElementById("powerChart").getContext('2d');
//     //CREATE power chart id none exists
//     if (powerChart = !undefined) {
//         powerChart = new Chart(ctx, {
//             type: 'line',
//             data: {
//                 //labels: generatedLabels,
//                 datasets: jsonObj
//             },
//             options: {
//                 elements: {
//                     line: {
//                         tension: 0.01,

//                     }
//                 },
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true
//                         }
//                     }]
//                     ,
//                     xAxes: [{
//                         type: 'time',
//                         distribution: 'linear'
//                     }]
//                 },
//                 title: {
//                     display: true,
//                     fontSize: 20,
//                     fontColor: 'rgba(255,255,255,0.65)',
//                     text: (chartTitle + chartUnits)
//                 },

//             }
//         });
//     }

//     //UPDATE power chart is it exists
//     else {

//     }



// }


// function powerChart() {
//     //start by getting powerData
//     var powerData = [];
//     var jsonCallList = $.getJSON("/api/devices/power");
//     var wemoAmount;


//     var dataAmount = 300;
//     var generatedLabels = [];
//     //var tickDistance = 5;


//     // $.getJSON("/api/devices", function (data) {
//     jsonCallList.done(function (data) {
//         wemoAmount = ((data[(data.length) - 1]).wemos).length;
//         //alert("WEMO AMOUNT: "+ wemoAmount);
//         var dataLength = (data.length) - 1;
//         if (dataLength < dataAmount) {
//             dataAmount = dataLength;
//         }

//         for (var i = ((data.length) - dataAmount); i < data.length; i++) {
//             if (data != undefined) {
//                 powerData.push(data[i - 1]);
//             }
//         }

//         generatedLabels = labelGeneration(dataAmount, powerData);
//         //generateChart(generatedLabels);

//         createDataSetsJSON(wemoAmount, dataAmount, powerData, generatedLabels);


//     });





// }


// function updatePowerTable() {
//     //search through DOM to match elements that contain IP address and append POWER

//     var tableItems = $("#wemoTablePower").children();
//     alert(tableItems.length);


// }

// function findElementByText(text) {
//     var jSpot = $("b:contains(" + text + ")")
//         .filter(function () { return $(this).children().length === 0; })
//         .parent();  // because you asked the parent of that element

//     return jSpot;
// }


// function populatePowerTable(val, valM) {
//     var valMinor = valM;
//     //alert(valM);


//     if (val == 'wemo-all') {

//         $.each(wemoList, function (key2, val2) {



//             $("#wemoTablePower").append(`<tr class = "wemoTablePower">
//                 <td style="width: 30%">${val2['name']}</td>
//                 <td class="wemoIP" style="width: 30%">${val2['ip']}</td>
//                 <td class="wemoIP" style="width: 30%">${val2['status']}</td>
//                 </tr>` );




//         });
//     }

//     if (val == 'wemo-phase' || val == 'wemo-room' || val == 'wemo-location' || val == 'wemo-item') {

//         $(".minorSelectParent").removeClass('hidden');
//         $('select').formSelect();



//         if (val == 'wemo-phase') {
//             //console.log('LIST: '+wemoList);

//             var filteredList = [];
//             $(".minorSelect").empty();


//             $.each(phaseOptions, function (key3, val3) {
//                 if (val3 == valMinor || (valMinor == 'Null' && key3 == 0)) {
//                     valMinor = phaseOptions[0];
//                     $(".minorSelect").append(`
//                 <option value="${val3}" selected>${val3}</option>
//                 ` );
//                 }
//                 else {
//                     $(".minorSelect").append(`
//                 <option value="${val3}" >${val3}</option>
//                 ` );
//                 }



//             });
//             $('select').formSelect();

//             if (!($('.minorSelectParent').hasClass('hidden'))) {
//                 if (valMinor == 'Null' || valMinor == null) {
//                     valMinor = $('select.minorSelect').attr('value');
//                     //alert('Val: ' + valMinor);
//                 }
//             }


//             $.each(wemoList, function (key2, val2) {


//                 if (valM == val2.phase) {
//                     $("#wemoTablePower").append(`<tr class = "wemoTablePower">
//                     <td style="width: 30%">${val2['name']}</td>
//                     <td class="wemoIP" style="width: 30%">${val2['ip']}</td>
//                     <td class="wemoIP" style="width: 30%">${val2['status']}</td>
//                     </tr>` );
//                 }



//             });

//         }

//         if (val == 'wemo-room') {
//             //console.log('LIST: '+wemoList);

//             var filteredList = [];
//             $(".minorSelect").empty();


//             $.each(roomOptions, function (key3, val3) {
//                 if (roomOptionsLetters[key3] == valMinor || (valMinor == 'Null' && key3 == 0)) {
//                     valMinor = roomOptionsLetters[0];
//                     $(".minorSelect").append(`
//                 <option value="${roomOptionsLetters[key3]}" selected>${val3}</option>
//                 ` );
//                 }
//                 else {
//                     $(".minorSelect").append(`
//                 <option value="${roomOptionsLetters[key3]}" >${val3}</option>
//                 ` );
//                 }



//             });
//             $('select').formSelect();

//             if (!($('.minorSelectParent').hasClass('hidden'))) {
//                 if (valMinor == 'Null' || valMinor == null) {
//                     valMinor = $('select.minorSelect').attr('value');
//                     //alert('Val: ' + valMinor);
//                 }
//             }


//             $.each(wemoList, function (key2, val2) {


//                 if (valM == val2.room) {
//                     $("#wemoTablePower").append(`<tr class = "wemoTablePower">
//                     <td style="width: 30%">${val2['name']}</td>
//                     <td class="wemoIP" style="width: 30%">${val2['ip']}</td>
//                     <td class="wemoIP" style="width: 30%">${val2['status']}</td>
//                     </tr>` );
//                 }



//             });



//         }

//         if (val == 'wemo-location') {
//             //console.log('LIST: '+wemoList);

//             var filteredList = [];
//             $(".minorSelect").empty();


//             $.each(locationOptions, function (key3, val3) {
//                 if (locationOptionsLetters[key3] == valMinor || (valMinor == 'Null' && key3 == 0)) {
//                     valMinor = locationOptionsLetters[0];
//                     $(".minorSelect").append(`
//                 <option value="${locationOptionsLetters[key3]}" selected>${val3}</option>
//                 ` );
//                 }
//                 else {
//                     $(".minorSelect").append(`
//                 <option value="${locationOptionsLetters[key3]}" >${val3}</option>
//                 ` );
//                 }



//             });
//             $('select').formSelect();

//             if (!($('.minorSelectParent').hasClass('hidden'))) {
//                 if (valMinor == 'Null' || valMinor == null) {
//                     valMinor = $('select.minorSelect').attr('value');
//                     //alert('Val: ' + valMinor);
//                 }
//             }


//             $.each(wemoList, function (key2, val2) {


//                 if (valM == val2.location) {
//                     $("#wemoTablePower").append(`<tr class = "wemoTablePower">
//                     <td style="width: 30%">${val2['name']}</td>
//                     <td class="wemoIP" style="width: 30%">${val2['ip']}</td>
//                     <td class="wemoIP" style="width: 30%">${val2['status']}</td>
//                     </tr>` );
//                 }



//             });

//         }
//     }

//     if (val == 'wemo-item') {
//         //console.log('LIST: '+wemoList);

//         var filteredList = [];
//         $(".minorSelect").empty();


//         $.each(itemOptions, function (key3, val3) {
//             if (itemOptionsLetters[key3] == valMinor || (valMinor == 'Null' && key3 == 0)) {
//                 valMinor = itemOptionsLetters[0];
//                 $(".minorSelect").append(`
//             <option value="${itemOptionsLetters[key3]}" selected>${val3}</option>
//             ` );
//             }
//             else {
//                 $(".minorSelect").append(`
//             <option value="${itemOptionsLetters[key3]}" >${val3}</option>
//             ` );
//             }



//         });
//         $('select').formSelect();

//         if (!($('.minorSelectParent').hasClass('hidden'))) {
//             if (valMinor == 'Null' || valMinor == null) {
//                 valMinor = $('select.minorSelect').attr('value');
//                 //alert('Val: ' + valMinor);
//             }
//         }


//         $.each(wemoList, function (key2, val2) {


//             if (valM == val2.item) {
//                 $("#wemoTablePower").append(`<tr class = "wemoTablePower">
//                 <td style="width: 30%">${val2['name']}</td>
//                 <td class="wemoIP" style="width: 30%">${val2['ip']}</td>
//                 <td class="wemoIP" style="width: 30%">${val2['status']}</td>
//                 </tr>` );
//             }



//         });

//     }

//}

//instance.select('tab_id');

// $("select.mainSelect").on("change", function () {
//     var val = $(this).val();
//     $("#wemoTablePower").empty();
//     wemoList = [];
//     if ($('.minorSelectParent').hasClass('hidden') == false) {
//         if (val == 'wemo-all') {
//             $('.minorSelectParent').addClass('hidden');
//         }
//     }



//     var jsonCallList = $.getJSON("/api/devices");


//     // $.getJSON("/api/devices", function (data) {
//     jsonCallList.done(function (data) {
//         var items = [];
//         //var valM = $('select.minorSelect').val();
//         //alert(valM);
//         $.each(data, function (key2, val2) {
//             wemoList.push(val2);
//         });

//         if (val == 'wemo-all') {
//             populatePowerTable(val, 'Null');
//         }
//         if (val == 'wemo-phase') {
//             populatePowerTable(val, phaseOptions[0]);
//         }
//         if (val == 'wemo-room') {
//             populatePowerTable(val, roomOptionsLetters[0]);
//         }
//         if (val == 'wemo-location') {
//             populatePowerTable(val, locationOptionsLetters[0]);
//         }
//         if (val == 'wemo-item') {
//             populatePowerTable(val, itemOptionsLetters[0]);
//         }


//     });


// });



// $("select.minorSelect").on("change", function () {
//     var val = $('select.mainSelect').val();
//     var valM = $(this).val();
//     $("#wemoTablePower").empty();
//     wemoList = [];


//     var jsonCallList = $.getJSON("/api/devices");


//     // $.getJSON("/api/devices", function (data) {
//     jsonCallList.done(function (data) {
//         var items = [];
//         $.each(data, function (key2, val2) {
//             wemoList.push(val2);
//         });
//         populatePowerTable(val, valM);
//     });


// });




// $('#wemoTable').on('click', '.removeButton', function () {
//     // do something here
//     var parent = $(this).parent().parent();
//     var clickedIP = parent.find('td.wemoIP').text();
//     console.log("ROW POSITION: " + rowpos);
//     $.ajax({
//         type: 'DELETE',
//         url: `/api/devices?id=${clickedIP}`, // or JSON.stringify ({name: 'jonas'}),
//         success: function (data) {


//             (parent).fadeTo(1000, 0.01, function () {

//                 $(this).slideUp(150, function () {
//                     $(this).remove();
//                 });
//             });

//         },
//         contentType: "application/json",
//         dataType: 'json'
//     });

// });


// $("#wemoDecrease").click(function () {
//     // do something here
//     //var parent = $(this).parent().parent();
//     //var clickedIP = parent.find('td.wemoIP').text();
//     //console.log("ROW POSITION: " + rowpos);
//     //alert('clicked');
//     $.ajax({
//         type: 'POST',
//         url: `/api/devices/decrease`, // or JSON.stringify ({name: 'jonas'}),
//         success: function (data) {


//             alert(data);


//         }

//     });

// });
// $("#wemoIncrease").click(function () {
//     // do something here
//     //var parent = $(this).parent().parent();
//     //var clickedIP = parent.find('td.wemoIP').text();
//     //console.log("ROW POSITION: " + rowpos);
//     //alert('clicked');
//     $.ajax({
//         type: 'POST',
//         url: `/api/devices/increase`, // or JSON.stringify ({name: 'jonas'}),
//         success: function (data) {


//             alert(data);


//         }

//     });

// });


// $('#wemoTable').on('click', '.toggleButton', function () {
//     // do something here




//     var parent = $(this).parent().parent();
//     var clickedIP = parent.find('td.wemoIP').text();
//     if ($(parent).find(".slider").hasClass('toggleDisabled') == false) {
//         //alert(clickedIP);

//         var slicedIP = (clickedIP).slice(-2);
//         slicedIP = slicedIP.replace(/\./g, "");



//         var dataStr = `{ "ip": "${clickedIP}" }`;
//         $.ajax({
//             type: 'POST',
//             url: '/api/devices/toggle',
//             data: dataStr, // or JSON.stringify ({name: 'jonas'}),
//             success: function (data) {

//                 var jsonCallToggle = $.getJSON(`/wemo?id=${clickedIP}`);

//                 jsonCallToggle.done(function (data) {
//                     $.each(data, function (key, val) {
//                         console.log("Toggle: " + data);
//                         if (data == '0' || data == 0) {
//                             $(`#${slicedIP}`).prop("checked", false);
//                         }
//                         if (data == '1' || data == 1) {
//                             $(`#${slicedIP}`).prop("checked", true);
//                         }

//                     });
//                 });


//             },
//             contentType: "application/json",
//             dataType: 'json'
//         });













//         // $.ajax({
//         //     type: 'GET',
//         //     url: `http://localhost:3000/wemo?id=${clickedIP}`, // or JSON.stringify ({name: 'jonas'}),
//         //     success: function (data) {

//         //         alert("TOGGLE WEMO");
//         //         // (parent).fadeTo(1000, 0.01, function () {

//         //         //     $(this).slideUp(150, function () {
//         //         //         $(this).remove();
//         //         //     });
//         //         // });

//         //     },
//         //     contentType: "application/json",
//         //     dataType: 'json'
//         // });
//     }

// });



// $("#wemo-input-button").click(function () {
//     //first check to see if valid IP
//     var wemoIP = $(".wemo-input").val();
//     var value = ValidateIPaddress(wemoIP);

//     //value is true or false dpending on validity of IP ADDRESS
//     if (!value && wemoIP.length > 0) {
//         $('.modal').modal('open')
//     }
//     if (value) {

//         var dataStr = `{ "ip": "${wemoIP}" }`;

//         // $.ajax({
//         //     type: 'POST',
//         //     url: '/api/devices',
//         //     data: dataStr, // or JSON.stringify ({name: 'jonas'}),
//         //     async: true,
//         //     success: function (data) {
//         //         console.log(data['ip']);
//         //         wemoList.push(wemoIP);
//         //         //var slicedIP = (data['ip']).slice(-2);
//         //         //slicedIP = slicedIP.replace(/\./g, "");
//         //         var slicedIP = "6"

//         //         $('.tbl-content').animate({ scrollTop: rowpos.top }, 300);

//         //         $(`<tr class="wemoTable anim highlight">
//         //             <td style="width: 30%">${data['name']}</td>
//         //             <td class="wemoIP" style="width: 30%">${data['ip']}</td>
//         //             <td style="width: 30%">
//         //                 <div class="container toggleButton" style="margin: 0 auto;">
//         //                     <label class="switch" for="checkbox">
//         //                          <input type="checkbox"  id="${slicedIP}"/>
//         //                          <div class="slider round" style="height: 3em !important"></div>
//         //                     </label>
//         //                 </div>
//         //             </td>
//         //             <td style="width: 10%">
//         //             <i class="fa fa-times-circle-o fa-2x removeButton" aria-hidden="true"></i>
//         //             <td>
//         //             </tr>`)
//         //             .hide()
//         //             .prependTo('table tbody')
//         //             .fadeIn("slow")
//         //             .addClass('normal');


//         //             if ((data['name'])!= null || (data['name'])!= 'undefined') {
//         //                 $(`#${slicedIP}`).prop("checked", false);
//         //             }
//         //             else {
//         //                 $(`#${slicedIP}`).prop("checked", true);
//         //             }







//         //     },
//         //     contentType: "application/json",
//         //     dataType: 'json'
//         // });



//         // $.ajax({
//         //    type: 'POST',
//         //  url: '/api/devices',
//         // }).done(function(data){
//         //     console.log(data)
//         // })
//         // };

//         $.ajax({
//             url: '/api/devices',
//             type: "POST",
//             async: true,
//             data: dataStr,
//             dataType: "json",
//             contentType: "application/json"
//         }).done(function (data) {




//             //console.log("TEST THIS: "+ data['name']);
//             //console.log("TEST THIS: "+ data['ip']);

//             var jsonCallWemo = $.getJSON(`/api/devices?id=${wemoIP}`);
//             jsonCallWemo.done(function (dataS) {
//                 $.each(dataS, function (key, val) {

//                     var jsonCallStatus = $.getJSON(`/wemo?id=${wemoIP}`);

//                     jsonCallStatus.done(function (dataW) {
//                         $.each(dataW, function (keyW, valW) {



//                             console.log(val['ip']);
//                             wemoList.push(wemoIP);
//                             var slicedIP = (val['ip']).slice(-2);
//                             slicedIP = slicedIP.replace(/\./g, "");
//                             //var slicedIP = "6"

//                             $('.tbl-content').animate({ scrollTop: rowpos.top }, 300);

//                             $(`<tr class="wemoTable anim highlight">
//                         <td style="width: 30%">${val['name']}</td>
//                         <td class="wemoIP" style="width: 30%">${val['ip']}</td>
//                         <td style="width: 30%">
//                             <div class="container toggleButton" style="margin: 0 auto;">
//                                 <label class="switch" for="checkbox">
//                                      <input type="checkbox"  id="${slicedIP}"/>
//                                      <div class="slider round" style="height: 3em !important"></div>
//                                 </label>
//                             </div>
//                         </td>
//                         <td style="width: 10%">
//                         <i class="fa fa-times-circle-o fa-2x removeButton" aria-hidden="true"></i>
//                         <td>
//                         </tr>`)
//                                 .hide()
//                                 .prependTo('table tbody')
//                                 .fadeIn("slow")
//                                 .addClass('normal');

//                             //console.log("LENGTH: "+(val['name']).length)
//                             if (valW == '0' || valW == 0) {
//                                 $(`#${slicedIP}`).prop("checked", false);
//                             }
//                             if (valW == '1' || valW == 1) {
//                                 $(`#${slicedIP}`).prop("checked", true);
//                             }
//                             if (valW == '2' || valW == 2) {
//                                 $(`#${slicedIP}`).parent().find('.slider').addClass("toggleDisabled");
//                             }
//                         });


//                     });
//                 });


//             });



//             if (data.error == false) {
//                 // //No errors, check user
//                 // console.log(data['ip']);
//                 // wemoList.push(wemoIP);
//                 // var slicedIP = (data['ip']).slice(-2);
//                 // slicedIP = slicedIP.replace(/\./g, "");
//                 // //var slicedIP = "6"

//                 // $('.tbl-content').animate({ scrollTop: rowpos.top }, 300);

//                 // $(`<tr class="wemoTable anim highlight">
//                 //     <td style="width: 30%">${data['name']}</td>
//                 //     <td class="wemoIP" style="width: 30%">${data['ip']}</td>
//                 //     <td style="width: 30%">
//                 //         <div class="container toggleButton" style="margin: 0 auto;">
//                 //             <label class="switch" for="checkbox">
//                 //                  <input type="checkbox"  id="${slicedIP}"/>
//                 //                  <div class="slider round" style="height: 3em !important"></div>
//                 //             </label>
//                 //         </div>
//                 //     </td>
//                 //     <td style="width: 10%">
//                 //     <i class="fa fa-times-circle-o fa-2x removeButton" aria-hidden="true"></i>
//                 //     <td>
//                 //     </tr>`)
//                 //     .hide()
//                 //     .prependTo('table tbody')
//                 //     .fadeIn("slow")
//                 //     .addClass('normal');


//                 //     if ((data['name'])!= null || (data['name'])!= 'undefined') {
//                 //         $(`#${slicedIP}`).prop("checked", false);
//                 //     }
//                 //     else {
//                 //         $(`#${slicedIP}`).prop("checked", true);
//                 //     }

//             } else {
//                 // There is an error
//             }
//         });



//     }
// });

// ************************ Drag and drop ***************** //







// });





// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function () {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({ 'padding-right': scrollWidth });
}).resize();







// let dropArea = document.getElementById("drop-area")

//     // Prevent default drag behaviors
//     ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//         dropArea.addEventListener(eventName, preventDefaults, false)
//         document.body.addEventListener(eventName, preventDefaults, false)
//     })

//     // Highlight drop area when item is dragged over it
//     ;['dragenter', 'dragover'].forEach(eventName => {
//         dropArea.addEventListener(eventName, highlight, false)
//     })

//     ;['dragleave', 'drop'].forEach(eventName => {
//         dropArea.addEventListener(eventName, unhighlight, false)
//     })

// // Handle dropped files
// dropArea.addEventListener('drop', handleDrop, false)

// function preventDefaults(e) {
//     e.preventDefault()
//     e.stopPropagation()
// }

// function highlight(e) {
//     dropArea.classList.add('highlight')
// }

// function unhighlight(e) {
//     dropArea.classList.remove('active')
// }

// function handleDrop(e) {
//     var dt = e.dataTransfer
//     var files = dt.files

//     alert("DRAG & DROP CURRENTLY IN DEVELOPMENT");
//     dropArea.classList.remove('highlight')
//     dropArea.classList.add('active')
//     //handleFiles(files)
// }




// $('#upload-input').on('change', function () {

//     var files = $(this).get(0).files;

//     if (files.length > 0) {
//         // create a FormData object which will be sent as the data payload in the
//         // AJAX request
//         var formData = new FormData();

//         // loop through all the selected files and add them to the formData object
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];

//             // add the files to formData object for the data payload
//             formData.append('uploads[]', file, file.name);
//         }

//         $.ajax({
//             url: '/uploads',
//             type: 'POST',
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function (data) {
//                 console.log('upload successful!\n' + data);
//             },
//             xhr: function () {
//                 // create an XMLHttpRequest
//                 var xhr = new XMLHttpRequest();

//                 // listen to the 'progress' event
//                 xhr.upload.addEventListener('progress', function (evt) {

//                     if (evt.lengthComputable) {
//                         // calculate the percentage of upload completed
//                         var percentComplete = evt.loaded / evt.total;
//                         percentComplete = parseInt(percentComplete * 100);

//                         // update the Bootstrap progress bar with the new percentage
//                         $('.progress-bar').text(percentComplete + '%');
//                         $('.progress-bar').width(percentComplete + '%');

//                         // once the upload reaches 100%, set the progress bar text to done
//                         if (percentComplete === 100) {
//                             $('.progress-bar').html('Done');
//                         }

//                     }

//                 }, false);

//                 return xhr;
//             }
//         });

//     }
// });

function handleFiles(files) {
    // // files = [...files]
    // // //initializeProgress(files.length)
    // // files.forEach(uploadFile)
    // //$( ".upload-form" ).submit();
    // console.log(files);
    // //var files = $(this).get(0).files;

    // if (files.length > 0) {
    //     // create a FormData object which will be sent as the data payload in the
    //     // AJAX request
    //     var formData = new FormData();

    //     // loop through all the selected files and add them to the formData object
    //     for (var i = 0; i < files.length; i++) {
    //         var file = files[i];

    //         // add the files to formData object for the data payload
    //         formData.append('uploads[]', file, file.name);
    //     }

    //     $.ajax({
    //         url: '/uploads',
    //         type: 'POST',
    //         data: formData,
    //         processData: false,
    //         contentType: false,
    //         success: function (data) {
    //             console.log('upload successful!\n' + data);
    //         }
    //     });
    // }
}

