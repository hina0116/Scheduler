import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';

document.addEventListener('turbolinks:load', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, interactionPlugin, timegridPlugin ],
  
      locale: 'ja',
      timeZone: 'Asia/Tokyo',
      firstDay: 1,
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next'
      },
      expandRows: true,
      stickyHeaderDates: true,
      buttonText: {
         today: '今日'
      },
      allDayText: '',
      height: "auto",
      initialView: 'timeGridDay',
      nowIndicator: true,
  
      dateClick: function(info){
        const year  = info.date.getFullYear();
        const month = (info.date.getMonth() + 1);
        const day   = info.date.getDate();
  
        $.ajax({
        type: 'GET',
        url:  '/events/new',
        }).done(function (res) {
  
        $('.modal-body').html(res);
  
        $('#event_start_1i').val(year);
        $('#event_start_2i').val(month);
        $('#event_start_3i').val(day);
  
        $('#event_end_1i').val(year);
        $('#event_end_2i').val(month);
        $('#event_end_3i').val(day);
  
        $('#modal').fadeIn();
  
        }).fail(function (result) {
        alert("failed");
        });
  
      },
      
      eventClick: function(info){
      //表示されたイベントをクリックしたときのイベント(詳しくは次回の記事へ)
      },
      eventClassNames: function(arg){
      //表示されたイベントにclassをcss用に追加する(詳しくは次回の記事へ)
      }
  
      events: '/events.json',
  
    });
  
    calendar.render();
    
    $(".error").click(function(){
        calendar.refetchEvents();
    });
    
});