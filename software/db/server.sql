CREATE DATABASE parking;
use parking;

CREATE TABLE lots (

    lotid INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32),
    lat FLOAT,
    long FLOAT,
    PRIMARY KEY (lotid)

);

CREATE TABLE spots (

    spotid INT NOT NULL AUTO_INCREMENT,
    level int NOT NULL DEFAULT 1,
    spotnum INT NOT NULL,
    lotid INT NOT NULL,
    covered BOOL NOT NULL,
    compact BOOL NOT NULL,
    ev BOOL NOT NULL,
    FOREIGN KEY (lotid) REFERENCES lots(lotid)
    
);
