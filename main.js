// Câu 1: 
let Product = function (id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
};

// Câu 2: Khởi tạo mảng products 
let products = [];

products.push(new Product(1, "iPhone 15", 35000000, 5, "Phone", true));
products.push(new Product(2, "Samsung S24", 28000000, 0, "Phone", true));
products.push(new Product(3, "MacBook Pro", 52000000, 3, "Laptop", true));
products.push(new Product(4, "AirPods Pro", 6000000, 10, "Accessories", true));
products.push(new Product(5, "Apple Watch", 12000000, 0, "Accessories", false));
products.push(new Product(6, "Logitech Mouse", 1500000, 8, "Accessories", true));

console.log("Danh sách sản phẩm:", products);

// Câu 3: Tạo mảng mới chỉ chứa name, price
let namePriceList = products.map(
    function (p) {
        return {
            name: p.name,
            price: p.price
        };
    }
);
console.log("Câu 3 - name & price:", namePriceList);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
let inStockProducts = products.filter(
    function (p) {
        return p.quantity > 0;
    }
);
console.log("Câu 4 - Còn hàng:", inStockProducts);

// Câu 5: Kiểm tra có ít nhất 1 sản phẩm giá > 30.000.000
let hasExpensiveProduct = products.some(
    function (p) {
        return p.price > 30000000;
    }
);
console.log("Câu 5 - Có sản phẩm > 30tr:", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả sản phẩm category "Accessories" có đang bán không
let allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log("Câu 6 - Accessories đều đang bán:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (price * quantity)
let totalInventoryValue = products.reduce(
    function (sum, p) {
        return sum + (p.price * p.quantity);
    },
    0
);
console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);

// Câu 8: for...of duyệt mảng products
console.log("Câu 8:");
for (const p of products) {
    console.log(
        "Tên:", p.name,
        "- Danh mục:", p.category,
        "- Trạng thái:", p.isAvailable ? "Đang bán" : "Ngừng bán"
    );
}

// Câu 9: for...in in tên thuộc tính và giá trị
console.log("Câu 9:");
for (const key in products[0]) {
    console.log(key + ":", products[0][key]);
}

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
let sellingAndInStockNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log("Câu 10 - Sản phẩm đang bán & còn hàng:", sellingAndInStockNames);
