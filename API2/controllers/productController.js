// const productModel = require("..Models/Products2")
const Product = require('../Models/Products2');

//Get Add product
const createProduct = async (req, res) => {
      try {
            await new Product(req.body).save()
    
            res.status(201).json({ msg: "Document Added Successfully!!!" })
        }
        catch (error) {
            res.status(400).send({ err: "Something went Wrong" })
        }
}

//Get All Product 
const getAllProduct = async (req, res) => {
    try {
        const AllProducts = await Product.find()
        res.status(200).json(AllProducts)
    }
    catch (error) {
        res.status(500).json({ err: error.message })
    }
}
// Get Product by Id
const getProductById = async (req, res) => {
    
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
}
//Get Product by Name
const getProductByName = async (req, res) => {
    
    try {
           const products = await Product.find({ pname: req.params.pname });
   
           if (products.length === 0) {
               return res.status(404).json({ msg: "Product Not Found" });
           }
   
           res.status(200).json(products);
       } catch (error) {
           res.status(500).json({ err: error.message });
       }

}

//get Max Price product
const getMaxPriceProduct = async (req, res) => {
     const p = await Product.find().sort({ price: 1 }).limit(1)
        try {
            res.status(200).json(p)
        }
        catch (error) {
            res.status(500).json({ "err": error.message })
        }
}

// Product delete by id
const deleteProduct = async (req, res) => {
    
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
}

// Update Product by id
const updateProduct = async (req, res) => {
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
}

//get  products by category
const searchByCategory = async (req, res) => {
     try {
             const p = await Product.find({ category: req.params.category });
     
             if (!p) {
                 return res.status(404).json({ msg: "Product Not Found" });
             }
     
             res.status(200).json(p);
         } catch (error) {
             res.status(500).json({ err: error.message });
         }
}

//get  products by Subcategory
const searchBySubCategory = async (req, res) => {

    try {
            const p = await Product.find({ subcategory: req.params.subcategory });
    
            if (!p) {
                return res.status(404).json({ msg: "Product Not Found" });
            }
    
            res.status(200).json(p);
        } catch (error) {
            res.status(500).json({ err: error.message });
        }
    
}

module.exports = { createProduct, getAllProduct, getProductById,deleteProduct, updateProduct, searchByCategory, searchBySubCategory }

