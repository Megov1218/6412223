
public class Main {
	public static void main(String[] args) {
		Logger logger1 = Logger.getInstance();
		logger1.log("First messsage");
		
		Logger logger2 = Logger.getInstance();
		logger2.log("Second message");
		
		if(logger1 == logger2) {
			System.out.println("Both are same logger instance(ehich should be right)");
			
		}else {
			System.out.println("Different logger instance (which is wrong)");
		}
	}

}
