const mongoose = require("mongoose");
const slugify = require("slugify")


const PostSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    content:{
      type: String, 
      required:false,

    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    category:{
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    slug:{
      type: String,
      required: true,
      unique: true,

    },
    shot:{
      type: String,
      required: false,
    },
    shotAuthor:{
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

PostSchema.pre('validate', function(next){
  if(this.title){
    this.slug=slugify(this.title, {lower: true, strict: true})
  }
  next()
})

module.exports = mongoose.model("Post", PostSchema);
