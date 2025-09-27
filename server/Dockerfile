FROM maven:3-amazoncorretto-25-alpine
WORKDIR /app
COPY . /app
RUN mvn install -DskipTests
RUN mv /app/target/*.jar app.jar
LABEL authors="smirs"

ENTRYPOINT ["java", "-jar", "app.jar"]