## Considerations

### Code quality

1. ESLint should be used to enforce code pattern.
2. Jest is used for unit testing.

### Technologies

1. The system is built using NodeJs 20, ExpressJs, Joi/Celebrate and Typescript.
2. Tsyringe is used for dependency injection.

### Patterns

1. The app uses dependency injection to inject the resources.

### CI/CD

1. Github Actions is used for unit tests, linting and sonarqube analysis.
2. Sonar Cloud is used for code quality analysis.

### Running the project

1. Clone the repository.
2. Runnning using docker:
```bash
docker build -t tmg-api . 
docker run -p 80:3000 tmg-api
```
3. Run using npm:
```bash
npm install
npm start
```
4. Swagger is available on `http://localhost:3000/docs`.

