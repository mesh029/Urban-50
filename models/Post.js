const mongoose = require("mongoose");
const slugify = require("slugify")


const marked = require('marked')
const createDomPurify = require('dompurify')
const {JSDOM} = require('jsdom')
const domPurify = createDomPurify(new JSDOM().window)


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
    sanitizedHtml: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

PostSchema.pre('validate', function(next){
  if(this.title){
    this.slug=slugify(this.title, {lower: true, strict: true})
  }

  if(this.content){
    this.sanitizedHtml= domPurify.sanitize(marked(this.content), {ALLOWED_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'className']}) 
  }
  next()
})

module.exports = mongoose.model("Post", PostSchema);
