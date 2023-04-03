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
    //日付をクリックしたときのイベント(詳しくは次回の記事へ)
    },
    eventClick: function(info){
    //表示されたイベントをクリックしたときのイベント(詳しくは次回の記事へ)
    },
    eventClassNames: function(arg){
    //表示されたイベントにclassをcss用に追加する(詳しくは次回の記事へ)
    }

  });

  calendar.render();
});