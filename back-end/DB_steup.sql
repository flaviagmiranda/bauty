CREATE TABLE brand (
brand_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
brand_name VARCHAR(50)
);

INSERT INTO brand (brand_name)
VALUES ('almay'), ('alva'), ('anna sui'), ('annabelle'), ('benefit'), ('boosh'), ('butter london'), ('cargo cosmetics'), 
('china glaze'), ('clinique'), ('coastal classic creation'), ('colourpop'), ('covergirl'), ('dalish'), ('deciem'), ('dior'), ('dr. hauschka'), ('e.l.f.'), 
('essie'), ('fenty'), ('glossier'), ('green people'), ('iman'), ('lotus cosmetics usa'), ('marcelle'), ('marienatie'), 
('maybelline'), ('milani'), ('mineral fusion'), ('misa'), ('mistura'), ('moov'), ('nudus'), 
('nyx'), ('orly'), ('pacifica'), ('penny lane organics'), ('physicians formula'), ('piggy paint'), ('pure anada'), ('rejuva minerals'), 
('revlon'), ('salon perfect'), ('sante'), ('sinful colours'), ('smashbox'), ('stila'), ('suncoat'), ('w3llpeople'), 
('wet n wild'), ('zorah'), ('zorah biocosmetiques');

CREATE TABLE products (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
brand INT REFERENCES brand(brand_id),
product_name VARCHAR(80),
price INT,
price_sign VARCHAR(4),
currency VARCHAR(5),
image_link VARCHAR(800),
product_link VARCHAR(800),
website_link VARCHAR(800),
product_description VARCHAR(1000),
rating INT,
category VARCHAR,
product_type VARCHAR
);

INSERT INTO products (brand, product_name, price, price_sign, currency, image_link, product_link, website_link, product_description, rating, category, product_type) 
VALUES 
(14, 'Lippie Pencil', 5.0 ,'£', 'GBP', 'https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769', 'https://colourpop.com/collections/lippie-pencil', 'https://colourpop.com', 'Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!', null, 'pencil', 'lip liner'),
(14, 'Blotted Lip', 5.50, '£', 'GBP', 'https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076', 'https://colourpop.com/collections/lippie-stix?filter=blotted-lip', 'https://colourpop.com', 'Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! The formula is lightweight, matte and buildable for light to medium coverage.', null, 'lipstick', 'lipstick'),
(24, 'Creme to Powder Blush', 3.50, '£', 'GBP', 'https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-creme-to-powder-blush.png', 'https://www.purpicks.com/product/lotus-cosmetics-usa-creme-powder-blush/', 'https://purpicks.com/', 'A cream to powder blush made with all-natural ingredients that applies like a soft cream but finishes like a silky powder. Antioxidant-rich botanicals help moisturize the skin, while natural pigments provide long-lasting buildable colour for a healthy, radiant glow. Made with natural and organic ingredients.', null, 'cream', 'blush'),
(24, 'Eye Shadow Pallete Mesmerize', 15.00, '£', 'GBP', 'http://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-eye-shadow-palette-mesmerize.png', 'https://www.purpicks.com/product/lotus-cosmetics-usa/', 'https://purpicks.com/', 'A four-color eyeshadow palette infused with natural minerals and antioxidant rich extracts to help prevent fine lines and wrinkles. Easily blendable shades give you the ability to create effortlessly natural or dramatic looks. Made with natural and organic ingredients.', null, 'pallete', 'eyeshadow'),
(21, 'Cloud Paint', 22.00, '£', 'GBP', 'https://static-assets.glossier.com/production/spree/images/attachments/000/001/241/portrait_normal/CP_PDP_02.jpg?1488382023', 'https://www.glossier.com/products/cloud-paint', 'https://www.glossier.com', 'With Cloud Paint, we set out to make blush the high point of your routine. The pillowy, gel-cream formula is designed to be the most user-friendly cheek color in existence. If you can finger paint, you can Cloud Paint—simply dab it onto cheeks wherever you please. It’s seamless, sheer, and buildable (i.e. it’s hard to accidentally apply too much). Inspired by gradient pink NYC sunsets, the shades are optimized to work across a wide range of skin tones for a healthy, flushed-from-within glow.', null, 'cream', 'blush'),
(34, 'Super Luscious Mascara', 7.0, '£', 'GBP', 'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw97d7c9f2/ProductImages/Eyes/Super_Luscious_Mascara/superlusciousmascara_main.jpg?sw=390\u0026sh=390\u0026sm=fit', 'https://www.nyxcosmetics.com/super-luscious-mascara/NYX_122.html?cgid=mascara', 'https://www.nyxcosmetics.com', 'Everyone will notice your gorgeous lashes with our Super Luscious Mascara Collection. Featuring seven different brushes, each fragrance-free mascara has something unique to offer. (Plus, they’re formulated with keratins, vitamins and naturally-derived waxes to nourish lashes!) There’s a Super Luscious Mascara for your essential lash looks.', null, 'mascara', 'mascara')  ;