class WelcomeController < ApplicationController
  def index
  end

  def create
      new_song = Song.create( song_params )
      render json: new_song
  end

  def destroy
      Song.delete(params[:id])
      redirect_to root_path
  end

  private

    def song_params
        params.require(:song).permit(:username, :description)
    end
end
