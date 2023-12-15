const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "MirrorSkinFinish",
  },
  {
    tag_name: "GlowGetter",
  },
  {
    tag_name: "EyesWideAwake",
  },
  {
    tag_name: "LusciousLips",
  },
  {
    tag_name: "RadiantComplexion",
  },
  {
    tag_name: "Essentials",
  },
  {
    tag_name: "PamperYourself",
  },
  {
    tag_name: "YouthfulGlow",
  },
];

const tagSeeds = () => Tag.bulkCreate(tagData);

module.exports = tagSeeds;
