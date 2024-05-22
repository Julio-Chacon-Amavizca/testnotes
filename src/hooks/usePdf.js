import { useEffect, useState } from "react"
import pdfsService from "../services/pdfs"
import { useUser } from "./useUser"

export const usePdf = () => {
    const [pdfs, setPdfs] = useState([])
    const { logout } = useUser()

    useEffect(() => {
        pdfsService
            .getAll()
            .then(initialPdfs => {
                setPdfs(initialPdfs)
            })
    }, [])

    const addPdf = (pdfObject) => {
        return pdfsService
            .create(pdfObject)
            .then(returnedPdf => {
                if (returnedPdf === 401) {
                    console.log('Error al subir el archivo. Error al subir el archivo, token inválido o no existe. Por favor, inicia sesión nuevamente.');
                    logout()
                }
                
                if (returnedPdf.status === 200) {
                    alert('Archivo subido correctamente');
                    setPdfs(pdfs.concat(returnedPdf.data))
                }

            })
    }

    return {
        pdfs,
        addPdf
    }
}