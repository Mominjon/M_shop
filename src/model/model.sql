CREATE DATABASE M_NEW_shop;

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name VARCHAR(500),
    user_surname VARCHAR(250),
    user_password VARCHAR(50),
    role_user VARCHAR(150) DEFAULT user
);

CREATE TABLE product(
    product_id serial,
    product_name VARCHAR(300),
    product_text text,
    product_photo text,
    product_like int DEFAULT 0
)