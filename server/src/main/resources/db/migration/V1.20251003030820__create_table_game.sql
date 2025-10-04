START TRANSACTION;

CREATE OR REPLACE TABLE game
(
    id              BIGINT          AUTO_INCREMENT  NOT NULL,
    titre           VARCHAR(255)    NOT NULL,
    url             VARCHAR(32)     NOT NULL,
    player_mini     INT             NOT NULL,
    player_max      INT             NOT NULL,
    description     VARCHAR(1000)   NOT NULL,
    image           VARCHAR(32)     NOT NULL,

    CONSTRAINT pk_app_user PRIMARY KEY (id),
    CONSTRAINT uc_game_url UNIQUE (url),
    CONSTRAINT uc_game_titre UNIQUE (titre)
);

COMMIT;
