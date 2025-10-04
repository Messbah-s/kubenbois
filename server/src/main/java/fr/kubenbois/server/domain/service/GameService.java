package fr.kubenbois.server.domain.service;

import fr.kubenbois.server.dal.dao.GameDAO;
import fr.kubenbois.server.domain.model.Game;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GameService {

    private final GameDAO gameDAO;

    public List<Game> getAllGames() {
        return gameDAO.getAllGame();
    }

    public Game addGame(String titre, String url, Integer playerMini,
                           Integer playerMax, String description, String image) {
        return gameDAO.addGame(titre, url, playerMini, playerMax, description, image);
    }
}
