import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../components/PDFDocument";
const PDFButton = ({ travelData }) => {
  return (
    
      <PDFDownloadLink
        document={<PDFDocument travelData={travelData} />}
        fileName={`${travelData.location} travel details`}>
        {({ loading }) =>
          loading ? '' : <button className="DELETE-TRAVEL-BTN w-44 text-black text-center uppercase border border-black p-1 px-2 rounded-lg duration-300 hover:bg-black hover:text-white">Generate PDF</button>
        }
      </PDFDownloadLink>
   
  );
};

export default PDFButton;
