package fr.kubenbois.server.dal.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "game")
public class GameEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String url;

    private Integer playerMini;

    private Integer playerMax;

    private String description;

    private String image;
}
