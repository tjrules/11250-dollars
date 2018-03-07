# Ruby Reps!!!

![Ruby from Steven Universe](https://33.media.tumblr.com/427dcbc2b4552249015882eee96c9742/tumblr_nl4i0b06ta1uq5duko1_400.gif)

Tonight we continue our exploration of the Ruby programming language. We will be using it to write servers, but first we need some reps. The assignments below not only reinforce, but also build upon what we talked about in class. Therefore, you will likely have to reference the Ruby documentation for unfamiliar methods and be programming sleuths.

This activity will give you experience:
- Continued practice with a new language
- Differentiating Ruby from JavaScript
- Practice searching through [Ruby documentation](http://ruby-doc.org/core-2.2.0/)

## Setup

Each part will task you with writing code in its own [repl.it](https://repl.it/) The repl name will be given to you at the beginning of each step. 

## Completion

Complete any 4 HW parts. As always, more is better, but healthy living is best.

### Part 1 - Rehashing Batman

Repl name: `batman`

Repl Link: [add your link here]()

Rewrite the code below using a **hash** called `batman`. Rewrite the `msg` variable to reference this new hash vs. the variable references below:

```
f_name = "Bruce"
l_name = "Wayne"
billionaire = true
alter_ego = "Batman"

msg = "#{alter_ego} is the secret identity of #{f_name} #{l_name}, an American #{billionaire ? "billionaire, industrialist, and philanthropist" : "hobo"}."

puts(msg)
```

> Another Batman movie? Will Matt Damon play Robin?

### Part 2 - Fine Wines

Repl name: `wines`

Repl Link: [add your link here]()

Someone with disposable income has hired you to manage his or her wine cellar. They have provided you with data with which you can start.

```rb
wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]
```

1. Create a variable called `saved_for_special_occasion`. Assign it the third hash from the `wine_cellar` array (a Sauvignon Blanc from Wairau River).
1. Create a variable called `swill`. Assign it the fourth hash from the `wine_cellar` array (a Merlot from Tangley Oaks).
1. Your client misentered his data! Change the color of the Rutherford Hill Chardonney from "red" to "white".
1. Add a wine of your choice to the back of the cellar. Structure this wine as a hash, with key-value pairs for `:color`, `:type`, and `:label`.
1. Write a method, `retrieves_random_wine_for_party` which __removes__ a random wine from the cellar. Then use it several times, until you feel that the people upstairs are having a good time.

### Part 3 - Guess the Number

Repl name: `guess_the_number`

Repl Link: [add your link here]()

- Paste in the following code and then *read* it.
- Read each line of code outloud and articulate what each line does.
- Write a comment for *each line* explaining what it does

```rb
SECRET_NUMBER = 7
guessed = false

puts('I\'m thinking of a number between 1 and 10. Can you guess it?')

while !guessed
  guess = gets.chomp.to_i
  if SECRET_NUMBER == guess
    guessed = true
  else
    puts("#{guess}? Try again!")
  end
end

puts('Great job!')
```

### Part 4 - Iteration

Repl name: `students`

Repl Link: [add your link here]()

1. Copy the array below into your file. Inside it, write code to list the students in the array above by printing them to standard out (i.e. in the terminal).
2. Print out only the first initials of the students above (eg, "Yuka" --> "Y.").
3. Create a new array of just the students whose names start with vowels.

```rb
students = [
"Thomas Goodheart",
"Andy Tham",
"Dashamir Brkani",
"TJ Stubbs",
"David Markoc",
"Kristin Davis",
"James Smith",
"Joshua Russell",
"Kate Brenner",
"Jerry Alleyne",
"Cameron Casher",
"Ashley Amin",
"Debbie Chong",
"Jason Karlin",
"Emily Marro",
"Shahzidur Rahim"
]
```
### Part 5 - I Know Where You Code

Repl name: `githubs`

Repl Link: [add your link here]()

1. List the students in the array above by printing their names to standard out (i.e. in the terminal).
2. Print out only the students last names.
3. Create an array of all of the students' GitHub name.

```rb
students = [
 {
  name: "Thomas Goodheart",
  github: "t-0-m-1-3"
 },
 {
  name: "Andy Tham",
  github: "andytham"
 },
 {
  name: "Dashamir Brkani",
  github: "dbrkani"
 },
 {
  name: "TJ Stubbs",
  github: "tjrules"
 },
 {
  name: "David Markoc",
  github: "damark726"
 },
 {
  name: "Kristin Davis",
  github: "kristindavis88"
 },
 {
  name: "James Smith",
  github: "noletubby77"
 },
 {
  name: "Joshua Russell",
  github: "H0sway"
 },
 {
  name: "Kate Brenner",
  github: "katebrenner"
 },
 {
  name: "Jerry Alleyne",
  github: "kjerrya"
 },
 {
  name: "Cameron Casher",
  github: "camcash17"
 },
 {
  name: "Ashley Amin",
  github: "ashleyamin"
 },
 {
  name: "Debbie Chong",
  github: "misterdebbie"
 },
 {
  name: "Jason Karlin",
  github: "jkarlin929"
 },
 {
  name: "Emily Marro",
  github: "emilymarro"
 },
 {
  name: "Shahzidur Rahim",
  github: "shazrahim94"
 }
]
```

### Bonus Readings

- [WAT](https://www.destroyallsoftware.com/talks/wat)
- [Predicate Methods](http://pragmati.st/2012/03/24/the-elements-of-ruby-style-predicate-methods/)
- [Loading Code Libraries](https://practicingruby.com/articles/ways-to-load-code)
- [Methods](http://ruby.bastardsbook.com/chapters/methods/)
