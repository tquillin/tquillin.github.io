class Song < ActiveRecord::Base

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
      redirect_to "http://localhost:3000"

  end

  def destroy
      Song.delete(params[:id])
      redirect_to root_path
  end

  private

    def song_params
        params.require(:song).permit(:username, :description, :id)
    end
end
