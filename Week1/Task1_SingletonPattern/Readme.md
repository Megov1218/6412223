Singelton Pattern suggests that class has only one instance throughout all the program and provide access globally 
This is how it is done :- 
Making Constructor Private so no one can create new object
and 
Providing Static method to get the instance 
Output :
Logger instance created
Log message: First message
Log message: Second message
Both logger instances are the same!
