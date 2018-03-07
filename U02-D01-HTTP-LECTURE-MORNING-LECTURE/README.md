# Intro to HTTP / Client & Server 

### Objectives

*After this lesson, students will be able to:*

1. Understand how the internet works.
1. Identify parts of a URL.
1. Explain standard HTTP verbs.
1. Explain how clients and servers interact.
    - frontend vs. backend
1. Define what an API is.
    - REST, JSON, Postman

#### Vocabulary
* Protocol
    - An agreed-upon format for transmitting data between two devices. 
* URL
    - Universal Resource Locator
* Server
    - A web server is a computer system that processes requests via HTTP, the basic network protocol used to distribute information on the World Wide Web. The term can refer to the entire system, or specifically to the software that accepts and supervises the HTTP requests.
* Client
    - A client is a piece of computer hardware or software that accesses a service made available by a server.
* REST
    - Representational State Transfer
* JSON
    - Javascript Object Notation
* API
    - A set of clearly defined methods of communication between various software components.

## Web Fundamentals

#### What is the Internet?

* A network of interconnected computers that communicate over a given set of protocols. [Undersea Cables](https://www.submarinecablemap.com/)

#### Internet Protocol and Addresses
* What is a street address?
  - Address = 10 E 21 GA
* What is a computer address?
  - IP = 74.125.21.113
  An IP address is a unique identifier for devices on a network. Two standards: iPv4 and iPv6. [ipv4 and ipv6](https://en.m.wikipedia.org/wiki/IPv6)

#### Static vs. Dynamic IP Addresses

* servers need static IP addresses
   - Why?
* clients can have dynamic IP addresses
   - Why?


#### Brief discussion about DNS.
"Domain Name Servers (DNS) are the Internet's equivalent of a phone book. They maintain a directory of domain names and translate them to Internet Protocol (IP) addresses.

This is necessary because, although domain names are easy for people to remember, computers or machines, access websites based on IP addresses." [DNS](https://www.youtube.com/watch?v=72snZctFFtA)


## HTTP: the _language_ of the web

- HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

- For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed.


#### What is a URL? What is a URI?

* Uniform Resource Locator (commonly called a web address)
- specifies the location of something on a computer network and the means of retrieving it. 
- A URL is a type of URI. (Uniform Resource Identifier)
   - A uniform resource identifier is a string of characters used to identify a resource on the internet. (document, image, etc)
- URLs often represent web pages, but can also be used for email and file transfer. 
[stack overflow](https://stackoverflow.com/questions/4913343/what-is-the-difference-between-uri-url-and-urn)



* scheme://domain:port/path?query_string#fragment_id

![Anatomy of a URL](https://raw.github.com/ATL-WDI-Curriculum/how-the-internet-works/master/images/anatomy-url.png)

#### Example:

[http://www.google.com:80/search?q=mildred+dresselhaus](http://www.google.com:80/search?q=mildred+dresselhaus)

<table>
  <tr>
    <th>PROTOCOL</th>
    <th>HOST (AKA DOMAIN)</th>
    <th>PORT</th>
    <th>PATH</th>
    <th>QUERY PARAMS</th>
  </tr>
  <tr>
    <td>http://</td>
    <td>www.google.com</td>
    <td>:80</td>
    <td>/search</td>
    <td>?q=mildred+dresselhaus</td>
  </tr>
</table>

#### Why use a query string?

#### Curl demo - jQuery & Google (5 min)

# Client/server, back-end

### What did we do in Unit 1?

- front-end, or client-side, web programming
- DOM manipulation, etc.

### What wil we be doing in unit 2?

- back-end, or server-side, web programming
- interaction with 3rd-party APIs (twitter, google, Star Wars)
- database programming

## What's going on when we request a webpage from a server via our web browser?

1. The browser sends out a request for a resource to the server. Let's imagine the resource that we're requesting is www.georgerrmartin.com/whereIsWindsOfWinter.html
2. The server locates that resource and responds to the client (browser in this case) with the resource. In other words, the server sends the webpage to your browser.
3. The web browser then begins to parse the HTML.
4. Whenever the HTML parser reaches a CSS link or a JavaScript link, it fetches and executes that resource. After each link or script, it continues parsing the HTML.
5. As the browser parses the HTML, it builds _the DOM tree_.

## Client/Server interaction

A client is any application on a computer (or phone, or car, etc.) that can *request* a resource from a server. The server is any application that can respond to those requests.

Curl is a command line tool for transferring data.


Run the following command in your terminal:

`curl https://www.google.com`

`curl http://wttr.in/NewYork`

While there are many different client applications capable of requesting resources from server applications, the client we'll primarily be using is the web browser.

## Viewing HTTP Headers

There are some additional command line utilities that will retreive additional info about the request:
- [HTTP Headers Chrome Extension](https://chrome.google.com/webstore/detail/http-headers/nioieekamcpjfleokdcdifpmclkohddp?hl=en) 
- [cUrl](https://curl.haxx.se/docs/httpscripting.html) - A tool and a library (usable from many languages) for client-side URL transfers

Both tools can be installed using Homebrew: 
- brew install curl

## Viewing HTTP Header Info
By default, header information is usually hidden from the user, because it's simply not useful. Or worse, confusing, because the user can't do anything about them. In order to get access to the payload, we need to do one of a couple different things. If you are working in Chrome or Firefox, check out the live HTTP headers add-on. It's the fastest and easiest way to see the headers for each request and the `curl` command line tool.

| Type | Description | 
| :---: | :---: |  
| Response Codes | Provides info about the state of the request | 
| Request Method | Provide info about the action to perform such as GET,POST,PUT,ect | 
| Content-Type |  Identifies the type of payload being passed back by the server | 
| Media Type | Describes the actual structure of the payload and how things work together. |  
| Media Type | Describes the actual structure of the payload and how things work together. | 
| Custom | Describes the actual structure of the payload and how things work together. |  custom to the particular API that we're interacting with. |

[wikipedia status codes page](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

### Response code animals
[dogs](https://httpstatusdogs.com/)
[cats](https://http.cat/)
## What is an API?

1. **Long Version**: API stands for Application Programming Interface. It's a set of tools, software, instructions, etc that allows you to interact or create software with an external system. It describes how to use a piece of software that someone else has built. 

1. **Short Version:** An API is a set of tools and protocols for interacting with software.

### Have we already used an API?

Examples of API's:
 1. The DOM
   -  A lot of the JavaScript we write in the web browser uses the DOM API, that is, it uses the browser's API to make the DOM do things:
   - Example: when a button is clicked, we can change the font color to red. To do all of that we have to interact with the DOM.
 2. Apple provides API's to developers that allows them to interact with OSX.
 3. Google Maps
  - Allows developers to embed Google Maps into their applications.

## XML and JSON: dialects of data

How is data transferred on the web? How do APIs transfer data?

### Example XML (Extensible Markup Language)

```xml
<guestbook>
  <guest>
    <fname>Terje</fname>
    <lname>Beck</lname>
  </guest>
  <guest>
    <fname>Jan</fname>
    <lname>Refsnes</lname>
  </guest>
  <guest>
    <fname>Torleif</fname>
    <lname>Rasmussen</lname>
  </guest>
  <guest>
    <fname>anton</fname>
    <lname>chek</lname>
  </guest>
  <guest>
    <fname>stale</fname>
    <lname>refsnes</lname>
  </guest>
</guestbook>
```

- XML is fairly annoying to work with, so we'll be using JSON for the APIs we build and all of the 3rd party APIs we work with.

### Example JavaScript Object Notation (JSON)

- JSON is basically the combination of arrays and objects.
- It allows you to store collections of objects.
- Derived from Javascript, but is language independent. 
  - Many languages have developed ways to create and parse JSON.

```json
{
  "firstname": "Jon",
  "lastname": "Zachary",
  "role": "Instructional Associate",
  "pets": [
    {
      "name": "Celeste",
      "type": "Goldfish",
      "favorite_activity": "eating",
      "age": 1.5
    },
    {
      "name": "Lenny",
      "type": "Crawfish",
      "favorite_toy": "Celeste",
      "age": 1
    }
  ],
  "favorite_number": 28
};
```

- more on JSON: [w3 schools](https://www.w3schools.com/js/js_json_intro.asp)


### RESTful Paradigm

- REST stands for Representational State Transfer.
- It is a convention for writing back-end services in that it maps HTTP request types to specific server-side actions:
	- POST -> Create
	- GET -> Read
      - default action in a web browser.
	- PUT -> Update
	- DELETE -> Destroy
- POST, GET, PUT, and DELETE are often called HTTP verbs. There are others but these 4 are the most common.


## Postman

- [Download Postman here](https://www.getpostman.com/)
- "A powerful GUI platform to make your API development faster & easier, from building API requests through testing, documentation and sharing."

## LAB: Play around with Postman (20 min)

Use Postman to practice getting data from the Game of Thrones API.
[Lab U02_D01](https://git.generalassemb.ly/wdi-nyc-dresselhaus/LAB_U02_D01_JSON-Practice)


## Additional Resources
1. [REST](http://www.restapitutorial.com/lessons/whatisrest.html)
1. [What is an API?](https://stackoverflow.com/questions/7440379/what-exactly-is-the-meaning-of-an-api)
1. [URL](https://stackoverflow.com/questions/4913343/what-is-the-difference-between-uri-url-and-urn)
1. [JSON](http://json.org/)


