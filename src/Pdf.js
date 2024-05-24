import { useEffect } from "react";
import PdfForm from "./components/PdfForm";
import { usePdf } from "./hooks/usePdf";
import { Pdf } from "./components/Pdf";
/*import { usePdf } from "./hooks/usePdf";
import PdfForm from "./components/PdfForm";
*/
const Pdfs = () => {
    const { pdfs, addPdf, deletePdf, showPDF } = usePdf()

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

    const eliminarPdf = (id, pdf, title, index) => {
        var opcion = window.confirm("ELIMINAR ARCHIVO\n¿Estás Seguro que deseas Eliminar el elemento: " + id + " \nCon nombre: " + title + " ?");
        if (opcion === true) {
            deletePdf(id, index)
                .catch(error => {
                    if (!error.response) {
                        console.log('Error: Network Error' + error)
                    }
                })
        }
    };
    const showPDFs = (pdf) => {
        showPDF(pdf)
    }

    return (
        <>
            <PdfForm addThePDF={addOfPdf} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4 ">
                {
                    pdfs === null
                        ? ''
                        : pdfs.map((file, indexItem) => (
                            <div key={indexItem}>
                                <Pdf key={file.id} index={indexItem} showPDF={showPDFs} eliminarPdf={eliminarPdf} title={file.title} pdf={file.pdf} id={file.id} />
                            </div>
                        ))
                }
            </div>
        </>
    );
}

export default Pdfs;