const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pid: {
        type: String,
        required: true,
        unique: true
    },
    pname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Electronics',
            'Fashion',
            'Home & Furniture',
            'Appliances',
            'Beauty & Personal Care',
            'Sports & Fitness',
            'Toys, Baby & Kids',
            'Grocery & Gourmet',
            'Books & Stationery',
            'Automotive',
            'Pet Supplies',
            'Medicines & Healthcare',
        ],
    },
    subcategory: {
        type: String,
        required: true,
        enum: [
            // Electronics
            'Mobiles & Accessories',
            'Laptops & Accessories',
            'Computers & Peripherals',
            'Televisions',
            'Audio Devices',
            'Cameras & Photography',
            'Gaming Devices',
            'Smart Home Devices',
            'Wearables',
            'Networking Devices',
            'Tablets & eReaders',

            // Fashion
            'Men\'s Clothing',
            'Women\'s Clothing',
            'Footwear',
            'Jewelry',
            'Watches & Accessories',

            // Home & Furniture
            'Living Room Furniture',
            'Bedroom Furniture',
            'Kitchen & Dining',
            'Home Decor',
            'Storage',

            // Add other category subcategories as needed...
        ],
    },
    productImage: {
        type: String, // Should be a URL
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Product2", productSchema)




