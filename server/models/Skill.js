const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  level: {type: Number},
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  project: { type: Schema.Types.ObjectId, ref: 'Project'},
  degree: { type: Schema.Types.ObjectId, ref: 'Degree'}
});

// skillSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Skill', skillSchema);