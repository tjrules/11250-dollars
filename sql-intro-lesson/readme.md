## An Intro to Databases and SQL

### Objectives

* Understand what a relational database management system is
* Understand what it means to create, read, update, and delete records in a database
* Understand what it means for a database to be atomic, consistent, isolated, and durable
* Understand what PSQL is
* Understand some basic SQL commands

Databases provide a means by which to save data that is optimal for creating, reading, updating, and deleting data — known collectively as the CRUD family of operations. A relational database management system, known as an RDBMS, provides a means by which to create relations between groups of data.

## Create, Read, Update, and Delete (CRUD)

### Create

Create a new record in the database. For example, registering for a new account on a web site.

### Read

Reading an existing record in the database. For example, checking your account balance with your bank.

### Update

Updating an existing record in the database. For example, changing your Twitter password.

### Delete

Deleting a record in the database. For example, deleting a post on Facebook.

## Atomicity, Consistency, Isolation, and Durability (ACID)

### Atomicity

*Atomicity* means that a transaction must run from beginning to end or not run at all. Think of a cash withdrawal at an ATM.

### Consistency

*Consistency* means that a transaction on a database leaves the database in a user-defined consistent state. Think of re-tweeting.

### Isolation

*Isolation* means that intertwined transactions act exactly as if they were run serially. Think of two people posting on Facebook at the same time.

### Durability

*Durability* means that the database maintains a log of all _writes_ that can be used to recover from a crash. Think of volatile memory vs non-volatile memory.

## What is PostgreSQL, or PSQL?

* It’s an open source database
* It’s supported by every major operating system
* It’s similar to MySQL and sqlite

## Commands

For all the following commands, you can hit the up and down arrows to traverse the history of the commands you enter.

The hash sign (`#`) at the end of the `psql` prompt indicates a superuser.

### Logging In

#### Log in as the default user

```sql
psql
```

#### Log in as user postgres

```sql
psql -U postgres
```

#### Log in as user postgres to the users database

```sql
psql -U postgres -d users
```

### Working with users

#### Create new user without a role

```sql
CREATE ROLE anewuser WITH LOGIN PASSWORD 'anewpassword';
```

#### Assign the ability to create new databases to a user

```sql
ALTER ROLE anewuser CREATEDB;
```

#### Grant a user all privileges on a database

```sql
GRANT ALL PRIVILEGES ON DATABASE people TO anewuser;
```

#### Drop a user

```sql
DROP USER name
```

#### Connection info

List the database, user, socket, and port related to the current user’s connection.

```sql
\conninfo
```

### Working with databases

#### Create a database

Create a new database owned by the `postgres` user called `people` with encodings all around for `UTF-8`.

```sql
CREATE DATABASE "people"
   WITH OWNER "postgres"
   ENCODING 'UTF8'
   LC_COLLATE = 'en_US.UTF-8'
   LC_CTYPE = 'en_US.UTF-8';
```
#### Connect to a database called people

```sql
\connect people
```

#### List the databases

```sql
\list
```

#### Get all the database users

```sql
\du
```

#### Show all the tables in the current database

```sql
\dt
```

#### Show the current database and user

```sql
\connect
```

#### Drop a database

```sql
DROP DATABASE people;
```

### Generic Commands

#### Help with SQL commands

```sql
\h
```

#### Help with psql commands

```sql
\?
```

#### Quit/Exit

```sql
\q
```
