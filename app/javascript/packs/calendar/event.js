// import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"

// import "jquery";
// import "popper.js";
// import "bootstrap";
// import "../../stylesheets/application"
// import '@fortawesome/fontawesome-free/js/all'

// require("../calendar")

// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()

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
      navLinks: true,
      headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: 'addEventButton dayGridMonth,timeGridWeek,timeGridDay'
      },
      expandRows: true,
      stickyHeaderDates: true,
      buttonText: {
         today: '今日',
         month: '月',
         week: '週',
         day: '日'
      },
      allDayText: '',
      height: "auto",
      initialView: 'timeGridDay',
      nowIndicator: true,

      dateClick: function(info){
        const year  = info.date.getFullYear();
        const month = (info.date.getMonth() + 1);
        const day   = info.date.getDate();

        /*global $*/
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

      customButtons: {
        addEventButton: {
          text: '＋',
          click: function() {
            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
            var date = new Date(dateStr + 'T00:00:00');

            if (!isNaN(date.valueOf())) {
              calendar.addEvent({
                title: 'dynamic event',
                start: date,
                allDay: true
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        }
      },

      events: '/events.json',

    });

    calendar.render();

    $(".error").click(function(){
        calendar.refetchEvents();
    });

});