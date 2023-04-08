class EventsController < ApplicationController

  def new
    @event = Events.new
    render plain: render_to_string(partial: 'form_new', layout: false, locals: { event: @event })
  end

  def index
    @events = Event.all
  end

  def create
    @event = Events.new(params_event)
      if @event.save
        respond_to do |format|
          format.html { redirect_to root_path }
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
