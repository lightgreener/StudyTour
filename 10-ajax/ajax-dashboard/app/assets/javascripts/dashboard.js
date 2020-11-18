$(document).ready(function () {
    $.getJSON('/animals').done(function (results){
        results.forEach(function (animal){
            // console.log(results);
            $('<p></p>').text(`${animal.name} is ${animal.species}`).appendTo('body');
        });
    });
    // ruby 在 erb 文件中的写法
    // <% @animals.each do |animal| %>
    // <p><%= animal.name %> is <%= animal.species %></p>
    // <% end %>
    // poll
    setInterval(function(){
        $.getJSON('/info').done(function (info) {
            // console.log(info);  // display all info
            // console.log(info.brother);  // display on this page
            $('#brother').text(info.brother);
            $('#time').text(info.time);
            $('#uptime').text(info.uptime);
        });

    },2000);

//  下面是上面的个体的写法
    // setInterval(function ()  {
    //     $.get('/brother').done( function (name){
    //         $('#brother').text(name);
    //         // console.log(name);
    //     })
    // }, 4000);
    //
    //     setInterval(function () {
    //         $.get('/time').done(function (output) {
    //             $('#time').text(output);
    //         });
    //     },1000);
    //
    //     // setInterval(function () {
    //     //     $.get('/uptime').done(function (data) {
    //     //         $('#uptime').text(data);
    //     // });
    //     // },3000);
    //
    //     // 同上， 就是简化的写法
    //     setInterval(function () {
    //             $('#uptime').load('/uptime');
    //     },3000);

});
