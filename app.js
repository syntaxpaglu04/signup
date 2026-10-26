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

    return res.status(200).json({
        message: "Signup successful!",
        data: result.data
    });
});

export default app;