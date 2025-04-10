
import PDFViewer from '../components/PDFViewer';

export default function WirdPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Wird of Imam al-Nawawi</h1>
      <PDFViewer fileName="Wird-Imam-Nawawi-a5.pdf" />
    </div>
  );
}
