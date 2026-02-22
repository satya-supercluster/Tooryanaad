const express = require("express");
const { Resend } = require("resend");
require("dotenv").config();
const path = require("path");
const router = express.Router();
const Register = require("../model/registration26");

const resend = new Resend(process.env.RESEND_API_KEY);

router.use(express.static(path.join(__dirname, "public")));

function generateUniqueID() {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  const uniqueID = randomNum.toString() + timestamp;
  return "AVH" + uniqueID.substr(0, 6);
}

router.post("/reg26", async (req, res) => {
  try {
    const { name, email, year, contact, scholar, branch, vertical } = req.body;

    const users = {
      token: generateUniqueID(),
      name,
      email,
      year,
      contact,
      scholar,
      branch,
      vertical,
    };

    const token = generateUniqueID();

    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "exists" });
    }

    const newUser = new Register(users);
    await newUser.save();

    const currentDate = new Date().toLocaleDateString("hi-IN");

    await resend.emails.send({
      from: "recruitment@tooryanaad.com",
      to: email,
      subject: "तूर्यनाद परिवार की ओर से पंजीकरण पुष्टि",
      text: `प्रिय ${name},\n\nआपका पंजीकरण सफलतापूर्वक पूरा हो गया है। \n\nआपकी जानकारी निम्नलिखित है:\n\nआह्वान पहचान (Aahvaan ID): ${token}\nनाम (Name): ${name}\nवर्ष (Year): ${year}\nसंपर्क (Contact): ${contact}\nस्कॉलर नंबर (Scholar Number): ${scholar}\nशाखा (Branch): ${branch}\nकार्यक्षेत्र (Vertical): ${vertical}\nदिनांक (Date): ${currentDate}\n\nतूर्यनाद`,
      html: `
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>पंजीकरण पुष्टि</title>
</head>
<body style="margin:0;padding:0;background-color:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#141414;border-radius:12px;overflow:hidden;border:1px solid #2a2a2a;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a1a 0%,#1f1a00 100%);padding:40px 40px 30px;text-align:center;border-bottom:2px solid #c8960033;">
              <div style="font-size:32px;font-weight:800;color:#c89600;text-transform:uppercase;">तूर्यनाद</div>
              <div style="font-size:13px;color:#7a6a30;letter-spacing:5px;margin-top:6px;text-transform:uppercase;">Tooryanaad</div>
              <div style="margin-top:18px;display:inline-block;background-color:#c8960018;border:1px solid #c8960044;border-radius:20px;padding:6px 18px;">
                <span style="color:#c89600;font-size:12px;letter-spacing:2px;">✦ </span><span style="color:#c89600;font-size:12px;letter-spacing:0;">आह्वान'26</span><span style="color:#c89600;font-size:12px;letter-spacing:2px;"> ✦</span>
              </div>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:36px 40px 10px;">
              <p style="margin:0;font-size:22px;color:#e8c84a;font-weight:600;">प्रिय ${name},</p>
              <p style="margin:12px 0 0;font-size:15px;color:#8a8a8a;line-height:1.7;">
                आपका पंजीकरण सफलतापूर्वक पूरा हो गया है।<br/>
                <span style="color:#6a6a6a;font-size:13px;">Your registration has been successfully completed.</span>
              </p>
            </td>
          </tr>

          <!-- Aahvaan ID Badge -->
          <tr>
            <td style="padding:20px 40px;">
              <div style="background:linear-gradient(135deg,#1f1a00,#1a1500);border:1px solid #c89600;border-radius:10px;padding:20px 24px;text-align:center;">
                <div style="font-size:11px;color:#7a6a30;text-transform:uppercase;margin-bottom:8px;"><span style="letter-spacing:0;">आह्वान पहचान</span><span style="letter-spacing:3px;"> · Aahvaan ID</span></div>
                <div style="font-size:28px;font-weight:800;color:#c89600;letter-spacing:4px;">${token}</div>
              </div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="border-top:1px solid #2a2a2a;"></div>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:24px 40px;">
              <p style="margin:0 0 16px;font-size:11px;color:#6a6a6a;text-transform:uppercase;"><span style="letter-spacing:0;">पंजीकरण विवरण</span><span style="letter-spacing:3px;"> · Registration Details</span></p>

              ${[
                ["नाम", "Name", name],
                ["वर्ष", "Year", year],
                ["स्कॉलर नंबर", "Scholar No.", scholar],
                ["शाखा", "Branch", branch],
                ["कार्यक्षेत्र", "Vertical", vertical],
                ["संपर्क", "Contact", contact],
                ["दिनांक", "Date", currentDate],
              ].map(([hindi, english, value]) => `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
                <tr>
                  <td style="background-color:#1a1a1a;border-radius:8px;padding:12px 16px;border-left:3px solid #c8960066;">
                    <div style="font-size:10px;color:#7a6a30;text-transform:uppercase;margin-bottom:3px;"><span style="letter-spacing:0;">${hindi}</span><span style="letter-spacing:2px;"> · ${english}</span></div>
                    <div style="font-size:15px;color:#d4d4d4;font-weight:500;">${value}</div>
                  </td>
                </tr>
              </table>`).join("")}
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="border-top:1px solid #2a2a2a;"></div>
            </td>
          </tr>

          <!-- Footer note -->
          <tr>
            <td style="padding:24px 40px 16px;">
              <p style="margin:0;font-size:13px;color:#5a5a5a;line-height:1.7;text-align:center;">
                यह एक स्वचालित संदेश है। कृपया इस ईमेल का उत्तर न दें।<br/>
                <span style="font-size:12px;">This is an automated message. Please do not reply to this email.</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0f0f0f;padding:24px 40px;text-align:center;border-top:1px solid #1f1f1f;">
              <div style="font-size:16px;font-weight:700;color:#c89600;">तूर्यनाद</div>
              <div style="font-size:11px;color:#4a4a4a;margin-top:6px;"><span style="letter-spacing:2px;">TOORYANAAD · </span><span style="letter-spacing:0;">तूर्यनाद परिवार</span></div>
              <div style="margin-top:12px;font-size:11px;color:#3a3a3a;">© 2026 Tooryanaad. All rights reserved.</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`,
    });

    console.log("Email sent successfully");
    res.status(200).json({ msg: "success" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/countReg26", async (req, res) => {
  try {
    const data = await Register.find();
    res.status(200).json({ data: data });
  } catch (error) {
    console.error("Error counting documents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;