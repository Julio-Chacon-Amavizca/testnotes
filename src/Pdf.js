import { useEffect } from "react";
import PdfForm from "./components/PdfForm";
import { usePdf } from "./hooks/usePdf";
import { Pdf } from "./components/Pdf";
/*import { usePdf } from "./hooks/usePdf";
import PdfForm from "./components/PdfForm";
*/
const Pdfs = () => {
    const { pdfs, addPdf } = usePdf()

    useEffect(() => {
        console.log('PDF')
    }, [])


    const addOfPdf = (pdfObject) => {
        addPdf(pdfObject)
            .catch(error => {
                if (!error.response) {
                    console.log('Error: Network Error' + error)
                }
            })
    }
    return (
        <>
            <PdfForm addThePDF={addOfPdf}/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4 ">
                {
                    pdfs == null
                        ? ''
                        : pdfs.map((file, i) => (
                            <div key={i}>
                                <Pdf key={file.id} title={file.title} pdf={file.pdf} id={file.id} />
                            </div>
                        ))
                }
            </div>
        </>
    );
}

export default Pdfs;