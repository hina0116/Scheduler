import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';

document.addEventListener('turbolinks:load', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, interactionPlugin, timegridPlugin ]
  });


  locale: 'ja',
  timeZone: 'Asia/Tokyo',
  firstDay: 0,
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
  allDayText: '終日',
  height: 'auto',

  calendar.render();

});