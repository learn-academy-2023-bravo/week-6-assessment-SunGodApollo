# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# this part is showing that we are in the child BlogPostsController of the ApplicationController parent class
# we will add all of our controller methods here that pertain to certain CRUD actions and HTTP verbs
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # this section is part of R in CRUD and GET http verb. It is accessing all of the blog posts inside of our BlogPost model that was created by the developer
    @posts = BlogPost.all
  end

  # ---3)
  # Also part of R in CRUD and GET, we create a show method so that we can see the BlogPost content by using .find and params to show one item in the model.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # we make a new method which is part of the GET http verb. This allows the user to see a form in order to create a new @post, however, the user is only 'getting' a form to create, which is the next step.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # create is part of C in CRUD and POST verb. This allows users to create new instances and add them to the database as long as the @post is valid within our Rspec validations. We then add a redirect that allows the page to redirect automatically after the @post was created. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Edit is part of the GET action since we are 'getting' the users input via a form. It allows the user to see a form in order to input what they want to edit, then they submit it, which leads to the next step. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This is part of the U in CRUD and PATCH http verb. Once the user fills out the form via our edit CRUD action, it is then submitted to update an existing value inside of our model as long as it is valid per our Rspec tests. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # Destroy represents the D in CRUD and DELETE http verb. This will remove information from the database that a user wishes to remove. If the user does destroy @post, then they are redirected to landing page.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # private means that this method can only be accessed inside of this class. This prevents other classes from accessing the method blog_post_params, also known as strong params. We add private to prevent complications, and since only this class needs it.
  private
  def blog_post_params
    # ---10)
    #This is what we use to reference in our Create CRUD action. These are the params that the user will input to update a certain @post. This states that blog_post_params requires a blog post and allows :title along with :content.
    params.require(:blog_post).permit(:title, :content)
  end
end
