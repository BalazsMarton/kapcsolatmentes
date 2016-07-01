class PagesController < ApplicationController

	def index
		@posts = Post.order('created_at DESC').limit(6)
	end

	def blog
		@posts = Post.order('created_at DESC')
	end

  def show
    @posts = Post.find(params[:id])
  end

  def about

  end

  def why

  end

	def meeting

	end

 	def partners
  		
 	end

end