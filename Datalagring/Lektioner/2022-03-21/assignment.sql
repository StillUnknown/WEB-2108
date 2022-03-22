SHOW DATABASES; # Check that database is empty

CREATE DATABASE assignment;
USE assignment;
SHOW DATABASES;

CREATE TABLE authors
(
    authors_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(50)
);

SELECT * FROM authors; # Check that Authors have been created

INSERT INTO authors(author)
VALUES ('Dan Brown'),
       ('Lee Child'),
       ('Astrid Lindgren'),
       ('Selma Lagerlöf'),
       ('Stephen King'),
       ('Tom Clancy'),
       ('Stan Lee'),
       ('Eva Bergström'),
       ('Elsa Beskow'),
       ('Rune Andreasson')
       ;

SELECT * FROM authors; # Check that authornames was added to authortable

CREATE TABLE books
(
    books_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    description VARCHAR(250),
    year INT NOT NULL,
    price INT NOT NULL
);

SELECT * FROM books; # Check that bookstable was created

INSERT INTO books(title, description, year, price)
VALUES ('DA VINCI CODE', 'A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity', 2003, 149),
       ('Killing Floor', 'Jack Reacher jumps off a bus and walks fourteen miles down a country road into Margrave, Georgia. An arbitrary decision hes about to regret', 1997, 99),
       ('Kerstin och jag', 'Den handlar om Kerstin och Barbro, ett par tvillingar i tonåren, som hamnar på en mindre herrgård på landet', 1945, 49),
       ('Gösta Berlings saga', 'Gösta Berlings saga handlar om livet på landet', 1891, 199),
       ('It', 'The story follows the experiences of seven children', 1986, 179),
       ('Shadow of the dragon', 'A missing Chinese scientist', 2020, 229),
       ('The GOD Project', 'It’s the early 1990’s', 2015, 184),
       ('Benny Blixt', 'Benny Blixt är Sveriges vassaste antihjälte!', 2005, 29),
       ('Tant Grön, Tant Brun och Tant Gredelin', 'Handlar om olika kvinnor', 1918, 599),
       ('Bamse på spegelön', 'Bamse och hans vänner åker båt till en hemlig ö', 2020, 89)
       ;

SELECT * FROM books;

CREATE TABLE categories
(
    categories_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categories VARCHAR(50)
);

INSERT INTO categories(categories)
VALUES ('Horror'),
       ('Drama'),
       ('Sci-Fi'),
       ('Kids'),
       ('Audiobook'),
       ('Educational')
       ;

SELECT * FROM categories; # Check that categories was filled with data

CREATE TABLE compilation
(
    compilation_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    authors_id INT NOT NULL,
    books_id INT NOT NULL,
    categories_id INT NOT NULL
);

SELECT * FROM compilation;

INSERT INTO compilation (authors_id, books_id, categories_id) # JOIN id from all tables
VALUES (1,1,2),
       (2,2,2),
       (3,3,4),
       (4,4,4),
       (5,5,1),
       (6,6,3),
       (7,7,5),
       (8,8,6),
       (9,9,5),
       (10,10,4)
       ;

SELECT * FROM compilation; # Check that table was built correctly

SELECT title, categories FROM books, categories, compilation
WHERE compilation.books_id = books.books_id AND
      compilation.categories_id = categories.categories_id;



SELECT author, title, categories FROM authors, books, categories, compilation
WHERE compilation.books_id = books.books_id AND
      compilation.categories_id = categories.categories_id AND
      compilation.authors_id = authors.authors_id;

SELECT title, categories FROM books, categories, compilation
WHERE compilation.books_id = books.books_id AND
      compilation.categories_id = categories.categories_id AND
      categories='Audiobook';

INSERT INTO categories(categories) # Add murder to bookcategories
VALUES ('Murder')
;

SELECT * FROM categories; # Check that murder have been added to categories

UPDATE authors SET author = 'Christoffer Knaving' WHERE authors_id = 9; # Update name on author_id 9

SELECT * FROM authors; # Check that Elsa Beskow was updated to Christoffer Knaving