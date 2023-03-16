class DiariesController < ApplicationController

  def create
    day = Day.find(params[:day_id])
    diary = current_user.diaries.new(diary_params)
    diary.day_id = day.id
    diary.save
    redirect_to day_path(day)
  end

  private

  def diary_params
    params.require(:diary).permit(:content)
  end

end
