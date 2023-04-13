class EventsController < ApplicationController

  def new
  end

  def index
    @events = Event.all
  end

  def create
    @event = Events.new(params_event)
      if @event.save
        respond_to do |format|
          format.html { redirect_to events_path }
      end
      else
        respond_to do |format|
          format.js {render partial: "error" }
      end
      end
  end

  def params_event
    params.require(:event).permit(:title, :content, :start, :finish)
  end

end
