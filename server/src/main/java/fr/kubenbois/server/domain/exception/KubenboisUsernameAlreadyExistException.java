package fr.kubenbois.server.domain.exception;

public class KubenboisUsernameAlreadyExistException extends RuntimeException {
    public KubenboisUsernameAlreadyExistException(String username) {super("Username " + username + " already exist: ");
    }
}
