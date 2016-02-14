require "pry"

class Api::SongsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
      dbSongs = Song.all
        render json: {songs: dbSongs}
  end

  def create
      new_song = Song.create( song_params )
      render json: new_song
  end

  def update
      song = Song.find(params[:id])
      song.update(song_params)
      redirect_to "http://localhost:3000/#"
  end

  def destroy

      Song.delete(params[:id])
      dbSongs = Song.all
      render json: {songs: dbSongs}
      # puts root_path
      # redirect_to "/api/songs"
  end

  private

    def song_params
        params.require(:song).permit(:username, :description, :id)
    end
end
