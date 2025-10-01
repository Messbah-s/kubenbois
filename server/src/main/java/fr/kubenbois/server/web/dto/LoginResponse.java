package fr.kubenbois.server.web.dto;

public record LoginResponse(String token, String refreshToken) {
}
