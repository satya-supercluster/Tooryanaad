import mongoose from "mongoose";

const contactSchema = {
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
};
const Contact = new mongoose.model("Contact", contactSchema);
export default Contact;
