package fr.kubenbois.server.web.advice;

import fr.kubenbois.server.domain.exception.UsernameAlreadyExistException;
import fr.kubenbois.server.domain.exception.UsernameNotFoundException;
import fr.kubenbois.server.web.dto.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(UsernameAlreadyExistException.class)
    public ResponseEntity<?> usernameAlreadyExists(UsernameAlreadyExistException e) {
        log.error("User registration error : {}", e.getMessage());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                new ErrorResponse(
                        HttpStatus.UNAUTHORIZED,
                        "Identifiants incorrects",
                        LocalDateTime.now(),
                        List.of("UsernameAlreadyExist")));
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<?> usernameNotFoundException(UsernameNotFoundException e) {
        log.error("User registration error : {}", e.getMessage());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse(
                HttpStatus.UNAUTHORIZED,
                "Identifiants incorrects",
                LocalDateTime.now(),
                List.of("UsernameNotFound")));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> unknownException(Exception e) {
        log.error(e.getMessage());
        e.printStackTrace();
        return ResponseEntity.internalServerError().body(
                new ErrorResponse(
                        HttpStatus.INTERNAL_SERVER_ERROR,
                        "Erreur inconnue",
                        LocalDateTime.now(),
                        List.of("UnknownError")));
    }
}
