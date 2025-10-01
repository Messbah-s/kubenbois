package fr.kubenbois.server.domain.exception;

public class KubenboisUsernameNotFoundException extends RuntimeException {
    public KubenboisUsernameNotFoundException(String username) {
        super("Username " + username + " not found");
    }
}
