# U02-D05-INTRO-SQL

## Objectives

-  Understand what SQL and a relational database management system are
-  What it means to create, read, update, and delete records in a database
-  Implementing some basic SQL commands, including INSERT, UPDATE. WHERE, DELETE, ALTER

## What is SQL?  
![2015-10-21-1445410698-8403632-futurecontinued-thumb](https://user-images.githubusercontent.com/6153182/34148578-ccc2dcb0-e46f-11e7-9e05-08241ab5eb98.jpg)

SQL is a universal language, by learning SQL, you will also learn concepts that apply to nearly every data storage system.   SQL tells a database what to do

-  RDMBS
```text
The purpose of the relational model is to provide a declarative method for specifying data and queries: 
users directly state what information the database contains and what information they want from it, 
and let the database management system software take care of describing data structures for 
storing the data and retrieval procedures for answering queries.
```


# Movies! (ie Marker Time)

![Alt Text](https://media.giphy.com/media/fPkWsBe1wWPtu/giphy.gif)

Please grab your marker and on your desk create a table:
-  Title:
-  Main_Character:
-  Year_Released:
-  Length_Minutes:

Using these attributes, please add 5 movies to your table (Year_Released & Length_Minutes are just for example purposes- feel free to make them up!)


## Now let's turn this into code!

[W3 Schools' REPL](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in)



### creating a table


-  Relational Databases store data in a structure we refer to as tables.
You can think of a table in a database a lot like you would a spreadsheet. We define specific columns in our table, and then we store any number of what we refer to as 'records' as rows in our database. A record is just information referring to one specific entity.

-  Each column is an attribute, each row is an object 


### CREATE TABLE

When we create database tables, we need to specify some column names, along with the type of data we are planning to store in each column.

## column names
-   use lowercase when referring to columns in our database
-  "snake_case" we link multiple words together using underscores rather than spaces 

```sql
CREATE TABLE movies (
        id INTEGER PRIMARY KEY,
                title TEXT, 
                main_character TEXT,
                year_released INTEGER,
                length_minutes INTEGER
            );
```

-  Now we have our table!

## Time to insert data into our table
```sql
INSERT INTO movies (title, main_character, year_released, length_minutes) VALUES ("The Shawshank Redemption", "Andy Dufresne", 1994, 127);
```

This `INSERT` statement inserts new rows into a table. You can use the `INSERT `statement when you want to add new records.

# Let's take a look at some other SQL methods

### `UPDATE`
```sql
UPDATE pixar, 
SET Length_minutes = 987654321, 
WHERE title = "Toy Story";
```

### `WHERE` will determine how/ what is updated:
```sql
UPDATE pixar, 
SET Length_minutes = 987654321, 
WHERE director = "John Lasseter";
```

## Be careful when updating!
Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!

![screen shot 2017-12-19 at 4 48 08 am](https://user-images.githubusercontent.com/6153182/34150978-f136e2c8-e477-11e7-978a-35d54850c74a.png)

## `Delete` 

![Alt Text](https://media.giphy.com/media/3ohjV4neA9bVFl76tG/giphy.gif)

![screen shot 2017-12-19 at 4 51 19 am](https://user-images.githubusercontent.com/6153182/34151105-4ffc7b56-e478-11e7-9f71-1e73cb3e4e40.png)

```sql
DELETE FROM pixar
WHERE title="Up";
```

## `ALTER`
Adds a new column to the table

```sql
ALTER TABLE pixar ADD COLUMN genre TEXT; 
```


# Lab Nintendo 64

![2017-07-20-image-16](https://user-images.githubusercontent.com/6153182/34159600-d0d87986-e497-11e7-96b5-fe1233708e0c.jpg)
 





Resources:

https://sqlzoo.net/wiki/SELECT_basics
