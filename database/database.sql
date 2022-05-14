CREATE DATABASE banco_ensayo;

USE banco_ensayo;

CREATE TABLE users (
  id serial NOT NULL,
  email varchar(25) NOT NULL,
  username varchar(25) NOT NULL,
  rut varchar(12) NOT NULL,
  pass varchar(255) NOT NULL
);