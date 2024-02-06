--Droppar nessa ordem
DROP TABLE Routes;
DROP TABLE UserLocations;
DROP TABLE Shippings;
DROP TABLE Locations;
DROP TABLE Users;
DROP TABLE Cities;
DROP TABLE States;
DROP TABLE Countries;

--Rodar para limpar as localizações (caso tenha) e inserir as novas 
--DELETE FROM Locations WHERE Address is not null;


--Tabelas: Users, Countries, States, Cities, Locations, UserLocations, Shippings
CREATE TABLE Countries (
    Country_id SMALLSERIAL PRIMARY KEY,
    Country_name varchar(56) not null UNIQUE
);

CREATE TABLE States (
    State_id SMALLSERIAL PRIMARY KEY,
    State_name varchar(60) not null,
    fk_Country_Id SMALLSERIAL not null,
    foreign key (fk_Country_Id) references Countries(Country_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Cities (
    City_id SERIAL PRIMARY KEY,
    City_name varchar(100) not null,
    fk_State_Id SMALLSERIAL not null,
    foreign key (fk_State_Id) references States(State_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Locations (
    Address varchar(200) not null,
    Location_name varchar(100) not null UNIQUE,
    Location_id BIGSERIAL PRIMARY KEY,
    Location_number smallint not null,
    fk_Country_Id SMALLSERIAL not null,
    fk_State_Id SMALLSERIAL not null,
    fk_City_Id SERIAL not null,
    foreign key (fk_Country_Id) references Countries(Country_id) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (fk_State_Id) references States(State_id) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (fk_City_Id) references Cities(City_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Users (
    User_id BIGSERIAL PRIMARY KEY, 
    User_name varchar(100) NOT NULL,
    CPF varchar(11) NOT NULL,
    Email varchar(100) UNIQUE,
    User_password varchar(99) NOT NULL,
    Phone_number bigint NOT NULL,
    User_type smallint NOT NULL			-- 1 para Gerenciador, 2 para Usuário, 3 para Entregador
);

CREATE TABLE UserLocations (
    UserLocation_id BIGSERIAL PRIMARY KEY,
    User_id BIGINT REFERENCES Users(User_id) ON DELETE CASCADE ON UPDATE CASCADE,
    Location_id BIGINT REFERENCES Locations(Location_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT unique_user_location UNIQUE (User_id, Location_id)
);

CREATE TABLE Shippings (
    Shipping_id BIGSERIAL PRIMARY KEY,
    Package_Weight INT NOT NULL,
    Package_Height INT NOT NULL,
    Package_Depth INT NOT NULL,
    Package_Width INT NOT NULL,
    Package_Price FLOAT NOT NULL,
    Finished BOOLEAN NOT NULL,
    Ready_to_deliver BOOLEAN NOT NULL,
	User_id BIGINT NOT NULL,
	Location_origin_id BIGINT NOT NULL,
	Location_destiny_id BIGINT NOT NULL,
	Location_current_id BIGINT NOT NULL,
    Recipient_Email varchar(100) NOT NULL,
    Registration_date TIMESTAMP NOT NULL,
    Send_date TIMESTAMP,
    Receive_date TIMESTAMP,
	FOREIGN KEY (User_id) REFERENCES Users(User_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Location_origin_id) REFERENCES Locations(Location_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (Location_destiny_id) REFERENCES Locations(Location_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Location_current_id) REFERENCES Locations(Location_id) ON DELETE CASCADE ON UPDATE CASCADE  
);

CREATE TABLE Routes (
    Route_id BIGSERIAL NOT NULL,
	Location_id BIGINT NOT NULL,
	Shipping_id BIGINT NOT NULL,
	Courier_id BIGINT,
	FOREIGN KEY (Courier_id) REFERENCES Users(User_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (Shipping_id) REFERENCES Shippings(Shipping_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Location_id) REFERENCES Locations(Location_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Shipping_id) REFERENCES Shippings(Shipping_id) ON DELETE CASCADE ON UPDATE CASCADE,
    Is_Delivery BOOLEAN NOT NULL,
	Is_Open BOOLEAN NOT NULL,
    Is_Finished BOOLEAN NOT NULL,
	PRIMARY KEY(Route_id, Location_id, Shipping_id)
);


--Adicionar dados
INSERT INTO Countries(country_name)
VALUES
    ('Brasil'),
    ('Argentina');

INSERT INTO States(State_name, fk_Country_Id)
VALUES
    ('São Paulo', 1),
    ('Rio de Janeiro', 1),
    ('Rio Grande do Sul', 1),
    ('Buenos Aires', 2),
    ('Minas Gerais', 1);

INSERT INTO Cities(City_name, fk_State_Id)
VALUES
    ('São Paulo', 1),
    ('Belo Horizonte', 5),
    ('Rio de Janeiro', 2),
    ('Porto Alegre', 3),
    ('Buenos Aires', 4),
    ('Santa Maria', 3);

INSERT INTO Locations(Address, Location_name, Location_number, fk_Country_Id, fk_State_Id, fk_City_Id)
VALUES
    ('Rua Protásio Alves', 'Porto Alegre, RS, Brasil - Filial 1: Rua Protásio Alves, 2000', 2000, 1, 3, 4),
    ('Avenida Ipiranga', 'Porto Alegre, RS, Brasil - Filial 2: Avenida Ipiranga, 1000', 1000, 1, 3, 4),
    ('Rua Lima e Silva', 'Porto Alegre, RS, Brasil - Filial 3: Rua Lima e Silva, 500, Brasil', 500, 1, 3, 4),
    ('Rua dos Andradas', 'Santa Maria, RS, Brasil - Filial 4: Rua dos Andradas, 224', 224, 1, 3, 6),
    ('Rua do Acampamento', 'Santa Maria, RS, Brasil - Filial 5: Rua do Acampamento, 89', 89, 1, 3, 6),
    ('Rua das Flores', 'São Paulo, SP, Brasil - Filial 6: Rua das Flores, 181', 181, 1, 1, 1),
    ('Avenida Brasil', 'São Paulo, SP, Brasil - Filial 7: Avenida Brasil, 24', 24, 1, 1, 1),
    ('Praça da Liberdade', 'Rio de Janeiro, RJ, Brasil - Filial 8: Praça da Liberdade, 224', 224, 1, 2, 3),
    ('Travessa dos Coqueiros', 'Rio de Janeiro, RJ, Brasil - Filial 9: Travessa dos Coqueiros, 89', 89, 1, 2, 4),
    ('Avenida dos Bandeirantes', 'Belo Horizonte, MG, Brasil - Filial 10: Avenida dos Bandeirantes, 24', 24, 1, 5, 2),
    ('Avenida San Martín', 'Buenos Aires, Argentina - Filial 11: Avenida San Martín, 89', 89, 2, 4, 5),
    ('Avenida de Mayo', 'Buenos Aires, Argentina - Filial 12: Avenida de Mayo, 224', 224, 2, 4, 5);

INSERT INTO Users(User_name, CPF, Email, User_password, Phone_number, User_type) 
VALUES
      ('Daniel Roberto Manoel Almeida', '85464024778', 'daniel_almeida@etep.edu.br', '$2a$04$FJoRjVkzwGdPIHcwAP1l.OzxuHdjHPvJoAxNidsMKgb6Czwiwvnfu', 47996216612, 1),
	  ('Giovanni Yago Costa', '33953626639', 'giovanni.yago.costa@corp.globo.com', 'g8s7HpYEAk', 63988501201,2),
	  ('Caroline Andreia Ayla da Rosa', '86988826092', 'caroline_darosa@usp.br', '4ShTrBpzOm', 67988634965,2),
	  ('José Roberto', '12345678910', 'zeroberto@gmail.com', 'zero123', 11123456789,3),
	  ('Breno  Morais',	'07484032565','bneromorais@gmail.com','$2a$04$FJoRjVkzwGdPIHcwAP1l.OzxuHdjHPvJoAxNidsMKgb6Czwiwvnfu',5551999708039,	2),
      ('Kata Juckoski', '07484032565','katajukoski@gmail.com','$2a$04$3tKoQYF8q.o34t7sbqbWw.ywbwZzg.Sfz1B8SYDnxfjJ03ODzoaYW', 5551999708039, 3),
      ('Carla Silva', '02981011006','carli@gmail.com','$2a$04$3tKoQYF8q.o34t7sbqbWw.ywbwZzg.Sfz1B8SYDnxfjJ03ODzoaYW', 5551999708039, 3),
      ('Robero Gobb', '04586891329','gobb@gmail.com','$2a$04$3tKoQYF8q.o34t7sbqbWw.ywbwZzg.Sfz1B8SYDnxfjJ03ODzoaYW', 5551999708039, 3);  

INSERT INTO Shippings(Package_Weight, Package_Height, Package_Depth, Package_Width, Package_Price, Ready_to_deliver, Finished, Registration_date, Send_date, User_id, Location_origin_id, Location_destiny_id, Location_current_id, Recipient_Email)
VALUES
    (10, 10, 10, 10, 10, true, false, '2023-08-24 15:30:00', '2023-08-25 15:30:00', 1, 1, 2, 1, 'zeroberto@gmail.com'),
    (20, 20, 20, 20, 20, false, true, '2022-10-24 10:30:00', '2022-10-26 10:00:00', 2, 2, 4, 4, 'daniel_almeida@etep.edu.br');

/*
INSERT INTO Routes(Location_id, Shipping_id, Courier_id, Is_Delivery, Is_Open, Is_Finished)
VALUES
    (1, 2, 1, TRUE, TRUE, FALSE),
    (2, 2, 1, FALSE, TRUE, FALSE);

INSERT INTO Routes(Route_id, Location_id, Shipping_id, Courier_id, Is_Delivery, Is_Open, Is_Finished)
VALUES
    (1, 3, 2, 1, TRUE, TRUE, FALSE);
*/

INSERT INTO UserLocations(User_id, Location_id)
VALUES
	(4,1),
	(4,2),
	(4,3),
    (6,2),
	(6,4),
	(6,5),
    (6,6),
    (6,7),
    (7,7),
	(7,8),
    (7,9),
    (7,10),
    (8,2),
    (8,11),
    (8,12);
	
--Visualizar dados
SELECT * FROM Users WHERE User_type = 3;
SELECT * FROM Locations;
SELECT * FROM UserLocations;
SELECT * FROM Shippings;
SELECT * FROM Routes WHERE route_id=5;
SELECT * FROM Routes WHERE Courier_id=1;
SELECT * FROM Countries;

------------------------------------------------------- CONSULTAS -------------------------------------------------------------------------------------------------------------
-- i. Usuários Externos podem buscar todos os envios e recebimentos de
-- pacotes realizados. Os campos resultantes da pesquisa são Dimensão,
-- Peso, Data de Entrega, Data de Cadastro e Endereço de Destino. Ele
-- pode usar um campo de texto livre para filtrar por um endereço. O
-- resultado é exibido no formato de lista.
SELECT 
    Package_Weight AS peso_pacote,
    Package_Height AS altura_pacote,
    Package_Depth AS profundidade_pacote,
    Package_Width AS largura_pacote,
    Registration_date AS data_cadastro,
	--- adicionar: Receive_date AS data_entrega,
    Location_name AS endereco
FROM Shippings
JOIN Locations ON Shippings.Location_destiny_id = Locations.Location_id
WHERE User_id = 1;


--OK

-- ii. Gerenciadores podem fazer uma busca por todos os pacotes recebidos
-- pela DeliveryX e vê-los em uma lista com os campos: Status, Data de
-- Envio, Data de Entrega, Código de Entrega, Endereço de Envio,
-- Endereço de Entrega e Filial. O resultado é exibido no formato de lista.
-- STATUS: solicitado, pago/aguardando coleta, em transito, entregue
SELECT 
	finished, 
	ready_to_deliver,
	Location_current_id,
	Location_origin_id,
	Location_destiny_id,
    Registration_date,
	Receive_date,
	Shipping_id
FROM Shippings;


-- iii. Entregadores podem buscar entre os pacotes de sua rota ativa. Eles
-- devem poder ver os campos de Endereço, Tipo (Entrega ou Coleta) e
-- Código de Entrega e Dimensões do Pacote. O resultado é exibido no
-- formato de lista.
SELECT
    location_name AS endereco,
    CASE
        WHEN Locations.Location_id = Shippings.Location_origin_id THEN 'coleta'
        ELSE 'entrega'
    END AS tipo,
    shipping_id AS codigo_entrega,
    Package_Weight AS peso_pacote,
    Package_Height AS altura_pacote,
    Package_Depth AS profundidade_pacote,
    Package_Width AS largura_pacote
FROM Routes
JOIN Locations USING (Location_id)
JOIN Shippings USING (Shipping_id)
WHERE Route_id=1 AND Courier_id=1;
--OK