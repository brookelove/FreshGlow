const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "dewy",
  },
  {
    tag_name: "matte",
  },
  {
    tag_name: "blue",
  },
  {
    tag_name: "red",
  },
  {
    tag_name: "purple",
  },
  {
    tag_name: "white",
  },
  {
    tag_name: "glitter",
  },
  {
    tag_name: "face",
  },
];

const tagSeeds = () => Tag.bulkCreate(tagData);

module.exports = tagSeeds;
