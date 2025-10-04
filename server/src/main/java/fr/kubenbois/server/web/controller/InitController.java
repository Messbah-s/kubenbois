package fr.kubenbois.server.web.controller;

import fr.kubenbois.server.domain.service.GameService;
import fr.kubenbois.server.web.dto.*;
import fr.kubenbois.server.web.mapper.GameDTOMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/init")
@AllArgsConstructor
public class InitController {

    private final GameService gameService;
    private final GameDTOMapper gameDTOMapper;

    @GetMapping("")
    public InitAppDTO initApp() {
        log.info("GET /init");

        return new InitAppDTO(gameService.getAllGames().stream().map(gameDTOMapper::toGameDTO).toList());
    }
}
