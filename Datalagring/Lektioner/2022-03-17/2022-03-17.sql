# Visa databaser
SHOW DATABASES;






# Skapa databas
CREATE DATABASE temp;
# Radera databas
DROP DATABASE temp;

CREATE DATABASE api;
# Använd "api" databasen
USE api;

# Skapa tabell Alt.1
CREATE TABLE users
(
    id  INT NOT NULL AUTO_INCREMENT,
    name    VARCHAR(50),
    age INT,
    gender  VARCHAR(10),
    PRIMARY KEY (id)
);

SHOW TABLES;
DROP TABLE users;

# Skapa tabell Alt.2
CREATE TABLE more_users
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(10)
);

DROP TABLE more_users;

# Visa innehåll i tabellen
SELECT * FROM users order by name, age DESC;

# CRUD
# CREATE
INSERT INTO users(name, age, gender)
VALUES ('Lars', 19, 'Male');

INSERT INTO users(name, gender)
VALUES ('Pekka', 'Male');

INSERT INTO users(name, age, gender)
VALUES ('Emelie', 31, 'Female');

INSERT INTO users(name, age, gender)
VALUES ('Emelie', 33, 'Female'),
       ('Mohammad', 29, 'Male'),
       ('Said', 32, 'Male'),
       ('Girlie', 27, 'Female');

# Hämtar alla kolumner
SELECT * FROM users
WHERE NAME LIKE '%L%'
ORDER BY name, age DESC;

SELECT * FROM users
WHERE
        age>25 AND age<33
    AND NAME LIKE '%e%';

SELECT name as 'Namnet På Personen', (age+2) AS 'Ålder om två år'
FROM users
ORDER BY name, age;

INSERT INTO users(name, age, gender)
VALUES('Pelle', 19, 'Male');

# Hämta bara unika värden
SELECT DISTINCT name
FROM users;

# Hämta bara rader där age = 29
SELECT *
FROM users
WHERE age = 29;

#Hämta bara rader där gender = male
SELECT *
FROM users
WHERE gender = 'male';

#Hämta bara rader där gender = female
SELECT *
FROM users
WHERE gender = 'female';

# Hämta bara id = 1
SELECT *
FROM users
WHERE id = 1;

# Hämta bara id = 1
SELECT *
FROM users
WHERE id = 1
AND name = 'Carin'; # Generarar en tom tabell så Carin inte finns i DB

SELECT *
FROM users
WHERE name LIKE '%m%' OR name LIKE '%s%';

SELECT *
FROM users
WHERE name LIKE 'm%' OR name LIKE 's%'; # Namn som början på M eller S

SELECT *
FROM users
WHERE name LIKE '%e' OR name LIKE '%s'; # Namn som slutar på E eller S

SELECT *
FROM users
WHERE name = 'Lars'; # Med = söker du specific på Lars i detta fallet

SELECT *
FROM users
WHERE age BETWEEN 20 AND 30; # Samma sak som age>=20 AND age<=30

SELECT *
FROM users
WHERE age NOT BETWEEN 20 AND 32;

INSERT INTO users (name, age, gender)
VALUES ('Carl', 23, 'Male');

UPDATE users SET gender='Androgyne' WHERE id=9;

DELETE FROM users WHERE id = 10;

SELECT *
FROM users
