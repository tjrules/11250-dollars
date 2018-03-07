# Ruby on Rails!

![freddie](https://git.generalassemb.ly/nyc-wdi-ada/LECTURE_U04_D04_Intro-to-Rails/raw/master/assets/freddie.jpg)

### Learning Objectives

- Revisit the MVC pattern
- Dive into the "convention vs configuration" distinction a little more deeply
- Explore the file structure of a Rails app
- Build a Rails app about dinosaurs!

# What is Ruby on Rails?

Rails is an **MVC framework** for Ruby.

That means it performs a lot of the same functionality as Express: It provides a way for a database to tak to the browser, and controls what happens in the middle.

# Convention over configuration

Many other frameworks, like Express, give you a lot of flexibility. You can put folders wherever you want, create your own naming conventions, come up with your own best practices, etc. Rails is different.

In Rails, we adopt a philosophy of *convention over configuration*. This means that there is a standard *rails way* of doing things - how your file structrue should be organized, how things should be named, etc. This has many added benefits:

1. Once you learn the Rails way, you no longer have to think about how to organize your application code. This frees up all of your decision making time and energy to work on actual feature development.
2. Rails has been around for a **long** time. The "Rails way" is the result of over a decade of careful consideration and refactoring by thousands of people. The result is an extremely cohesive framework which prioritizes efficiency and developer happiness. Once you get the hang of it, you'll begin to appreciate how elegent Rails actually is.

### The Rails way is the right way!

Don't try to go against the grain in Rails. Follow the conventions, and things will just work. Go against them, and you will hate your life.

## Your new Bible

One of the amazing things about Rails (of which there are many) is that the community is **SUPERB** when it comes to documentation.

The [Ruby on Rails Guides](http://guides.rubyonrails.org/) is the defacto resource for all those getting into Rails, as well as seasoned pros. It is extensive, comprehensive, and easy to read. I highly recommend you read it all the way through, and continue to consult with it as you progress along your Rails journey.

The [Getting Started Guide](http://guides.rubyonrails.org/getting_started.html) can't be beat. If you do the whole thing and take your time, Rails should start to become very intuitive for you.

# Our first Rails app

### Get the latest version of rails

Before we create our first Rails app, we are going to make sure that we have the latest version of the Rails gem. Run:

```
gem update rails
```
You might have to use sudo:
```
sudo gem update rails
```
If you don't have Rails already installed, run:
```
gem install rails
```
and you will get the latest automatically.

### rails new

To create a Rails app, we use the `rails new` command. This sets us up with our skeleton Rails app. There are a lot of options that you can provide with the `rails new` command. Try `rails new --help` to take a look at them all.

For this example, we're going to run `rails new` with the `-G` flag. This stops the `rails new` command from initializing a new Git repository, because as we all know, **we never initialize a repo inside another repo**.

```
rails new my_app -G
```

Now if we `cd my_app` and type
```
rails server
```
our Rails server will start up and we can visit our rails app at localhost:3000. Check out all those happy people! We're already doing a website.


### What are all those files???!?!?!?

Let's tak about this huge ass file structure! Open up the new rails app. You'll see a file structure something like this:

```
.
├── Gemfile
├── Gemfile.lock
├── README.md
├── Rakefile
├── app
│   ├── assets
│   │   ├── config
│   │   │   └── manifest.js
│   │   ├── images
│   │   ├── javascripts
│   │   │   ├── application.js
│   │   │   ├── cable.js
│   │   │   └── channels
│   │   └── stylesheets
│   │       └── application.css
│   ├── channels
│   │   └── application_cable
│   │       ├── channel.rb
│   │       └── connection.rb
│   ├── controllers
│   │   ├── application_controller.rb
│   │   └── concerns
│   ├── helpers
│   │   └── application_helper.rb
│   ├── jobs
│   │   └── application_job.rb
│   ├── mailers
│   │   └── application_mailer.rb
│   ├── models
│   │   ├── application_record.rb
│   │   └── concerns
│   └── views
│       └── layouts
│           ├── application.html.erb
│           ├── mailer.html.erb
│           └── mailer.text.erb
├── bin
│   ├── bundle
│   ├── rails
│   ├── rake
│   ├── setup
│   ├── spring
│   ├── update
│   └── yarn
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── cable.yml
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── initializers
│   │   ├── application_controller_renderer.rb
│   │   ├── assets.rb
│   │   ├── backtrace_silencers.rb
│   │   ├── cookies_serializer.rb
│   │   ├── filter_parameter_logging.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   ├── puma.rb
│   ├── routes.rb
│   ├── secrets.yml
│   └── spring.rb
├── config.ru
├── db
│   └── seeds.rb
├── lib
│   ├── assets
│   └── tasks
├── log
├── package.json
├── public
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   ├── apple-touch-icon-precomposed.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   └── robots.txt
├── test
│   ├── application_system_test_case.rb
│   ├── controllers
│   ├── fixtures
│   │   └── files
│   ├── helpers
│   ├── integration
│   ├── mailers
│   ├── models
│   ├── system
│   └── test_helper.rb
├── tmp
│   └── cache
│       └── assets
└── vendor
```

YIKES!!!!

Fortunately, for the apps we do in this class, we'll only need to edit a few of these files...

```
.
├── Gemfile
├── app
│   ├── controllers
│   │   ├── application_controller.rb
│   │   └── we're gonna add more stuff ehre
│   ├── models
│   │   └── application_record.rb (we aren't gonna touch this today)
│   └── views
│       └── layouts
│           └── application.html.erb
│       └── we're gonna add more stuff here
├── config
│   └── routes.rb
└── db
    └── seeds.rb
    └── eventually there's going to be more stuff down here but! not today
```

That looks much more manageable, doesn't it?

(This doesn't mean you can delete all the extras, of course. You know that. I just wanted to make sure.)

# Let's talk about the (M)VC!

So in the end we're gonna be building something like the first express birds app.

Let's try to visit a new page in our app. Type `localhost:3000/welcome` into your browser's url bar. What error do you see?

In Rails, we need to define the routes of our application in our routes file. Edit you `config/routes.rb` file to look like this:

```ruby
Rails.application.routes.draw do
  get("/welcome", {:to => "welcome#index"})
end
```

Let's simplify it

```ruby
Rails.application.routes.draw do
  get "/welcome", {to: "welcome#index"}
end
```

When a hash is the last parameter in a method, we can separate its key/value pairs with commas and remove the braces, making them look like normal parameters.

```ruby
Rails.application.routes.draw do
  get "/welcome", to: "welcome#index"
end
```

This tells our Rails app that we are defining a GET route named `/welcome`. If we go to terminal and type:

```
rails routes
```

...we will see a list of all of the routes that are defined in our `config/routes.rb` file.

Now go back to the browser and refresh the page. You should see a different error. This error is telling us that we do not have a `WelcomeController` class definied in our app.

This is coming from the second argument we provide to the `get` method in our routes file. The first argument is the name of the route (`/welcome`) and the second argument (`to: 'welcome#index'`) is indicating **where** we want requests that are sent to that route to go. In Rails, the router does not do anything with the requests, it only passes them to the controllers. The controllers then handle the requests and send the responses back to the client.

## Controllers

The controllers in a Rails application handle the requests and send responses. Controllers consist of `actions` - public instance methods that are called by the framework when a request comes in matching the actions route.

In our app, we have stated that requests to the **GET** `/welcome` route should be handled by the WelcomeController, specifically the `index` action within the WelcomeController. So let's create one!

- Add a file called `welcome_controller.rb` to you `app/controllers` directory.
- Edit your `welcome_controller.rb` file to look like this:

```ruby
class WelcomeController < ApplicationController
  def index
    # says we want to send back plain text
    render plain: "Welcome!"
  end
end
```
Now when your refresh the page you should see the `Welcome!` text.

What would we change if we wanted to send json back?

```ruby
class WelcomeController < ApplicationController
  def index
    # says we want to send back json
    render json: {message: "Welcome!"}
  end
end
```

### More actions

We have a `get` route in our app that works super well! But if we're trying to build a CRUD app, we need to do more, right? 

- How might we declare other HTTP verbs in our routes?
- Compare the routes we've made so far to your garden variety Express router. How does it differ? How is it the same?

```js
quoteRoutes.get('/', quotesController.index);
quoteRoutes.get('/edit/:id', quotesController.edit);
quoteRoutes.get('/:id', quotesController.show);
quoteRoutes.post('/', quotesController.create);
quoteRoutes.put('/:id', quotesController.update);
quoteRoutes.delete('/:id', quotesController.destroy);
```

### `resources :thing`

We're going to make this rails app show information about dinosaurs.

Rails also allows us to write these routes with just one line.

Add this to `config/routes.rb`:

```rb
resources :dinos
```

Then run `rails routes` again. What do you notice?

Additionally, you can specify the root route like this

```rb
root "welcome#index"
```

## 🚀 LET'S DO TOGETHER: More controllers!

For this code-together, we're going to add another controller.

So far, our dino app has:
- A `welcome` route that displays the text `hello world`
- A `welcome_controller.rb` file
- Dino resources

Together, we'll
- Create a dino controller
- When we hit the `/dinos` endpoint, send back the text "dinosaurs are cool"
- When we hit the `/dinos/:id` endpoint, send back the text "[dinosaur] is cool"
- Hint: We're going to have to get the dino from the [`params` object](http://guides.rubyonrails.org/action_controller_overview.html#parameters)

For this lecture, we're only concerned about the `/dinos` and `/dinos/:id` endpoints ... those are going to be the methods `index` and `show`. 

We can set this up in our route by saying:

```rb
resources :dinos, only: [:index, :show]
```

We'll get to `new`, `create`, `edit`, `update`, and `destroy` later.

Let's take a quick look at the [routing documentation for rails](http://guides.rubyonrails.org/routing.html).

# Views!!!!!!

This is pretty cool but what if we want to render more than just text?

- First we'll start with the `index` action in our WelcomeController. Remove the render line (your index method will be empty).
- Visit `localhost:3000/welcome` in your browser. What error do you see?
- In your `app/views` directory, create a `welcome` folder. Inside of that create a `index.html.erb` file. Fill it with this:
```html
<h1>Welcome!</h1>
```
- Now refresh your browser.

erb is a templating engine, just like ejs was with node/express! Instead of using javascript in the file, we can use Ruby.

#### WTF?! I didn't render anything in my controller action! How did that work?

Another prime example of 'convention over configuration'! We have a WelcomeController with an `index` action defined in `app/controllers`. We have a `app/views/welcome/` directory. In there we have an `index.html.erb`. This is how Rails likes things.

If you don't call render in your controller action, it will call it for you automagically. It doesn't need you to tell it where the view template is if you put it where it expects and name it after your controller action. It just works.

Of course, if you wanted to render a different template, you could do it explicitly in your controller action. ie:

```ruby
def index
  render :something_else
end
```

would render the `app/views/welcome/something_else.html.erb` template.

#### Why don't we have to include an html boilerplate in our templates?

Good question! Rails renders your templates in `layouts`. Checkout `app/views/layouts/application.html.erb`. If you add something here, it will be rendered on every page. The templates themselves are rendered through the `yield` in the body tag.

**Note: There is a built-in generator for creating controllers. [See the documentation](http://guides.rubyonrails.org/command_line.html#rails-generate)**

## 🚀 LET'S DO TOGETHER

Add the remaining views for the `dinos` controller actions. To make the `dinosaur` available, you are going to have to set it to an instance variable in your controller action.

Then in your template, you will have access to that instance variable. Good news! The default template compiler for Rails applications, ERB, has the **exact same syntax** as EJS (yes, we did that on purpose).

### Route Helpers

Another godly thing about Rails is that it provides your with url helper methods so that you don't have to remember every every route in your app. Add the following line to your `app/views/welcome/index.html.erb` template:

```html
<%= link_to "Dinosaurs", dinos_path %>
```


There are two magics going on here -
1. `link_to` is a method available in Rails views that create anchor tags. The first argument is the text that will be displayed in the link. The second is the href for the link.
2. `dinos_path` is a url helper method that returns the about path, or rather, the path that will resolve to the dinosaur route defined in our routes controller.


What if I want to link to a specific dinosaur?

```html
<%= link_to "T-rex", dino_path(id: "T-rex") %>
```

### Using instance variables

There is an important piece of functionality we have been missing from our views so far. Often we have instance variables in our classes (controllers), and we want to access them in our views. Luckily, this is very simple!


First, change the show method in your dinos controller.

```ruby
def show
  dinosaurs = ["T-Rex","Brachiosaurus","Triceratops"]
  @selected_dino = dinosaurs[params[:id].to_i]
end
```

Then, create a `dinos` folder in views, and `show.html.erb` in the `dinos` folder.

```html
<p><%= @selected_dino %> is cool!</p>
```

Now we have access to our variables from the controller!

### Partials

[Partials](http://guides.rubyonrails.org/layouts_and_rendering.html#using-partials) are a very important part of modularizing our views. To avoid repeated code, we want to be able to break our views down into smaller components that we can insert into our views.

> What are some examples you can think of?

Let's make a header and menu for our dinos. All partial files will always start with an underscore, and are included in our other files with the key-word `render`.

1. Create a _dino_header.html.erb file.
2. Create a _dino_menu.html.erb file.
3. Render the partials in your index and show files.

_dino_header.html.erb
```html
<h1>Dinosaurs!</h1>
```

_dino_menu.html.erb
```html
<ul>
<% @dinosaurs.each_with_index do |dino,index| %>
  <li><%= link_to dino, dino_path(id: index)  %></li>
<% end %>
</ul>
```

show.html.erb
```html
<%= render "dino_header" %>
<%= render "dino_menu" %>
<p><%= @selected_dino %> is cool!</p>
```

index.html.erb
```html
<%= render "dino_header" %>
<%= render "dino_menu" %>
<h2>Welcome to the Dinosaur section!</h2>
```

Finally, let's update our controller.

dinos_controller.rb
```ruby
class DinosController < ApplicationController
  def index
    @dinosaurs = ["T-Rex","Brachiosaurus","Triceratops"]
  end

  def show
    @dinosaurs = ["T-Rex","Brachiosaurus","Triceratops"]
    @selected_dino = @dinosaurs[params[:id].to_i]
  end
end
```

### Helpers

[Let's look at the documentation for helpers!](http://api.rubyonrails.org/v5.1/classes/ActionController/Helpers.html)

### Lab

Time to try creating a rails app on your own!

1. In a fresh directory, run `rails new robo_dinos_app -G`
2. Once that's finished building, ensure that you're live on Rails by running `rails server` and then going to `localhost:3000`.
3. After you've confirmed that, `touch` a `robodinos_controller.rb` file and construct a `RobodinosController` that inherits from `ApplicationController`
4. Define `index` and `show` methods that reference the following array: 

```ruby
robo_dinos = [
    {
        name: "Robo-Rex",
        weapon: "Back-Mounted Machine Guns"
    },
    {
        name: "Triceraborg",
        weapon: "Triple-Heated Laser Horns"
    },
    {
        name: "Stegosauroid",
        weapon: "Chainsaw Spines"
    },
    {
        name: "Mecha-Brontosaurus",
        weapon: "Head-Mounted Propulsion Cannon"
    }
]
```

5. Your `index` method should treat the array as an instance variable to be sent to your view
6. Your `show` method should have an instance variable that locks down a specific `@robo_dino` based on `params[:id]`
7. Your `config/routes.rb` file should have a `resources :robodinos` that only give us `index` and `show` routes
8. Your `views/robodinos/index.html.erb` file should loop over the array of `robo_dinos` and render the name of each one as a list item
9. Your `views/robodinos/show.html.erb` file should show both the name AND weapon of choice of the `robo_dino` that corresponds to the `params[:id]` that we pass.

#### Bonus: Refactor your `index.html.erb` file to have `link_to`s instead of just standard list items!
