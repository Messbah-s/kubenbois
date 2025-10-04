package fr.kubenbois.server.web.dto;

public record GameDTO(
        String titre,
        String url,
        Integer playerMini,
        Integer playerMax,
        String description,
        String image
) {
}
