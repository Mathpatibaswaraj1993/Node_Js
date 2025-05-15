const express = require('express')
const app = express()
const Product = require('../Models/Products')
const mongoose = require('mongoose')

const router = express.Router()
app.use(express.urlencoded({ extended: true }));



router.post('/addProduct', async (req, res) => {
    try {
        await new Product(req.body).save()

        res.status(201).json({ msg: "Document Added Successfully!!!" })
    }
    catch (error) {
        res.status(400).send({ err: "Something went Wrong" })
    }
})


//Get All products from product collections

router.get("/", async (req, res) => {
    try {
        const AllProducts = await Product.find()
        res.status(200).json(AllProducts)
    }
    catch (error) {
        res.status(500).json({ err: error.message })
    }
})


//Get Product by ID -request param or query params
router.get("/getProductById/:_id", async (req, res) => {
    // router.get("/getProductById/", async (req, res) => {  query parameter
    const objectId = new mongoose.Types.ObjectId(req.params._id);

    try {
        const p = await Product.findById(objectId)
        // const p = await Product.findById(req.query._id)


        if (!p) {
            return res.status(404).json({ msg: "Product Not Found" })

        }
        res.status(200).json(p)
    }
    catch (error) {
        res.status(500).json({ "err": error.message })
    }
})

//Get Product by Name
router.get("/getProductByName/:pname", async (req, res) => {
    try {
        const products = await Product.find({ pname: req.params.pname });

        if (products.length === 0) {
            return res.status(404).json({ msg: "Product Not Found" });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});

//get max Price product

router.get("/getMaxPriceProduct", async (req, res) => {
    const p = await Product.find().sort({ price: 1 }).limit(1)
    try {
        res.status(200).json(p)
    }
    catch (error) {
        res.status(500).json({ "err": error.message })
    }
})

//get data delete by id
router.delete("/deleteProduct/:_id", async (req, res) => {
    try {
        const p = await Product.findByIdAndDelete(req.params._id);

        if (!p) {
            return res.status(404).json({ msg: "Product Not Found" });
        }

        res.status(200).json({ msg: "Product Deleted Successfully", Product: p });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// update the data
router.put("/updateProduct/:_id", async (req, res) => {
    const p = await Product.findByIdAndUpdate(req.params._id, req.body, { new: true });

    try {
        if (!p) {
            return res.status(404).json({ msg: "Product Not Found" });
        }

        res.status(200).json({ msg: "Product update Successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

//get  products by category
router.get("/getProductByCategory/:category", async (req, res) => {
    try {
        const p = await Product.find({ category: req.params.category });

        if (!p) {
            return res.status(404).json({ msg: "Product Not Found" });
        }

        res.status(200).json(p);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});

//get products by subcategory
router.get("/getProductBySubCategory/:subcategory", async (req, res) => {
    try {
        const p = await Product.find({ subcategory: req.params.subcategory });

        if (!p) {
            return res.status(404).json({ msg: "Product Not Found" });
        }

        res.status(200).json(p);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});


module.exports = router