const { Mongoose } = require("../db");

const ExperienceSchema = new Mongoose.Schema(
    {
      startDate: String,
      endDate: String,
      location: String,
      translations: Object
    },
    { collection: "experiences" }
  );

  Mongoose.model('experiences', ExperienceSchema);

module.exports = ExperienceSchema;