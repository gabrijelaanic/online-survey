# Online Survey 

This is a web application for an online survey. The web application is used to gather feedback on the films screened during the festival.

It is a single-page web application with two pages: the index page that displays the survey form; and a success page that the user is redirected to after form submission.


## Table of Contents

- [Tech Stack](#tech-stack)
- [Run React App Locally](#run-react-app-locally)
- [Run Server Locally](#run-server-locally)
- [API Reference](#api-reference)
## Tech Stack

**Client:** React - TypeScript and Chakra UI

**Server:** Express - Node.js


## Run React App Locally

Clone the project

```bash
 https://github.com/gabrijelaanic/online-survey.git
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

When App is ready, open in browser

```bash
   http://localhost:5173/
```


## Run Server Locally

Clone the project (if you didn't already)

```bash
  https://github.com/gabrijelaanic/online-survey.git
```

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Server ready with the message

```bash
  Server started on port 5000
```


## API Reference

#### Get survey form

```http
  GET /api/v1/survey
```

#### Create a survey answers record

```http
  POST /api/v1/survey/:id/answers
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Survey Id |
