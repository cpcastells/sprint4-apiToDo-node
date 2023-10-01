# 📖 ToDo List API REST

In this project, the code is organized according to the principles of Hexagonal Architecture.

### 📥 Installation

To get started, you first need to clone the repository:

```bash
git clone https://github.com/cpcastells/sprint4-apiToDo-node.git
```

Then, install the project dependencies:

```bash
npm install
```

### 🏁 How To Start

To run the server, first build the TypeScript code into JavaScript by running:

```bash
npm run build
```

This will generate the dist directory with the compiled JavaScript files.

Then, start the server by running:

```bash
npm start
```

This will start the server and make it available at http://localhost:9000.

### 🏗️ Scripts

This project comes with several predefined scripts in the package.json file:

`test`: Runs tests using Jest.

`lint`: Runs ESLint to check code quality.

`lint:fix`: Runs ESLint to fix code style issues.

`start:dev`: Starts the watch mode server.

`build`: Removes the ./dist folder and compiles the TypeScript code into JavaScript in the ./dist folder.

`build:dev`: Compiles the TypeScript code into JavaScript in the watch mode.

`start`: Starts the server using the compiled files in the dist/ folder.

### 📝 Built With

<br>

<div align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-Runtime-green" alt="Node.js"></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-Framework-orange" alt="Express.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript" alt="TypeScript"></a>
  <a href="https://mongoosejs.com/"><img src="https://img.shields.io/badge/Mongoose-ODM-red" alt="Mongoose"></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" alt="MongoDB"></a>
</div>

## 🏗️ Endpoints

### Create Task

- **URL**: `/tasks`
- **Method**: `POST`
- **Request Body**:
  - `task`: Object containing the details of the task.
- **Successful Response**:
  - **Code**: `201 CREATED`
  - **Content**: `{ task: { ... } }`

### Get Tasks

- **URL**: `/tasks`
- **Method**: `GET`
- **Successful Response**:
  - **Code**: `200 OK`
  - **Content**: `{ tasks: [ ... ] }`

### Delete Task

- **URL**: `/tasks/:id`
- **Method**: `DELETE`
- **URL Parameters**:
  - `id`: ID of the task to be deleted.
- **Successful Response**:
  - **Code**: `200 OK`
  - **Content**: `{ "Object deleted": { ... } }`

### Update Task

- **URL**: `/tasks/:id`
- **Method**: `PUT`
- **URL Parameters**:
  - `id`: ID of the task to be updated.
- **Request Body**:
  - `task`: Object containing the updated details of the task.
- **Successful Response**:
  - **Code**: `200 OK`
  - **Content**: `{ "Updated task": { ... } }`
