package fr.kubenbois.server.web.dto;

import java.util.List;

public record InitAppDTO(
        List<GameDTO> games
) {
}
