package fr.kubenbois.server.web.mapper;

import fr.kubenbois.server.domain.model.Game;
import fr.kubenbois.server.web.dto.GameDTO;
import org.springframework.stereotype.Component;

@Component
public class GameDTOMapper {
    public GameDTO toGameDTO(Game game) {
        return new GameDTO(
                game.getTitre(),
                game.getUrl(),
                game.getPlayerMini(),
                game.getPlayerMax(),
                game.getDescription(),
                game.getImage()
        );
    }
}
