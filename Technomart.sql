use TechnomartDB;
CREATE TABLE TechnomartUser(
	NameUser VARCHAR(45) DEFAULT NULL,
	SurnameUser VARCHAR(45) DEFAULT NULL,
	LoginUser VARCHAR(45) DEFAULT NULL,
	PasswordUser VARCHAR(45) DEFAULT NULL,
	IDUser INT PRIMARY KEY IDENTITY 
);

CREATE TABLE Technomart—ommodity(
	NameCommodity Varchar(45) DEFAULT NULL,
	Price VARCHAR(45) DEFAULT NULL,
	IDCommodity INT PRIMARY KEY IDENTITY
);

CREATE TABLE UserAndCommodity(
	UserID INT REFERENCES TechnomartUser (IDUser),
	CommodityID INT REFERENCES Technomart—ommodity (IDCommodity)
);

