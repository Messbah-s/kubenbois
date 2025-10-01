package fr.kubenbois.server.web.controller;

import fr.kubenbois.server.domain.service.AppUserService;
import fr.kubenbois.server.domain.service.JWTService;
import fr.kubenbois.server.web.controller.dto.LoginRequest;
import fr.kubenbois.server.web.controller.dto.LoginResponse;
import fr.kubenbois.server.web.controller.dto.RefreshDTO;
import fr.kubenbois.server.web.controller.dto.RegisterRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AppUserService appUserService;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;

    public AuthController(AppUserService appUserService, AuthenticationManager authenticationManager, JWTService jwtService) {
        this.appUserService = appUserService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public void register(@RequestBody RegisterRequest request) {
        log.info("POST /auth/register");
        appUserService.registerAppUser(request.username(), request.password());
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        log.info("POST /auth/login");
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.username(),
                request.password()));
        return new LoginResponse(
                jwtService.generateAccessToken(request.username()),
                jwtService.generateRefreshToken(request.username()));
    }

    @PostMapping("/refresh")
    public RefreshDTO refreshToken(@RequestBody RefreshDTO request) {
        log.info("POST /auth/refresh");
        return new RefreshDTO(jwtService.generateAccessToken(jwtService.extractUsername(request.token())));
    }
}
