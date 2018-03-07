## Rails Forms

### Learning Objectives
-  Review what we learned this morning (ie the "R" in CRUD) 
-  Rails' magical `form_tag` :crystal_ball:
-  See all of the special Rails form helper syntax 
-  Fill out the CUD in our app

To best understand Rails forms, we'll build a form and explain what everything is and what's going on as we go along

## But first, let's set up our rails app


Fork and clone this repo and follow these steps:
- cd into `CatApp`
- run `bundle install`
- run `rails db:create`
- run `rails db:migrate`
- run `rails db:seed`
- run `rails s` and visit `localhost:3000`



### regular HTML form
```html
<form>
  <label>Post title:</label><br>
  <input type="text" id="post_title" name="post[title]"><br>
 
  <label>Post description:</label><br>
  <textarea id="post_description" name="post[description]"></textarea><br>
 
  <input type="submit" value="Submit Post">
</form>
```

### what a Rails form looks like

```ruby
<%= form_for(@post) do |f| %>
  <%= f.text_field :title %>
  <%= f.text_area :description %>
  <%= f.submit %>
<% end %>
```

## The Magic of `form_for`

-  `form_for` is a ruby method into which a Ruby object is "interacted" with. A form that utilizes `form_for` is directly connected with an Active Record model

-  `form_for` is  an advanced form helper that will yield a `FormBuilder` object (ie what we're using as `|f|`) that you use to generate your form elements (text fields, labels, a submit button, etc) and correspond to attributes in the model

-  `form_for`and will also try to route the form to the appropriate action specified in the controller

-  `form_for` automatically knows the standard route (it follows RESTful conventions) for the form data



## Rails paths and URL helpers
We can leverage built-in URL helper methods instead of hard coding route paths into an application.

![screen shot 2018-02-08 at 12 45 31 am](https://user-images.githubusercontent.com/6153182/35957431-86c65e7c-0c69-11e8-9d43-aecb9e4671d7.png)

# CUD

![Alt Text](https://media.giphy.com/media/Lhiu75VagupBm/giphy.gif)

### We have th 'R', but are missing the 'C', 'U', 'D'

So far, the above code has `index` and `show` methods in our controller. But! We are going to need some others in order to create CRUD. Which do we need? What do we get when we run `rails routes`?


## 1) 🚀 Create

### `new`

Before we can do anything with our cat form, we need two new controller methods: `new` and `create`. `new` won't do anything for now -- it'll just send back our `new.html.erb` page. `create`, on the other hand, is going to create a new cat!

Let's add to our `new` method to our `cats_controller.rb`:

```rb
def new
  @cat = Cat.new
end
```

This will create a blank `cat` object that we're going to pass into our view.


### `create`
```ruby
def create
  @cat = Cat.new(name: params[:name], breed: params[:breed])
  if @cat.save
    redirect_to cat_path(@cat)
  else
    render :new
  end
end
```
#### what are `redirect_to` & `cat_path`? What are they doing?

#rails_routes sunglasses: :v:

#### Also... 
Wouldn't it be better to check out our params first before we create the cat? We know what a cat needs to have in order to be created. Let's adjust that.

```rb
def create
  @cat = Cat.new(cat_params)
  if @cat.save
    redirect_to cat_path(@cat)
  else
    render :new
  end
end

private
def cat_params
  params.require(:cat).permit(:name, :breed)
end
```
### strong params

## Views! Using the `form_for` helper

After adding `new` & `create` actions to our controller, it's time to add a corresponding view

THEN I need to create a view template for it on `views/cats/new.html.erb`:

Here, let's write a form:
```ruby
<%= form_for @cat do |f| %>
  <%= f.text_field :name, placeholder: "Name" %>
  <%= f.text_field :breed, placeholder: "Breed" %>
  <%= f.submit "New cat"%>
<% end %>
```

#### and let's add a link to on our `index` page so we can see it

`views/cats/index.html.erb`:

and add in: 
```ruby
<%= link_to "New Cat", new_cat_path %>
```

### `link_to` method
link_to is a Rails built in helper that helps generate an anchor tag. 
-  view helpers are methods that generate HTML snippets to be placed in a view. 

```ruby
<%= link_to "New Cat", posts_path %>

<!-- this generates the HTML... -->

<a href="/cats/new">New Cat</a>
```

As you can see, even though we never added HTML code for the link –– e.g., <a href="..."></a> –– the link_to method rendered the correct tag for us.

### what is/ how'd we get `new_cat_path`?

Rails Routes! :smiley:


## a little more on `form_for` after we've seen it in action


By passing in the attribute as a symbol (e.g. :title) that will automatically tell the form field what model attribute to be associated with.

Because `form_for` is bound directly with the Post model, we need to pass the model name into the Active Record `update` method in the controller.

We're saying that we expect there to be a `cat` in what we get back from the server, and that cat should have the fields `name` and `breed`.

Instead of having to write the form ourselves, with the path and the method and the CSRF token and everything, it's now generated for us with this `form_for` tag! Yay!


### We now have the ability to create a new cat!!


## 2) 🚀 Edit

First thing we have to do is add the `edit` action to our `cats_controller.rb`

```ruby
  def edit
    @cat = Cat.find(params[:id])
  end
```

THEN I need to create a view template for it on `views/cats/edit.html.erb`:
-  Note: the Edit form is very similar to New form
```ruby
<%= form_for @cat do |f| %>
  <%= f.text_field :name, placeholder: "Name" %>
  <%= f.text_field :breed, placeholder: "Breed" %>
  <%= f.submit "Edit cat"%>
<% end %>
```
### and... we created it!
but...  we want to see the `edit` link on the page:
=> in `views/show.html.erb`
-  look at `rails routes` so we can figure out the path

```ruby
<%= link_to "Edit Cat", edit_cat_path(@cat) %>
```
`(@cat)` will transform to the id & make it the right path


### ok, so we refresh... but we still need an UPDATE method


## 3) 🚀 Update

First thing we have to do is add the `update` action to our `cats_controller.rb`

```ruby
  def update
    @cat = Cat.find(params[:id])
    if @cat.update_attributes(cat_params)
      # redirect_to cat_path(@cat)
      redirect_to cats_path
    else
      render :edit
    end
  end
```

Notes:

### Refresh and... EDIT works!!

# 4) 🚀 Delete

### First... I need a `destroy` action 
First thing we have to do is add the `destroy` action to our `cats_controller.rb`

```ruby
  def destroy
    @cat = Cat.find(params[:id])
    @cat.destroy
    redirect_to cats_path
  end
```

When we delete a cat, we can still use the `form_for` helper -- we just need to give it some additional information.
Go to `views/cats/show.html.erb`:

```Ruby
<%= form_for @cat, html: {method: "delete"} do |f| %>
  <%= f.submit "Delete #{@cat.name}?" %>
<% end %>
```
We're telling the `form_for` helper that in the HTML for this particular form, the method should be `delete`.


And we now have CRUD functionality!
