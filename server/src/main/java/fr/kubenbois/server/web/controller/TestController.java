package fr.kubenbois.server.web.controller;

import fr.kubenbois.server.domain.service.GameService;
import fr.kubenbois.server.web.dto.GameDTO;
import fr.kubenbois.server.web.mapper.GameDTOMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class TestController {

    private final GameService gameService;
    private final GameDTOMapper gameDTOMapper;

    public TestController(GameService gameService, GameDTOMapper gameDTOMapper) {
        this.gameService = gameService;
        this.gameDTOMapper = gameDTOMapper;
    }

    @GetMapping("/hello")
    public String getHello() {
        log.info("GET /hello");

        return "Hello World";
    }

    @PostMapping("/game/add")
    public GameDTO newGame(@RequestBody GameDTO gameDTO) {
        log.info("POST /game/add");

        return gameDTOMapper.toGameDTO(gameService.addGame(
                gameDTO.titre(),
                gameDTO.url(),
                gameDTO.playerMini(),
                gameDTO.playerMax(),
                gameDTO.description(),
                gameDTO.image()));
    }
}
