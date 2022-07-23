-- CRIANDO AS TABELAS PARA DB_WEBAPP;

CREATE TABLE WA_COLABORADOR (
    ID_COL INT PRIMARY KEY,
    NOME VARCHAR(50) NOT NULL,
    IDADE CHAR (3),
    SEXO VARCHAR (50),
    CPF CHAR (11),
    CID VARCHAR (50), --CIDADE
    UF CHAR(2), --ESTADO
    TELE_COL CHAR (11), -- TELEFONE
    EMAIL VARCHAR (50),
    SENHA VARCHAR (10),
    DEPA INT NOT NULL, --DEPARTAMENTO
    GRUPO INT NOT NULL,
    STATUS VARCHAR (10) NOT NULL, --ATIVO OU INATIVO
    R_SOCIAL VARCHAR (10) NOT NULL,
    DESCR VARCHAR (100) NOT NULL,
    CREATE_ON TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE WA_GRUPO (
    ID_GRUPO INT PRIMARY KEY NOT NULL,
    NOME VARCHAR (50),
    CREATE_ON TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    
);

CREATE TABLE WA_DEPARTAMENTO (
    ID_DEP INT PRIMARY KEY NOT NULL,
    NOME VARCHAR (50),
    CREATE_ON TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INSERINDO DADOS NA TABELA WA_COLABORADOR
INSERT INTO WA_COLABORADOR
(ID_COL, NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR) 
VALUES 
('01', 'Peter Benjamin Parker', '20', 'Masculino', '12345678901', 'Belém', 'PA', '91987563421', 'peter@gmail.com', 'sr.stark', '06', '03', 'ATIVO', '@peter', 'MJ');

-- INSERINDO DADOS NA TABELA WA_GRUPO;

INSERT INTO WA_GRUPO (ID_GRUPO, NOME) VALUES ('01', 'CLT');
INSERT INTO WA_GRUPO (ID_GRUPO, NOME) VALUES ('02','PJ');
INSERT INTO WA_GRUPO (ID_GRUPO, NOME) VALUES ('03', 'Freelancer');
INSERT INTO WA_GRUPO (ID_GRUPO, Nome) VALUES ('04', 'Parceiros');
INSERT INTO WA_GRUPO (ID_GRUPO, Nome) VALUES ('05', 'Outros');

-- INSERINDO DADOS NA TABELA WA_DEPARTAMENTO;

INSERT INTO WA_DEPARTAMENTO (ID_DEP, NOME) VALUES ('01', 'FINANCEIRO');
INSERT INTO WA_DEPARTAMENTO (ID_DEP, NOME) VALUES ('02', 'ADMINISTRAÇÃO');
INSERT INTO WA_DEPARTAMENTO (ID_DEP, NOME) VALUES ('03', 'DIREÇÃO');
INSERT INTO WA_DEPARTAMENTO (ID_DEP, NOME) VALUES ('04', 'OPERACIONAL');
INSERT INTO WA_DEPARTAMENTO (ID_DEP, NOME) VALUES ('05', 'INFRAESTRUTURA');
INSERT INTO WA_DEPARTAMENTO (ID_DEP, NOME) VALUES ('06', 'DESENVOLVIMENTO');
INSERT INTO WA_DEPARTAMENTO (ID_DEP, NOME) VALUES ('07', 'COMERCIAL');