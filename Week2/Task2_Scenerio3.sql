CREATE OR REPLACE PROCEDURE TransferFunds (
    sourceAccountID IN NUMBER,
    targetAccountID IN NUMBER,
    transferAmount IN NUMBER
) AS
    sourceBalance NUMBER;
BEGIN
    
    SELECT Balance INTO sourceBalance FROM Accounts WHERE AccountID = sourceAccountID FOR UPDATE;
    
   
    IF sourceBalance >= transferAmount THEN
        
        UPDATE Accounts
        SET Balance = Balance - transferAmount,
            LastModified = SYSDATE
        WHERE AccountID = sourceAccountID;
        
        UPDATE Accounts
        SET Balance = Balance + transferAmount,
            LastModified = SYSDATE
        WHERE AccountID = targetAccountID;
        
        
        INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
        VALUES (Transactions_SEQ.NEXTVAL, sourceAccountID, SYSDATE, transferAmount, 'Withdrawal');
        
        INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
        VALUES (Transactions_SEQ.NEXTVAL, targetAccountID, SYSDATE, transferAmount, 'Deposit');
        
        COMMIT;
    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient Balance');
    END IF;
END;
/
