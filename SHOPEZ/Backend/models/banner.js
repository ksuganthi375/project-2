import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  active: { type: Boolean, default: true }
});

export default mongoose.model('Banner', bannerSchema);
