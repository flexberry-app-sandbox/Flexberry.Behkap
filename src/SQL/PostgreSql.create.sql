﻿




CREATE TABLE Услуга (
 primaryKey UUID NOT NULL,
 Длительность TIMESTAMP(3) NULL,
 у INT NULL,
 Услуга VARCHAR(255) NULL,
 Цена INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Визит (
 primaryKey UUID NOT NULL,
 визита INT NULL,
 время TIMESTAMP(3) NULL,
 Код INT NULL,
 Клиент UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товар (
 primaryKey UUID NOT NULL,
 Производитель VARCHAR(255) NULL,
 товара VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 должности INT NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE сотрудник (
 primaryKey UUID NOT NULL,
 Должность VARCHAR(255) NULL,
 Пол VARCHAR(7) NULL,
 рож TIMESTAMP(3) NULL,
 с INT NULL,
 ФИО VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиент (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Код INT NULL,
 Номер INT NULL,
 Пол VARCHAR(7) NULL,
 ФИО VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставУслуги (
 primaryKey UUID NOT NULL,
 табл INT NULL,
 товара INT NULL,
 услуги INT NULL,
 Товар UUID NOT NULL,
 Услуга UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаписьВизита (
 primaryKey UUID NOT NULL,
 визита INT NULL,
 записи INT NULL,
 сотрудника INT NULL,
 услуги INT NULL,
 сотрудник UUID NOT NULL,
 Услуга UUID NOT NULL,
 Визит UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Визит ADD CONSTRAINT FK35981327ea04f1ccdd2a6e81cd19d33f4e8a30aa FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Index35981327ea04f1ccdd2a6e81cd19d33f4e8a30aa on Визит (Клиент); 

 ALTER TABLE сотрудник ADD CONSTRAINT FKbac7b3e3cce5bf3f599ef5ea0fe33d1778bc538e FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexbac7b3e3cce5bf3f599ef5ea0fe33d1778bc538e on сотрудник (Должности); 

 ALTER TABLE СоставУслуги ADD CONSTRAINT FK9abdb41f585f3ab364fd5b9f387198d02c065ff5 FOREIGN KEY (Товар) REFERENCES Товар; 
CREATE INDEX Index9abdb41f585f3ab364fd5b9f387198d02c065ff5 on СоставУслуги (Товар); 

 ALTER TABLE СоставУслуги ADD CONSTRAINT FK2a99a3673f1870cd631bc19658d8cc2fb8e257f7 FOREIGN KEY (Услуга) REFERENCES Услуга; 
CREATE INDEX Index2a99a3673f1870cd631bc19658d8cc2fb8e257f7 on СоставУслуги (Услуга); 

 ALTER TABLE ЗаписьВизита ADD CONSTRAINT FK3d694fd7745bb2696ed44b6aa5583b808746bc08 FOREIGN KEY (сотрудник) REFERENCES сотрудник; 
CREATE INDEX Index3d694fd7745bb2696ed44b6aa5583b808746bc08 on ЗаписьВизита (сотрудник); 

 ALTER TABLE ЗаписьВизита ADD CONSTRAINT FK6bc7c0218b8749a3f98b73ac17705271183340e6 FOREIGN KEY (Услуга) REFERENCES Услуга; 
CREATE INDEX Index6bc7c0218b8749a3f98b73ac17705271183340e6 on ЗаписьВизита (Услуга); 

 ALTER TABLE ЗаписьВизита ADD CONSTRAINT FKe0c1b1fb380dda45015ddae89613593b3997fea9 FOREIGN KEY (Визит) REFERENCES Визит; 
CREATE INDEX Indexe0c1b1fb380dda45015ddae89613593b3997fea9 on ЗаписьВизита (Визит); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

