const app = require("express")();
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const router = require("express").Router();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

router.get("/", async (req, res) => {
  const { url } = req.query;
  const result = await axios.get(url);

  res.json({
    data: result?.data,
  });
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
