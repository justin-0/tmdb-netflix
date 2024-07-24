import express from "express";

export const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Hello");
});
router.post("/login", (req, res) => {
  res.send("Hello");
});
router.post("/logout", (req, res) => {
  res.send("Hello");
});

// export default router;
