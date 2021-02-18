-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Data base name "fs-react-shopping"

CREATE TABLE shopping
(id SERIAL PRIMARY KEY,
name VARCHAR (80) NOT NULL,
quanity DECIMAL (4,2) NOT NULL,
unit VARCHAR (20) NOT NULL,
purchased BOOLEAN DEFAULT FALSE);

INSERT INTO "shopping" (name, quanity, unit, purchased)
VALUES ('Banana', 2, 'Bushel', TRUE),
('Apples', 3, 'Individual', FALSE),
('Carrots', 4, 'Bunch', FALSE);
