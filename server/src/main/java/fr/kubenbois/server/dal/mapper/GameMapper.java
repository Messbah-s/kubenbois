package fr.kubenbois.server.dal.mapper;

import fr.kubenbois.server.dal.entity.GameEntity;
import fr.kubenbois.server.domain.model.Game;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class GameMapper {

    public Game toGame(GameEntity entity) {
        Game game = new Game();

        game.setId(entity.getId());
        game.setTitre(entity.getTitre());
        game.setUrl(entity.getUrl());
        game.setPlayerMini(entity.getPlayerMini());
        game.setPlayerMax(entity.getPlayerMax());
        game.setDescription(entity.getDescription());
        game.setImage(entity.getImage());
        return game;
    }
}
