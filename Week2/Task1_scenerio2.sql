-- 1. Create Customers table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age INTEGER,
    Balance NUMBER,
    LastModified DATE
);

-- 2. Create Loans table
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- 3. Insert test data
INSERT INTO Customers (CustomerID, Name, Age, Balance, LastModified)
VALUES (1, 'John Doe', 60, 1000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, Age, Balance, LastModified)
VALUES (2, 'Jane Smith', 69, 1500, SYSDATE);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));

ALTER TABLE Customers
ADD IsVIP VARCHAR2(5);
COMMIT;

-- 4. PL/SQL Block to apply discount to customers over 60
  BEGIN
  FOR cust IN (
    SELECT CustomerID, Balance
    FROM Customers
  ) LOOP
    IF cust.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
END;
/



