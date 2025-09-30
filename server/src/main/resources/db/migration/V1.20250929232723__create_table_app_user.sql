START TRANSACTION;

CREATE OR REPLACE TABLE app_user
(
    id       BIGINT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255)          NOT NULL,
    password VARCHAR(255)          NOT NULL,
    CONSTRAINT pk_app_user PRIMARY KEY (id),
    CONSTRAINT uc_app_user_username UNIQUE (username)
);

COMMIT;