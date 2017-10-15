# React+Boot Presentation and Demo code

## Prerequisite
Node v6.0.0+

### Run the presentation
From the `presentation` dir

run `$ ./gradlew build` (builds boot app and all ui bundle)

In a terminal run `$ java -jar build/libs/react-boot-pres.jar` this will start the Spring Boot app on port `4040`.

In another terminal run `$ npm run watch` this will build/start the UI in Webpack dev server on port `3030`.

Access the presentation at `http://localhost:3030`

Use the left/right arrow keys to move the slides.


### Run the demo
From the `demo/booking-service` dir

run `$ ./gradlew build`

In a terminal run `$ java -jar build/libs/booking-service.jar` this will start the Spring Boot app on port `6060`.

In another terminal, run `$ npm run watch` this will build/start the UI in Webpack dev server on port `5050`.

Access the application at `http://localhost:5050`
