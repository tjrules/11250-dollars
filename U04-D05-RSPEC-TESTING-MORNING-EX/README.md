## Intro to TDD, RSpec, and Learn

## Objectives

1. Define the purpose of a code test.
2. Read the RSpec tests.
4. Understand test output.
5. Write code to make test pass.

### What's a Test?

Tests verify that the code you write behaves and produces the desired result. It can feel like an abstract concept at first, but it's worth starting to understand. Beyond that, understanding testing is important because **test-driven development**, or TDD, is considered the most reliable methodology for delivering quality code.

#### What is TDD? 

The basic idea behind TDD is that you should think about what you want your program to do and how you want your code to behave *before* you start coding. Especially as you begin to write more complex programs or develop applications, bringing this mindfulness to your development process will help you to write code that is robust (doesn't break all the time), flexible (accommodates future change and growth) and is easy for other developers to understand. 

#### How Does TDD Work?


* First, write the test for a specific function of your code. 
* *Then*, write the code to make the test pass. 

Let's walk through an example together.

### Writing a Test

#### Identifying the Desired Behavior

Before we can write any tests, we need to think about what our program needs to do. In other words, what is the desired behavior of our code? 

Let's say you run a popular social networking site. We'll call it MyFace, a name inspired by nothing in particular. 

Your users will fill out their profile information with what year they were born. You will subsequently need to display how old they are on their profile page.

We could conceive of needing to write a method `current_age_for_birth_year` to accomplish this task. 

Our method will need to take in the user's birth year, subtract that from the current year, and return the user's age. 

If the year is currently 2018 and I was born in 1955, when I call the method `current_age_for_birth_year` and provide it my birth year, 1955, by passing that year as an argument, `current_age_for_birth_year(1984)`, I expect it to return `63`. 

*Expressing that narrative in code is called a test!* 

#### Coding Our Test

In an ideal world, I could code this requirement with something like:

```
I expect the method current_age_for_birth_year(1955) to return 63
```

Unfortunately, we don't live in an ideal world. Fortunately, we have the RSpec Testing Framework.

The [RSpec Testing Framework](http://rspec.info/) is a ruby library designed to allow programmers to describe the behavior and outcomes of their programs in a very natural language similar to the above example. 

Let's learn a bit about RSpec.

#### Understanding the Test in the `spec`.rb


In this example, our tests are in:

 `current_age_for_birth_year_spec.rb` 
 
and our actual program and solution will be in:

`current_age_for_birth_year.rb`.

When we run our test program, `spec/current_age_for_birth_year_spec.rb`, that code will load the code in `current_age_for_birth_year.rb` and try to execute `current_age_for_birth_year(1955)` with the expectation that it returns `63`. If so, the test will pass. Anything else will make it fail.

File: `current_age_for_birth_year_spec.rb`

```ruby
require_relative '../current_age_for_birth_year.rb'

describe "current_age_for_birth_year method" do
  it "returns the age of a person based on the year of birth" do
    age_of_person = current_age_for_birth_year(1955)
    
    expect(age_of_person).to eq(63)
  end
end
```

Let's break this code down.

**How your test loads your program:**

The first line of the test:

`require_relative '../current_age_for_birth_year.rb'`

loads the code from our actual program file so that we can use all the code in that file in our test. That line connects our test to our actual program. 

**The `describe` method in RSpec:**

The next line: 

`describe "current_age_for_birth_year method" do` 

is the RSpec language and can basically be ignored for now beyond the actual semantics and meaning. We are simply saying, via valid Ruby, that this test describes the `current_age_for_birth_year` method. 

The only things that are required in this line of code are the `describe` RSpec method and the Ruby `do` keyword, the rest of this line is entirely arbitrary and of our own design. 

When we write tests we use the `describe` RSpec method and strings to describe what we are testing. This code is entirely for you, the programmer, and has very little meaning to RSpec or Ruby.

**The `it` method in Rspec:**

After describing the subject of our test, the method `current_age_for_birth_year`, we use the RSpec method `it` to state an expectation or behavior of that method. 

* `it "returns the age of a person based on their year of birth" do` is very similar to the `describe` line. 

* `it` is an RSpec method

* `do` is a Ruby keyword

`"returns the age of a person based on the year of birth"` is a Ruby string that has no meaning to the code and is only there to provide you, the programmer, with a description of what behavior we're currently testing.

**Testing our method:**

The next three lines are our actual test code and the most important part of the `current_age_for_birth_year_spec.rb` file. It is within this block of code––between `it` and `end`––that we test the functionality of our method.

In order to actually test our code, we need to use the method that this test relies on, that this test is designed to exercise. So the first real line of code in our test is: 

`age_of_person = current_age_for_birth_year(1955)`

What we're doing here is calling a method, `current_age_for_birth_year(1955)`, the very method we're supposed to define and implement, passing it a known argument, `1955`, and assigning the return value of the method to a variable called `age_of_person`. 

What do you think the value of `age_of_person` should be if the method `current_age_for_birth_year` is called with `1955` as the argument?

The next line of code poses that exact question with an expected outcome. Using lots of RSpec methods and syntax, we say, quite colloquially: 

`expect(age_of_person).to eq(63)`

What this line of code means is that we `expect` the value of the variable `age_of_person` to equal `63`. 

That is to say, given that `age_of_person` is the return value of the method `current_age_for_birth_year(1955)`, we can expect that the variable equals `63`, the age of the person born in 1955. That's a test.

Our test loads our code, uses our code in the manner desired, and compares the result of our code with a known outcome so that we know our code behaves as we expected.

We could imagine another specification of the `current_age_for_birth_year` method as another `it` block within the opening `describe` block:

```ruby
it "should return the current year for a person born in year 0" do
  twenty_sixteen = current_age_for_birth_year(0)

  expect(twenty_sixteen).to eq(2016)
end
```

**A test is always going to be about setting up a state with a known result and comparing that known result or expectation to the behavior of your program, thus ensuring that your program behaves as you expected.**

There are many kinds of tests, and test-driven development and RSpec are very complex topics. Just focus on the semantics and meaning of the `*_spec.rb` files for now. It's a tremendously valuable skill to be introduced to this early.

 

## Resources
[Tutsplus -  RSpec Testing for Beginners](http://code.tutsplus.com/articles/rspec-testing-for-beginners-part-1--cms-26716)

<a href='https://learn.co/lessons/intro-to-tdd-rspec-and-learn' data-visibility='hidden'>View this lesson on Learn.co</a>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/intro-to-tdd-rspec-and-learn'>TDD, Rspec, and Learn </a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/intro-to-tdd-rspec-and-learn'>TDD, Rspec, and Learn </a> on Learn.co and start learning to code for free.</p>
