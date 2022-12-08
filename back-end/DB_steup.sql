CREATE TABLE products (
product_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
product_name VARCHAR(50),
product_image VARBINARY(max),
product_description VARCHAR(500),
product_brand INT REFERENCES brand(brand_id),
product_type INT REFERENCES types(types_id),
product_price INT
);

INSERT INTO products (product_name, product_image, product_description, product_brand, product_type, product_subtype, product_price) 
VALUES ("Benefit California Kissin ColorBalm", '../images/example-images/02-california-kissin-colorbalm-berry-styled.jpg', 'Moisturizing lip balm', 5 , 8 , 19 ),
("Benefit Hoola Matte Bronzer", '../images/example-images/02-hoola-styled.jpg', 'Prestige Bronzer', 5, 2, 28 );

CREATE TABLE brand (
brand_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
brand_name VARCHAR(50)
);

INSERT INTO brand (brand_name)
VALUES ('almay'), ('alva'), ('anna sui'), ('annabelle'), ('benefit'), ('boosh'), ("burt's bees"), ('butter london'), ("c'est moi"), ('cargo cosmetics'), 
('china glaze'), ('clinique'), ('coastal classic creation'), ('colourpop'), ('covergirl'), ('dalish'), ('deciem'), ('dior'), ('dr. hauschka'), ('e.l.f.'), 
('essie'), ('fenty'), ('glossier'), ('green people'), ('iman'), ("l'oreal"), ('lotus cosmetics usa'), ("maia's mineral galaxy"), ('marcelle'), ('marienatie'), 
('maybelline'), ('milani'), ('mineral fusion'), ('misa'), ('mistura'), ('moov'), ('nudus'), 
('nyx'), ('orly'), ('pacifica'), ('penny lane organics'), ('physicians formula'), ('piggy paint'), ('pure anada'), ('rejuva minerals'), 
('revlon'), ("sally b's skin yummies"), ('salon perfect'), ('sante'), ('sinful colours'), ('smashbox'), ('stila'), ('suncoat'), ('w3llpeople'), 
('wet n wild'), ('zorah'), ('zorah biocosmetiques');

CREATE TABLE types (
types_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
types_name VARCHAR(50),
);

INSERT INTO types (type_name)
VALUES ('blush'), ('bronzer'), ('eyebrow'), ('eyeliner'), ('eyeshadow'), ('foundation'), ('lipliner'), ('lipstick'), ('mascara'), ('nail polish');
