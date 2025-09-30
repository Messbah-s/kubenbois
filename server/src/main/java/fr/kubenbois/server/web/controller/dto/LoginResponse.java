package fr.kubenbois.server.web.controller.dto;

public record LoginResponse(String token, String refreshToken) {
}
