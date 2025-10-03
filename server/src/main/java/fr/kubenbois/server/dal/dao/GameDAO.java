package fr.kubenbois.server.dal.dao;

import fr.kubenbois.server.dal.entity.GameEntity;
import fr.kubenbois.server.dal.mapper.GameMapper;
import fr.kubenbois.server.dal.repository.GameRepository;
import fr.kubenbois.server.domain.model.Game;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class GameDAO {

    private final GameRepository gameRepository;
    private final GameMapper gameMapper;

    @Cacheable("games")
    public List<Game> getAllGame() {
        return gameRepository.findAll().stream().map(gameMapper::toGame).collect(Collectors.toList());
    }

    public Game addGame(String titre, String url, Integer playerMini, Integer playerMax, String description, String image) {
        GameEntity entity = new GameEntity();
        entity.setTitre(titre);
        entity.setUrl(url);
        entity.setPlayerMini(playerMini);
        entity.setPlayerMax(playerMax);
        entity.setDescription(description);
        entity.setImage(image);

        return gameMapper.toGame(gameRepository.save(entity));
    }
}
