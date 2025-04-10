
const PDFViewer = ({ fileName }) => {
  return (
    <div className="w-full h-[90vh]">
      <iframe
        src={`/pdfs/${fileName}`}
        width="100%"
        height="100%"
        title="PDF Document"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default PDFViewer;
