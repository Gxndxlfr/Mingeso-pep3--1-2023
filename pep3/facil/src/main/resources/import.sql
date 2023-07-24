INSERT INTO prueba_facil(id, enunciado, codigo, respuesta) VALUES (1, '¿Qué imprime el siguiente código?', E'a = 3\nb = 7\nc = 9\na = c %% b\nb = a // b %% c\nprint(a * b + c %% a + b + c)', '10');
INSERT INTO prueba_facil(id, enunciado, codigo, respuesta) VALUES (2, '¿Cual es el resultado al evaluar en Python?', E'a = 8\nb = 4\nc = 2\nd = a // b %% c ** c\nprint(d)', '2');
INSERT INTO prueba_facil(id, enunciado, codigo, respuesta) VALUES (3, '¿Qué se imprime por pantalla?', E'n = 15\nh = 5\nwhile n >=1:\n  if n %% 2 != 0:\n        h = h + n\n  n = n-1\nprint(h//3)', '23');
INSERT INTO prueba_facil(id, enunciado, codigo, respuesta) VALUES (4, '¿Qué valor se muestra por pantalla?', E'a = 8\nb = 9\nc = 12\nprint(a + b * c %% 3)', '8');
