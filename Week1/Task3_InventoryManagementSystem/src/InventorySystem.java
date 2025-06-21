import java.util.HashMap;
import java.util.Scanner;
 class Product {
	private int productId;
	private String productName;
	private int quantity;
	private double price;
	
	public Product(int productId, String productName, int quantity, double price) {
		this.productId = productId;
		this.productName = productName;
		this.quantity = quantity;
		this.price = price;
		
	}
	
	public int getProductId() {
		return productId;
		
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
		
	}
	public void setPrice(double price) {
		this.price = price;
		
	}
	public String toString() {
		return "ProductID: " + productId + ", Name: " + productName +
	               ", Quantity: " + quantity + ", Price: Rs." + price;
	}
}
	
	public class InventorySystem{
		static HashMap<Integer, Product> inventory = new HashMap<>();
		static Scanner sc = new Scanner(System.in);
		
		public static void addProduct() {
			System.out.println("Enter product id");
			int id = sc.nextInt();
			sc.nextLine();
			System.out.println("Enter product name: ");
			String name = sc.nextLine();
			System.out.println("Enter quantity");
			int qty = sc.nextInt();
			System.out.println("Enter Price: ");
			double price = sc.nextDouble();
			
			Product p = new Product(id, name, qty, price);
			inventory.put(id, p);
			System.out.println("Product Added");
		}
		public static void updateProduct() {
	        System.out.print("Enter Product ID to update: ");
	        int id = sc.nextInt();
	        if (inventory.containsKey(id)) {
	            System.out.print("Enter new Quantity: ");
	            int qty = sc.nextInt();
	            System.out.print("Enter new Price: ");
	            double price = sc.nextDouble();

	            Product p = inventory.get(id);
	            p.setQuantity(qty);
	            p.setPrice(price);
	            System.out.println("Product updated!");
	        } else {
	            System.out.println("Product not found.");
	        }
	    }
		public static void deleteProduct() {
	        System.out.print("Enter Product ID to delete: ");
	        int id = sc.nextInt();
	        if (inventory.containsKey(id)) {
	            inventory.remove(id);
	            System.out.println("Product deleted!");
	        } else {
	            System.out.println("Product not found.");
	        }
	    }
		
		public static void showInventory() {
	        if (inventory.isEmpty()) {
	            System.out.println("Inventory is empty.");
	        } else {
	            for (Product p : inventory.values()) {
	                System.out.println(p);
	            }
	        }
	    }
		
		public static void main(String[] args) {
	        while (true) {
	            System.out.println("\n--- Inventory Management System ---");
	            System.out.println("1. Add Product");
	            System.out.println("2. Update Product");
	            System.out.println("3. Delete Product");
	            System.out.println("4. Show Inventory");
	            System.out.println("5. Exit");
	            System.out.print("Choose an option: ");
	            int choice = sc.nextInt();

	            switch (choice) {
	                case 1: addProduct(); break;
	                case 2: updateProduct(); break;
	                case 3: deleteProduct(); break;
	                case 4: showInventory(); break;
	                case 5: System.exit(0);
	                default: System.out.println("Invalid choice.");
	            }
	        }

		
		
	}
	}

	
	
	


