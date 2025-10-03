package fr.kubenbois.server.domain.exception;

public class UsernameNotFoundException extends RuntimeException {
    public UsernameNotFoundException(String username) {
        super("Username " + username + " not found");
    }
}
