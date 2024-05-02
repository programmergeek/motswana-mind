

function EmbeddedPDF() {
  return (
    <div className="pdf-container">
      <object
        data="/Mathematics - PSLE - 2010.pdf" // Replace with the path to your PDF file
        type="application/pdf"
        width="100%"
        height="500px"
      >
        <p>
          It appears you don't have a PDF plugin for this browser. No biggie... you can
          <a href="/Mathematics - PSLE - 2010.pdf">click here to download the PDF file.</a>
        </p>
      </object>
    </div>
  );
}

export default EmbeddedPDF;
