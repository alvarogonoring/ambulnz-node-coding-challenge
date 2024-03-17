# Ambulnz Node Coding Challenge
Backend Node solution for Ambulnz's coding challenge

The original challenge guide can be found here: [https://github.com/AmbulnzLLC/fullstack-challenge/tree/master](https://github.com/AmbulnzLLC/fullstack-challenge/tree/master/backend)

## List of additional used libraries:
- Express
- Typescript
- TypeORM
- Express Async Errors
- Tsyringe
- UUID
- TSX

## How to run:

### Prerequisites:

- Node.js and npm installed: [Node.js Download](https://nodejs.org/en/download)
- Docker installed: [Docker Download](https://www.docker.com/products/docker-desktop/)
- Git installed: [Git Download](https://git-scm.com/downloads)

## Configuration Steps:

### 1. Clone the repository:
```bash
git clone https://github.com/alvarogonoring/ambulnz-node-coding-challenget.git
cd your-project
```
### 2. Install Dependencies with npm:
```bash
npm install
```
### 3. Start the Docker Container for the Database:
```bash
docker-compose up
```
### 4. Run TypeORM Migrations:
```bash
npm run typeorm:run
```
### 5. Start the Server:
```bash
npm run dev
```

## Available Endpoints:

To fetch any api call, just apoint the url for http://localhost:8080

### POST /pizzas

Request Body:
```bash
{
  name: string;
  price: number;
  ingredients: string[];
}
```

### GET /pizzas

### POST /orders

Request body:
```bash
{
  pizzaId: string;
  quantity: number;
}
```

### GET /orders

### GET /orders/:id

