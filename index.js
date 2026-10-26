import express from "express";
import signupSchema from "./signupSchema.js";

const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {

    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            error: result.error.issues
        });
    }

    res.json({
        message: "Signup successful!",
        data: result.data
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});