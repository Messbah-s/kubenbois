package fr.kubenbois.server.domain.model;

import lombok.Data;

@Data
public class Game {

    private Long id;

    private String titre;

    private String url;

    private Integer playerMini;

    private Integer playerMax;

    private String description;

    private String image;
}
