const cardContainerClass = "bg-white dark:bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center";
const titleClass = "text-lg font-semibold dark:text-dark-900 p-4";
const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const showPDF = (pdf) => {
    window.open(`http://localhost:3001/files/${pdf}`, "_blank", "norefferer, noopener, noreferrer, width=600, height=800");
    console.log(pdf);
}
export const Pdf = ({ pdf, id, title }) => {
    return (
        <div className={cardContainerClass} key={id}>
            <h3 className={titleClass}>{title}</h3>
            <button onClick={() => showPDF(pdf)} className={buttonClass}>Abrir PDF</button>
        </div>
    )
}