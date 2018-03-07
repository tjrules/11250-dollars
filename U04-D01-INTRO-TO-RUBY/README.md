# Intro to Ruby - Data Types & Variables

### Objectives

- Compare and contrast Ruby vs JS // OOP vs Functional Programming
- Identify and describe use cases for Ruby's data types 
- Describe the different types of variables (locals, instance, constants) in Ruby & when to use them
- Methods and loops
- Control flow in Ruby


## Intro 

[Ruby][ruby-ref-lang] is a high-level  programming language that gives us a lot of nice features out of the box.

### "Matz is Nice And So We Are Nice"

![quote-i-believe-that-the-purpose-of-life-is-at-least-in-part-to-be-happy-based-on-this-belief-yukihiro-matsumoto-102-79-90](https://user-images.githubusercontent.com/6153182/35781419-dd249324-09b7-11e8-976d-6c28cb4d9ce4.jpg)

***It is meant to be pretty, unobtrusive, and super readable.***

Ruby was created by Yukihiro Matsumoto a.k.a. "Matz" in the mid-1990s. It is an object-oriented scripting language built on-top of C which Matz created to help programmers enjoy coding!

>"I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of Ruby language."

One of the things that's important to people who write code in Ruby is how the code _reads_. Rubyists are known for wanting beautiful code, and writing it in a way that reads as much like normal English as possible. That's part of what makes it great for beginners, is that it's instantly readable.

Ruby does **not** run in the browser. It is most commonly used for backend web development like  [Rails][ruby-ref-rails].

## Running Ruby

Just run `ruby FILENAME.rb`.  You can also run [`pry`](http://pryrepl.org/) this is a Ruby `repl`.

> [`irb`](https://www.tutorialspoint.com/ruby/interactive_ruby.htm) is the official ruby repl 

# Compare/ Contrast: Ruby vs JS

## Datatypes in JS 

**Question:** What data types have we been using in JavaScript? Let's write them on the board.

- **Booleans** are written as `true` and `false`
- **Numbers** are written as `12` or `9.45`
- **Strings** are written as `"awesome"`
- **Arrays** are written as `['x','y','z']`
- **Objects** are written as `{key: 'value', thing: true, stuff: [1,2,3]}`

## Now, let's see which of those are similar in Ruby, and which are different.

- `"hello world"` is still a **String**
- `[1,2,3,4]` is still an **Array**
- `true` or `false` are still booleans _(technically **TrueClass** / **FalseClass**)_
- `16.2` is a **Float** and`1` is an **Integer** _(technically a FixNum, but you can consider it the same thing)_
- `{keys: ['some', 'values'] }` is called a **Hash**, but works the same
### DIFFERENT
- `nil`, the equivalent of _nothing_ _(technically **NilClass**)_
- there's no Undefined object. _If something is undefined it'll just say so._


## Symbols

A [Symbol](https://ruby-doc.org/core-2.2.0/Symbol.html) is similar to a `String`.  It cannot be mutated or manipulated.  It is used represent _things_ rather than _text_.  Symbols start with `:`.

```ruby
:foo # => :foo
:foo == :foo # => true
:foo == :bar # => false
:foo == 'foo' # false
```

The more you see them the more you will understand the use-case

`symbols` != `strings` (example)


Most importantly, **in Ruby, _everything_ is an object**. That means that each of the above data types have methods & properties just like our JS objects did.

#### Let's recap our data types in Ruby:

- **Strings** are written as `"awesome"`
- **Integers** are written as `12`
- **Floats** are written as `9.45`
- **Booleans** are written as `true` and `false`
- **Symbols** are written as `:phish`
- **Arrays** are written as `['x','y','z']`
- **Hashes** are written as `{key: 'value', thing: true, stuff: [1,2,3]}`

## Exercise!
-  create a ruby file called ```data_types_examples.rb``` and use 3 of the built-in methods for `string`, `numbers`, and `array`




# Variables

Just like JavaScript (and literally every programming language), **we're gonna need some variables to hold stuff.**

_Unlike_ JavaScript, Ruby's variables don't need to be declared.

Where you're now used to:

```js
var genius = "me";
```

We can skip right to the good stuff:

```ruby
genius = "me"
```

## Types of Variables

Variables are just placeholders.

Let's talk about the different types of variables you'll encounter in Ruby. You'll need to use all of them at some point, but some more than others.

In these examples, we'll define a variable, and then we'll write a quick method that spits that variable out, to see if it works.


### a) Local Variable

A local variable (lower_snake_case) is a quick placeholder, and gets forgotten as soon as your method or function is over.

```ruby
some_variable = "donuts"

def some_method
  some_variable
end

some_variable # => "donuts"
              # because we're using it in the same place we defined it

some_method   # Run our method, when it was defined outside that method –
              # NameError: undefined local variable [blah blah blah]
```

These are great when you just need to temporarily store something or quickly give something a readable variable name, but won't need it later.

### b) Instance Variable

An instance variable (lower_snake_case) is a variable that is defined in an instance of an object. That's not meant to be a fancy term - an instance is just an example of an object, one thingy in the great world of things.

```ruby
@some_variable = "donuts" # "donuts"

def some_method
  @some_variable
end

@some_variable # => "donuts"
some_method # => "donuts"
```

Remember that it works this way, because when we get to Objects & Methods later this week, you'll see that instance variables let us store a variable once and use it however many methods we need inside an object.


#### c) Constant

Mostly, we're able to change what a variable's holding if we so choose – constants are designed for the opposite. Constants are meant to be placeholders that _never change_.

```ruby
SOME_CONSTANT = "donuts"
#=> "donuts"

def some_method
  SOME_CONSTANT
end

SOME_CONSTANT
#=> "donuts"

some_method
#=> "donuts"

SOME_CONSTANT = "awesome"
#=> warning: already initialized constant SOME_CONSTANT
```

We can use a constant anywhere in a Ruby application – inside a method, outside a method, across objects & a whole app. But keep in mind, it's meant to be defined _only once_, so we'll use it for things like storing application settings, or other stuff we don't intend to change.



# Methods

In Ruby everything is a [`Method`][ruby-method].  There are NO functions!


```ruby
def add(a, b)
  a + b
end

add(1, 2) # => 3

add(1, 2, 3)
# > ArgumentError: wrong number of arguments (given 3, expected 2)
```

Notice we do not need the keyword `return`.  The last line hit by the method will always be the return value.  This is called an _implicit return_.

We can add default arguments

```ruby
def add(a, b=10)
  a + b
end

add(1, 2) # => 3
add(1) # => 11 (b defaults to 10)
```


We also do NOT use parentheses when calling a method without arguments

```ruby
def say_hi(name = 'World')
  puts "Hello, #{name}!"
end

say_hi('Stacey')
# > Hello, Stacey!
say_hi
# > Hello, World!
```




## Control Flow

Ruby and JS (and many languages) have similar control flow patterns.

### `if`/`elsif`/`else` and ternary


```ruby
def number_message(num)
  if num < 10
    puts 'what a small number'
  elsif num > 10
    puts 'That is a big number!'
  else
    puts 'That number is just right!'
  end
end
```

#### `if`
We also have single-line ifs

```ruby
puts 'you are old!' if age >= 100
```


#### Ternary operator  

A ternary operator looks just like we have seen in JS

`cond ? evaluate_if_cond_is_true : evaluate_if_cond_is_false`

```ruby
num.even? ? "#{num} is even!" : "#{num} is odd!"
```

### `while` loops

```ruby
a = 10
while a.positive?
  puts a
  a -= 1
end
```

> There are also `until` loops. Only use `until` if the condition cannot be written as a positive (without a `!`).

### Binary operators `&&`/`||`

Binary operators are pretty much the same as in JS :)

```ruby
1 && 2 # => 2 (truthy)
nil && 2 # => nil (falsy)
1 && nil # => nil (falsy)

1 || nil # => 1 (truthy)
nil || 2 # => 2 (truthy)
false || nil # => nil (falsy)
```

## Constants

Constants in Ruby always start with a capital letter.  Every `Class` is constant (Like `String` and `Numeric`).  Constants cannot be reassigned.

> Do not treat constants like ES's `const`.  Do not create constant variables inside of methods.  Use them only for classes/modules and for [class constants](https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/constants.html)

## Style Things

The Ruby community is very opinionated about styling.  As you are starting out, you MUST follow [these rules](https://github.com/bbatsov/ruby-style-guide).

Here are the most important rules

**Casing**

* All variables and methods must use `snake_case`
* All classes and modules must use `CamelCase`
* All constants (besides classes and modules) must use `SCREAMING_SNAKE_CASE`



## Note about Sigils

JS does not have Sigils.  In ruby, starting a variable with a sigil (`@`, `@@`, `$`, `:`, or a capital letter) affects the compiler.

Instance variable | Class variable | Global variable | Symbol | Constant
--- | --- | --- | --- | ---
`@foo` | `@@foo` | `$foo` | `:foo` | `Foo`
_ivars_. (next lecture) | Research if interested | Research if interested | [Discussed above](#symbols) | [Discussed above](#constants)

## Lab Time!

Ruby is really fun!


## Resources

* [Ruby docs](http://ruby-doc.org/core-2.4.1/)
  - [`Array`](https://ruby-doc.org/core-2.2.0/Array.html), [`Hash`](https://ruby-doc.org/core-2.2.0/Hash.html), [`String`][ruby-string], [`Symbol`](https://ruby-doc.org/core-2.2.0/Symbol.html), [`Numeric`][ruby-numeric],
  [`Object`](https://ruby-doc.org/core-2.2.0/Object.html), ...
* [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)
* [Reserved words](http://www.java2s.com/Code/Ruby/Language-Basics/Rubysreservedwords.htm)




[ruby-string]: 		https://ruby-doc.org/core-2.5.0/String.html
[ruby-numeric]: 		https://ruby-doc.org/core-2.5.0/Numeric.html
[ruby-fixnum]:		https://ruby-doc.org/core-2.5.0/Fixnum.html
[ruby-float]: 		https://ruby-doc.org/core-2.5.0/Float.html
[ruby-true]:			https://ruby-doc.org/core-2.5.0/TrueClass.html
[ruby-false]: 		https://ruby-doc.org/core-2.5.0/FalseClass.html
[ruby-string]:		https://ruby-doc.org/core-2.5.0/String.html
[ruby-method]: 		https://ruby-doc.org/core-2.5.0/Method.html
[ruby-hash]:			https://ruby-doc.org/core-2.5.0/Hash.html

[ruby-ref-lang]:			https://www.ruby-lang.org/en/about/
[ruby-ref-predicate]: 	http://pragmati.st/2012/03/24/the-elements-of-ruby-style-predicate-methods/
[ruby-ref-sinatra]:		http://www.sinatrarb.com/ 
[ruby-ref-rails]: 		http://rubyonrails.org/
[ruby-ref-pry]:			http://pryrepl.org/

[ref-sigil]:				https://en.wikipedia.org/wiki/Sigil_(magic)
[ruby-ref-sigil]: 		https://mikeyhogarth.wordpress.com/2011/11/07/ruby-sigils/

[js-number]: 			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-bool]: 			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

			
