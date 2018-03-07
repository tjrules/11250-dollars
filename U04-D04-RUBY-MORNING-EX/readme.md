# Top Box Office

![](https://media.giphy.com/media/b9aScKLxdv0Y0/giphy.gif)

## Step 1
Create a file called `box_office.rb`
Perform each task and assign the outputs to sensibly-named variables, and record your work in `box_office.rb`.

Transform the following string of ratings into an array of strings:

`"pg-thirteen,pg,r,pg,pg-thirteen,pg-thirteen,pg-thirteen,r,r,r,r,pg-thirteen,r,pg-thirteen,r,r,r,r,r,r,pg-thirteen,r,pg-thirteen,pg-thirteen,pg,r,r,pg,pg"`

Convert the following string of movie titles into an array of movie titles:

`"the hunger games: mockingjay - part 1|penguins of madagascar|horrible bosses 2|big hero 6|interstellar|dumb and dumber to|the theory of everything|gone girl|the pyramid|birdman|nightcrawler|st. vincent|fury|beyond the lights|wild|foxcatcher|the homesman|whiplash|john wick|the equalizer|guardians of the galaxy|the judge|the maze runner|ouija|alexander and the terrible, horrible, no good, very bad day|rosewater|hector and the search for happiness|the book of life|the boxtrolls"`


## Step 2
Perform each of the following tasks with `.each`, and then again with `.map`

Transform the array of ratings from above, replacing "thirteen" with "13"

```ruby
#before
"pg-thirteen"
#after
"pg-13"
```

Transform the above array of ratings such that each string is uppercased

```ruby
#before
"pg-13"
#after
"PG-13"
```

Transform the array of movie titles into an array of hashes with a key of title and a value of that title.

```ruby
#before
"the hunger games: mockingjay - part 1"
#after
{title: "the hunger games: mockingjay - part 1"}
```

Convert the array of scores into an array of hashes with a key of score and a value of the score

```ruby
# Before
[ "65%, 76%", "71%, 68%"]
# After
[ {scores: "65%, 76%"}, {scores: "71%, 68%"} ]
```


### Bonus:

Transform the array of movie titles so that every word in the string is capitalized.

```ruby
# Before
"alexander and the terrible, horrible, no good, very bad day"
# After
"Alexander And The Terrible, Horrible, No Good, Very Bad Day"
```
