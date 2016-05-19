class PagesController < ApplicationController

	def index
		
	end

	def blog
		@posts = Post.all
	end

  def show
    @posts = Post.find(params[:id])
  end

  def about

  end

  def why

  end

  def contact

  end

	def meeting

	end

 	def partners
  		
 	end

end