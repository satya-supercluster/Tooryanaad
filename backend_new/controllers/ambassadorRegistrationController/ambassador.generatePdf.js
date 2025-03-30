const PDFDocument = require("pdfkit");
const path = require("path");

async function generatePDF(userData) {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 50, bottom: 50, left: 50, right: 50 },
  });

  const buffers = [];
  doc.on("data", (chunk) => buffers.push(chunk));

  const pdfPromise = new Promise((resolve, reject) => {
    doc.on("end", () => resolve(Buffer.concat(buffers)));
    doc.on("error", reject);
  });

  // Watermark: Centered logo with transparency
  const logoPath = path.join(__dirname, "../../public/tooryanaad.png");
  // Header image (if provided)
  if (logoPath) {
    doc.image(logoPath, {
      fit: [100, 100],
      align: "center",
      valign: "center",
    });
    doc.moveDown();
  }

  // Title
  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .fillColor("#333")
    .text("Registration Details", { align: "center" });

  // Separator
  doc
    .moveTo(50, doc.y + 10)
    .lineTo(doc.page.width - 50, doc.y + 10)
    .strokeColor("#aaaaaa")
    .stroke();
  doc.moveDown(2);

  // Registration details
  doc
    .font("Helvetica")
    .fontSize(12)
    .fillColor("#000")
    .text(`Name: ${userData.name}`)
    .moveDown(0.5)
    .text(`Email: ${userData.email}`)
    .moveDown(0.5)
    .text(`Phone: ${userData.number}`)
    .moveDown(0.5)
    .text(`College Name: ${userData.collegeName}`)
    .moveDown(0.5)
    .text(`Year: ${userData.year}`)
    .moveDown(0.5)
    .text(`Post: ${userData.post}`)
    .moveDown(0.5)
    .text(`Degree: ${userData.degree}`);

  doc.moveDown(2);

  // Footer image (if provided)
  if (userData.footerImage) {
    doc.image(
      userData.footerImage,
      doc.page.width - 150,
      doc.page.height - 150,
      { width: 100 }
    );
  }

  doc.end();
  const pdfBuffer = await pdfPromise;
  return pdfBuffer;
}

module.exports = generatePDF;
