const homeController = (req, res) => {
  const data = {
    name: "HuXn",
    userId: 20,
  };
  res.render("index", data);
};

export { homeController };
