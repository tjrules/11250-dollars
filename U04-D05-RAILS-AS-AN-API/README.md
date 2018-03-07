# Rails as an API

## Learning Objectives
* Review what an API is and what it does
* Understand the power ActiveRecord has over data in a db
* Use Rails as an API to feed JSON data to a front end

## Where are we coming from?

We've already covered ActiveRecord and all of the fancy
abstraction that it lets us do when it comes to manipulating data from
our database. We know that we can make all of our SQL commands in one or
two words as long as we reference our model correctly. 

We can now go into how to use Rails as strictly a JSON API.

## What is the advantage?

The reason we'd want to use only the API aspects of Rails is because
using ERB to serve data from our back end can get very rigid. Using
only the API stuff from Rails allows us to customize our stack a bit and
use whatever front end we want. 

## Setting up our Database

Spinning up a new Rails API is just a smidge more involved than a
standard Rails app.

```bash
rails new --api my_music_rails_api --database=postgresql -G
```

Let's go through exactly what this command does.

* `rails new` will generate a new rails app. 
* `--api` tells rails that all I want is an instance of ActionController and an instance of ActiveRecord. And even more specifically than that, the instance of ActionController that I want is ActionController::API. 
* `my_music_rails_api` is just the name of my app
* `--database=postgresql` tells rails that the database I want to use is PSQL, instead of the rails default, SQLite.
* `-G` stops rails from instantiating a git repo in our new app.

And we're done. That's all the setup we need to get an API going in Rails.

After we've done this, we have to run 

`rails db:create` 

## Setting up our Model

Once we've gotten our database set up and ready to start holding pieces
of data, we're going to start building our ActiveRecord stuff. So first
thing's first, we're going to generate a new `Song` model using

`rails generate model Song`

And once that finishes, we'll generate a migration to populate our
table: 

`rails generate migration add_columns_to_songs`

And we'll immediately add the following to that `add_columns_to_songs`
migration: 

> ```ruby
> # db/migrate/TIMESTAMP-add-columns-to-songs-migration.rb
> add_column :songs, :title, :string
> add_column :songs, :artist, :string
> add_column :songs, :added_by, :string
> ```


After we add that to our migration, we run the following in our
terminal: 

`rails db:migrate`

## Seeding our database

So we're almost done! All we need to do is give ActiveRecord some data
to hold onto so that we can begin testing.

 ```ruby
 # db/seed.rb
 Song.create([
 {
    title: "Havana",
    artist: "Camila Cabello ft. Daddy Yankee",
    added_by: "Jase"
  },
  {
    title: "Gasoline",
    artist: "Chris Cornell",
    added_by: "Joe"
  },
  {
    title: "Gotta Jibboo",
    artist: "Phish",
    added_by: "Avi"
  }
])

puts "#{Song.count} songs just now!"
```

Once we've written this, we'll jump back into our terminal and run 

`rails db:seed`

And then we're done! We now have everything we need to start testing in
our `rails console`

## You guys do!

Use `rails c` to find all of the songs in our database, and then find
only one based on its id.

## Setting up our Controller

Unfortunately, using

`rails generate controller Songs`

won't be good here; that'll generate views that we definitely don't want
to do.

So we'll just do things the old fashioned way and say 

`touch app/controllers/songs_controller.rb`

We'll then add our `index` and `show` methods, calling our
`ActiveRecord` model for each.

Since we're not rendering any views, we have to explicitly tell our
controller what to do with the data we get back from ActiveRecord. That
said, we're going to tell our controller that we want `json` data back,
so we'll just write `render json: ` and then give it our data to render.

## You guys do!

Write your `index` and `show` methods


## Testing

We have two ways of testing our API. One is through Postman, hitting
routes and seeing what data we get back. 

Next, we have our browser to test our `get` routes, `index` and `show`.

We can also test ActiveRecord directly using our `rails console` so that
we can ensure that we're getting and giving exactly what we want.

## Create, Update, Delete

Writing these methods are a little more involved. All three of them have
a chance of failing due to some error, so we'll need to have some sort
of failsafe if anything goes wrong. 

```ruby

# app/controllers/songs_controller.rb

def create
  @song = Song.new (song_params)

  if @song.save
    puts "OK"
    render json: @song
  else
    raise "Error!"
  end
end

private

def song_params
  params.permit(:title, :artist, :added_by)
end

```

The main difference between `create` and `update` is before we make the
conditional in `update` we need to lock down the specific song we're
updating. So we'll add the same line from our `show` method,

`@song = Song.find(params[:id])`

And then we do the same conditional.

For `delete`, we do the same thing again by locking down a specific
song, and then writing a conditional.

### That private method?

Rails gets mad at us if we don't "whitelist" editable parameters. So we
can't change or create anything directly due to Rails's built-in CSRF
Authentication system. CSRF stands for Cross-Source Resource Forgery,
something you should look into if you're at all curious about cyber
security. The private method allows us to allow those given parameters
to be changed. Without that, Rails will stop any and all `post` or `put`
requests that attempt to change those params. Rails will still stop any
`post` or `put` requests that attempt to change any params that haven't
been included in `params.permit`.


## Cleaning up

I spy with my little eye the same line of code appearing in three separate
spaces. Specifically, I see the

`@song = Song.find(params[:id])`

that we're using in the `update`, `show`, and `delete` methods. 

So what do we do with lines of code that repeat themselves? We turn them
into methods. 

So we'll define another private method, just underneath (or above)
`song_params`. As long as we define it under the word `private` it won't
matter.

```ruby

def set_song
 @song = Song.find(params[:id])
end

```

Once we've done that, we can go straight to the top of our controller
and add the following: 

`before_action :set_song, only: [:show, :update, :delete]`.

Now, our controller will call our private method before the given
methods. Clean code!!

## Lab

Do what we did just now, but with books (each book should have a `title`, `author`, `genre` and `added_by` column) instead of songs.

Things to consider: 

* What is the command to generate a model?
* What is the command to generate a migration?
* How do we manipulate our database structure?
* What pieces of information should we have about our books?
* How might we keep our code clean and DRY?
* What format should our data be once we have it?
