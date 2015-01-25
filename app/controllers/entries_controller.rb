class EntriesController < ApplicationController

  def index
    entries = Entry.all[0..15]
    render json: {entries: entries}
  end

end
