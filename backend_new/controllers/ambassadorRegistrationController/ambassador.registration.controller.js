const generatePDF = require("./ambassador.generatePdf");
const AmbassadorRegistration = require("../../models/ambassador.registration.model");
const nodemailer = require("nodemailer");

const AmbassadorRegistrationController = async (req, res) => {
  try {
    const user = {
      token: req.body.token,
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      collegeName: req.body.collegeName,
      year: req.body.year,
      post: req.body.post,
      degree: req.body.degree,
    };

    // Check if a user with the provided email already exists
    const existingUser = await AmbassadorRegistration.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(401).json({ msg: "यह ईमेल पता पहले ही पंजीकृत है।" });
    }

    // Save the new user to the database
    const newUser = new AmbassadorRegistration(user);
    await newUser.save();

    // Generate PDF from the user data
    const pdfBuffer = await generatePDF(user);

    // Set up nodemailer transporter using SMTP with secure connection
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSKEY,
      },
    });

    // Send email with the PDF attachment
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "From Team Tooryanaad",
      text: "Thank you for registration",
      html: `<b>${user.name}, your registration details are attached.</b>`,
      attachments: [
        {
          filename: "report.pdf",
          content: pdfBuffer,
        },
      ],
    });

    // Return success response
    res.status(200).json({ msg: "पंजीकरण सफल रहा!" });
  } catch (error) {
    console.error("Error in AmbassadorRegistrationController:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = AmbassadorRegistrationController;
