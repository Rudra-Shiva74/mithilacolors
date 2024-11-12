import express from 'express'
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import connectDb from './config/db.js';
import { userModel, usercardModel } from './Module/User.js';
import Admin from './Module/Admin.js';
import { productModel, productImageModel } from './Module/Product.js'
import Jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
const jwtKey = 'e-comm';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const apiKey = process.env.REACT_APP_API_KEY;
// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder where files will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//upload single file
// app.post('/upload', upload.single('file'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//     }
//     res.send(`File uploaded: ${req.file.filename}`);
// });

//upload multiple file
// app.post('/uploads', upload.array('files', 5), (req, res) => { // 'files' is the key name in the for
//     if (!req.files || req.files.length === 0) {
//         return res.status(400).send('No files uploaded.');
//     }
//     req.files.map(file => console.log(file.filename));
// });

//user registration
app.post("/api/user_register", verifyToken, async (req, resp) => {
    try {
        var userExists = await userModel.countDocuments({ email: req.body.email }); // Use countDocuments
        if (userExists === 1) {
            return resp.status(400).send({ result: 'User already exists' });
        } else {
            var newUser = new userModel(req.body);
            let savedUser = await newUser.save();
            return resp.status(200).send("Signup successful");
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return resp.status(500).send(error); // Send correct status for internal error
    }
});

//list of user
app.get("/api/user_list", verifyToken, async (req, resp) => {
    try {
        let product = await userModel.find();
        resp.send(product);
    } catch (error) {
        resp.status(206).send(error);
    }
})

//delete user
app.delete('/api/user/:id', verifyToken, async (req, resp) => {
    console.log(req.params)
    try {
        const res = await userModel.deleteOne({ _id: req.params.id })
        resp.send(res);
    } catch (error) {
        resp.status(207).send(error);
    }
})

//user login
app.post("/api/user_login", verifyToken, async (req, resp) => {
    try {
        const res = await userModel.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] }).select({ password: 0 });
        if (res) {
            Jwt.sign({ res }, jwtKey, { expiresIn: '1d' }, (err, token) => {
                resp.send({ res, token });
            })
        } else {
            resp.status(203).send({ result: "Wrong Email or Password" });
        }
    } catch (error) {
        resp.status(204).send(error);
    }
})

//admin login
app.post("/api/admin_register", verifyToken, async (req, resp) => {
    try {
        var userExists = await Admin.countDocuments({ email: req.body.email }); // Use countDocuments
        if (userExists === 1) {
            return resp.status(400).send({ result: 'User already exists' });
        } else {
            var newUser = new Admin(req.body);
            let savedUser = await newUser.save();
            return resp.status(201).send("Signup successful");
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return resp.status(500).send(error); // Send correct status for internal error
    }
});

//admin registration
app.post("/api/admin_login", verifyToken, async (req, resp) => {
    try {
        const res = await Admin.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] }).select({ password: 0 });
        if (res) {
            Jwt.sign({ res }, jwtKey, { expiresIn: '1h' }, (err, token) => {
                resp.status(200).send({ res, token });
            })
        } else {
            resp.status(203).send({ result: "Wrong Email or Password" });
        }
    } catch (error) {
        resp.status(204).send(error);
    }
})

//add product
app.post("/api/add_product", verifyToken, upload.array('files', 5), async (req, resp) => {
    req.body.image = req.files;
    try {
        var newProduct = new productModel(req.body);
        let savedUser = await newProduct.save();
        return resp.status(200).send("Product Added");
    } catch (error) {
        console.error(error); // Log the error for debugging
        return resp.status(500).send(error); // Send correct status for internal error
    }
});

//list of product
app.get("/api/product", async (req, resp) => {
    try {
        let product = await productModel.find();
        resp.send(product);
    } catch (error) {
        resp.status(206).send(error);
    }
})

// delete product
app.delete('/api/product/:id', verifyToken, async (req, resp) => {
    try {
        const res = await productModel.deleteOne({ _id: req.params.id })
        resp.send(res);
    } catch (error) {
        resp.status(207).send(error);
    }
})

//get only one product
app.get('/api/product/:id', verifyToken, async (req, resp) => {
    try {
        const res = await productModel.findOne({ _id: req.params.id })
        resp.send(res);
    } catch (error) {
        resp.status(208).send();
    }
})

//update product
app.put('api/product/:id', verifyToken, async (req, resp) => {
    try {
        const res = await Product.updateOne({ _id: req.params.id }, { $set: req.body })
        resp.send(res);
    } catch (error) {
        resp.status(209).send(error);
    }
})

//add to card
app.post("/api/addtocard", verifyToken, async (req, resp) => {
    try {
        const { email, pid, count } = req.body.cart; // Destructure the incoming data

        // Check if the user with the email exists
        const user = await usercardModel.findOne({ email });

        if (user) {
            // Check if the product with pid already exists for the user
            const productIndex = user.product.findIndex(item => item.pid.toString() === pid);
            if (productIndex > -1) {
                // If product exists, increase quantity by 1
                user.product[productIndex].quantity += count;
            } else {
                // If product doesn't exist, add it with default quantity of 1
                user.product.push({ pid, quantity: count });
            }
            await user.save();
            return resp.status(200).send("Product quantity updated or added to existing user cart.");
        } else {
            // If user doesn't exist, create a new user document with the product
            const newUser = new usercardModel({
                email,
                product: [{ pid, quantity: count }]
            });
            await newUser.save();
            return resp.status(200).send("New User Created and Product Added");
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return resp.status(500).send(error); // Send correct status for internal error
    }
});

//check product added or not in cart
app.post('/api/checktocart', verifyToken, async (req, resp) => {
    try {
        const res = await usercardModel.findOne({ email: req.body.email });
        if (res) {
            resp.send(res)
        } else {
            return resp.status(201).send("User is Not Exist");
        }
    } catch (error) {
        resp.status(208).send();
    }
})

// remove from cart
app.post('/api/removetocard', verifyToken, async (req, resp) => {
    try {
        const { email, pid } = req.body.cart;
        const user = await usercardModel.findOne({ email });

        if (user) {
            // Check if `pid` exists in the user's card
            if (user.product.some((productId) => String(productId.pid) === String(pid))) {
                // Remove the specific `pid` from `user.pid`
                user.product = user.product.filter((productId) => String(productId.pid) !== String(pid));
                await user.save();
                return resp.status(200).send("Product Removed from User's Card");
            } else {
                return resp.status(200).send("Product Does Not Exist in User's Card");
            }
        } else {
            return resp.status(404).send("User does not exist.");
        }
    } catch (error) {
        console.error("Error removing product from user's card:", error);
        resp.status(500).send("An error occurred.");
    }
});


//get user add to cart data
app.get('/api/getcartdetails/:email', verifyToken, async (req, res) => {
    try {
        // Assuming user's email is in the session
        const userEmail = req.params.email;

        // Find user card by email and populate product details
        const userCard = await usercardModel.findOne({ email: userEmail })
            .populate('product.pid')  // Populate to get full product details for each pid
            .exec();

        if (!userCard) {
            return res.status(404).json({ message: 'User cart not found' });
        }

        res.json(userCard);  // Send user card with populated product details
    } catch (error) {
        console.error("Error fetching cart details:", error);
        res.status(500).json({ result: 'SomeThing Went Wrong' });
    }
});


//jwt token verify
function verifyToken(req, resp, next) {
    const token = req.headers.authorization;
    if (token) {
        if (apiKey === token) {
            next();
        }
        else {
            resp.status(400).send("Invalid JWT Token");
        }
        // Jwt.verify(token, jwtKey, (err, valid) => {
        //     if (err) {
        //         resp.status(400).send("Invalid JWT Token");
        //     } else {
        //         next();
        //     }
        // })
    }
    else {
        resp.status(401).send("Please Add Token");
    }
}

// Assuming productModel has a reference to productImageModel
// app.get("/api/products", async (req, resp) => {
//     try {
//         // Fetch products and populate associated images
//         let products = await productModel.find().populate({
//             path: 'images',  // Ensure this matches the field in productModel
//             model: 'productImageModel',  // Model name of the product images
//             match: { _id: req.query._id, pid: req.query.pid } // Filter by _id and pid if needed
//         });
//         resp.send(products);
//     } catch (error) {
//         resp.status(500).send(error);
//     }
// });


const PORT = process.env.PORT || 8000;
connectDb();
app.listen(PORT, () => {
    console.log(`Port Number ${PORT}`)
})