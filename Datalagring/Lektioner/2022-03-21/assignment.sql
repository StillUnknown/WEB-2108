SHOW DATABASES; # Check that databases are empty

CREATE DATABASE IF NOT EXISTS assignment; # creates database if name isent already taken
USE assignment;

SHOW DATABASES; # To check that database was created

CREATE TABLE author
(
    author_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author_name VARCHAR(50) NOT NULL
);

CREATE TABLE categories
(
    categories_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categories_name VARCHAR(50)
);

CREATE TABLE books
(
    books_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    authorId INT NOT NULL,
    FOREIGN KEY (authorId) REFERENCES author (author_id),
    description VARCHAR(500),
    year INT,
    price INT NOT NULL,
    categoriesId INT,
    FOREIGN KEY (categoriesId) REFERENCES categories (categories_id)
);

SHOW TABLES; # check that tables were created

SELECT * FROM author;
SELECT * FROM categories;
SELECT * FROM books;

INSERT INTO categories(categories_name)
VALUES ('Horror'),
       ('Drama'),
       ('Sci-Fi'),
       ('Kids'),
       ('Audiobook'),
       ('Educational'),
       ('Murder')
       ;

SELECT * FROM categories; # check that categories were added

INSERT INTO author(author_name)
VALUES ('Dan Brown'),
       ('Lee Child'),
       ('Astrid Lindgren'),
       ('Selma Lagerlöf'),
       ('Stephen King'),
       ('Tom Clancy'),
       ('Stan Lee'),
       ('Eva Bergström'),
       ('Elsa Beskow'),
       ('Rune Andreasson');

SELECT * FROM author; # check that author was added

INSERT INTO books(title, authorId, description, year, price, categoriesid)
VALUES ('DA VINCI CODE', 1,
        'A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity',
        2003, 149, 1),
       ('Killing Floor', 2,
        'Jack Reacher jumps off a bus and walks fourteen miles down a country road into Margrave, Georgia. An arbitrary decision hes about to regret',
        1997, 99, 1),
       ('Kerstin och jag', 3,
        'Den handlar om Kerstin och Barbro, ett par tvillingar i tonåren, som hamnar på en mindre herrgård på landet',
        1945, 49, 2),
       ('Gösta Berlings saga', 4,
        'Gösta Berlings saga handlar om livet på landet',
        1891, 199, 3),
       ('It', 5,
        'The story follows the experiences of seven children',
        1986, 179, 4),
       ('Shadow of the dragon', 6,
        'A missing Chinese scientist',
        2020, 229, 5),
       ('The GOD Project', 7,
        'It’s the early 1990’s',
        2015, 184, 6),
       ('Benny Blixt', 8,
        'Benny Blixt är Sveriges vassaste antihjälte!',
        2005, 29, 5),
       ('Tant Grön, Tant Brun och Tant Gredelin', 9,
        'Handlar om olika kvinnor',
        1918, 599, 5),
       ('Bamse på spegelön', 10,
        'Bamse och hans vänner åker båt till en hemlig ö',
        2020, 89, 1)
       ;

SELECT * FROM books; # check that books was added

# CRUD operations and SQL questions

SELECT books.title, categories.categories_name # title and its respective category
FROM books
INNER JOIN categories on books.categoriesId = categories.categories_id;

SELECT * FROM books, categories, author # get all info from books, categories and author
WHERE
        books.authorId = author.author_id AND
        books.categoriesId = categories.categories_id;

SELECT title, author_name, categories_name # get only title, author_name and categories:name
FROM books, author, categories
WHERE books.authorId = author.author_id AND
      books.categoriesId = categories.categories_id;

SELECT books.title, categories.categories_name # show books related to category ID 5
FROM books
LEFT JOIN categories on books.categoriesId = categories.categories_id
WHERE categories_id = 5;

SELECT * FROM categories # show all categories connected to book, even categories without book
LEFT JOIN books on books.categoriesId = categories.categories_id;

SELECT books.title, categories.categories_name # show books and its connected category
FROM books
LEFT JOIN categories on books.categoriesId = categories.categories_id;

INSERT INTO author(author_name) # try adding Christoffer Knaving to author
VALUES ('Christoffer Knaving');

SELECT * FROM author; # check that Christoffer Knaving was added to author

INSERT INTO books(title, authorId, description, year, price)
VALUES ('How to sell you body', 11, 'Teaches the reader how to seccessfully sell they body at Rosenlund', 2022, 1);

SELECT books.title, categories.categories_name # check that newly created book without category has no category
FROM books
LEFT JOIN categories on books.categoriesId = categories.categories_id;

DELETE FROM books # delete book with bookId 1
WHERE books_id = 1;

SELECT * FROM books; # check that book with bookId 1 was deleted

UPDATE author SET author_name='Michaela Andreasson' # try to update author with Id 5 to Michaela Andreasson
WHERE author_id = 5;

SELECT author.author_name # Check that author with Id 5 was updated to Michaela Andreasson
FROM author
WHERE author_id = 5;

# DROP DATEBASE assignment