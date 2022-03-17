SHOW DATABASES;

DROP DATABASE bookface;
CREATE DATABASE bookface;
USE bookface;

CREATE TABLE users
(
    id   INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age  INT         NOT NULL
);

CREATE TABLE messages
(
    id      INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(50)  NOT NULL,
    text    VARCHAR(2000) NOT NULL,
    userId  INT          NOT NULL,
    FOREIGN KEY (userId) REFERENCES users (id)
);

SHOW TABLES;

SELECT * FROM messages;

ALTER TABLE messages
    ADD time DATETIME;

ALTER TABLE messages
    MODIFY time DATETIME NOT NULL;

DESCRIBE users;
DESCRIBE messages;

INSERT INTO users(name, age)
VALUES ('Lars', 19),
       ('Emilie', 31),
       ('Mohammad', 29);

SELECT * FROM users;

INSERT INTO messages(subject, text, userId, time)
VALUES ('SQL', 'Är kul', 1, NOW()),
       ('Vad är kul', 'Inte SQL', 2, NOW()),
       ('Apple', 'Är bäst', 3, NOW());

SELECT NOW(); # NOW() är tiden just nu.

SELECT *
FROM users;

SELECT *
FROM messages;

INSERT INTO users(name, age)
VALUES ('Carl', 25);

SELECT *
FROM messages
INNER JOIN users on messages.userId = users.id;

SELECT users.id, users.name, messages.subject, messages.text, messages.time
FROM messages
LEFT JOIN users on messages.userId = users.id;

INSERT INTO messages(subject, text, userId, time)
VALUES ('SQL', 'Är kul', 1, NOW());