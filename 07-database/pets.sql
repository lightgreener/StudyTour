CREATE TABLE pets (
id INTEGER PRIMARY KEY, 
name TEXT,
breed TEXT,
age INTEGER,
dead BOOLEAN
);

--seed data
INSERT INTO pets (id, name, breed, age, dead) VALUES (1, 'Pry', 'unicorm',1000,0);
INSERT INTO pets VALUES (2,'Gig', 'robot',1,1);