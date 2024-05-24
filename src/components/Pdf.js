const cardContainerClass = "bg-white dark:bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center";
const titleClass = "text-lg font-semibold dark:text-dark-900 p-4";
const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const buttonDelClass = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded";



export const Pdf = ({ pdf, id, title, index, eliminarPdf, showPDF }) => {

    return (
        <div className={cardContainerClass} key={id}>
            <h3 className={titleClass}>{title}</h3>
            <button onClick={() => showPDF(pdf)} className={buttonClass}>Abrir PDF</button>
            <button onClick={() => eliminarPdf(id, pdf, title, index)} className={buttonDelClass}>Borrar PDF</button>
        </div>
    )
}