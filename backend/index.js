import express from 'express'
const app = express();
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
app.post("/api/user_register", async (req, resp) => {
    try {
        var userExists = await userModel.countDocuments({ email: req.body.email }); // Use countDocuments
        if (userExists === 1) {
            return resp.status(400).send({ result: 'User already exists' });
        } else {
            var newUser = new userModel(req.body);
            let savedUser = await newUser.save();
            return resp.status(201).send("Signup successful");
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return resp.status(500).send(error); // Send correct status for internal error
    }
});

//list of user
app.get("/api/user_list", async (req, resp) => {
    try {
        let product = await userModel.find();
        resp.send(product);
    } catch (error) {
        resp.status(206).send(error);
    }
})

//delete user
app.delete('/api/user/:id', async (req, resp) => {
    console.log(req.params)
    try {
        const res = await userModel.deleteOne({ _id: req.params.id })
        resp.send(res);
    } catch (error) {
        resp.status(207).send(error);
    }
})

//user login
app.post("/api/user_login", async (req, resp) => {
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
app.post("/api/admin_register", async (req, resp) => {
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
app.post("/api/admin_login", async (req, resp) => {
    try {
        const res = await Admin.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] }).select({ password: 0 });
        if (res) {
            Jwt.sign({ res }, jwtKey, { expiresIn: '1h' }, (err, token) => {
                resp.send({ res, token });
            })
        } else {
            resp.status(203).send({ result: "Wrong Email or Password" });
        }
    } catch (error) {
        resp.status(204).send(error);
    }
})

//add product
app.post("/api/add_product", upload.array('files', 5), async (req, resp) => {
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
app.delete('/api/product/:id', async (req, resp) => {
    try {
        const res = await productModel.deleteOne({ _id: req.params.id })
        resp.send(res);
    } catch (error) {
        resp.status(207).send(error);
    }
})

//get only one product
app.get('/api/product/:id', async (req, resp) => {
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
// app.post("/api/addtocard", async (req, resp) => {
//     var userExists = await usercardModel.countDocuments({ email: req.body.cart.email });
//     if(userExists===1){

//     }
//     try {
//         var newProduct = new usercardModel(req.body.cart);
//         let savedUser = await newProduct.save();
//         return resp.status(200).send("Product Added");
//     } catch (error) {
//         console.error(error); // Log the error for debugging
//         return resp.status(500).send(error); // Send correct status for internal error
//     }
// });

app.post("/api/addtocard", async (req, resp) => {
    try {
        const { email, pid } = req.body.cart; // Destructure the incoming data

        // Check if the user exists
        const user = await usercardModel.findOne({ email });

        if (user) {
            // If user exists, push new `pid` into the `pid` array if it's not already present
            if (!user.pid.includes(pid)) {
                user.pid.push(pid);
                await user.save(); // Save the updated document
                return resp.status(200).send("Product Added to Existing User's Card");
            } else {
                return resp.status(200).send("Product Already Exists in User's Card");
            }
        } else {
            // If user doesn't exist, create a new user document
            const newUser = new usercardModel({
                email,
                pid: [pid] // Initialize the array with the new pid
            });
            await newUser.save();
            return resp.status(200).send("New User Created and Product Added");
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        return resp.status(500).send(error); // Send correct status for internal error
    }
});

//get data of add to cart
app.get('/api/addtocard', async (req, resp) => {
    try {
        const res = await productModel.find();
        resp.send(res);
    } catch (error) {
        resp.status(208).send();
    }
})


//jwt token verify
function verifyToken(req, resp, next) {
    const token = req.headers.authorization;
    if (token) {
        Jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                resp.status(400).send("Invalid JWT Token");
            } else {
                next();
            }
        })
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