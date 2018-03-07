CREATE DATABASE "people"
   WITH OWNER "postgres"
   ENCODING 'UTF8'
   LC_COLLATE = 'en_US.UTF-8'
   LC_CTYPE = 'en_US.UTF-8';

CREATE TABLE student (
   student_id SERIAL PRIMARY KEY, --Use an auto incremented number to ID the student
   name       VARCHAR(64),        --Full name can vary in length up to 64 characters
   course     CHAR(3),            --WDI or UXI
   is_passing BOOLEAN,            --(t)rue or (f)alse
   comment    TEXT                --Variable and unlimited in length of content
);

INSERT INTO student (name, course, is_passing, comment)
VALUES
('Jöhnny Ãpplesēēd', 'WDI', 't', 'Knows a little about apples.'),
('Dennis Ritchie', 'UXI', 't', 'Knows something about programming.'),
('Håkon Wium Lie', 'UXI', 't', 'Knows something about CSS.'),
('Brendan Eich', 'WDI', 'f', 'Knows something about JavaScript.'),
('Ingrid Newkirk', 'WDI', 't', 'Knows something about animal rights.'),
('Arvo Pärt', 'UXI', 't', 'Knows something about music.');
