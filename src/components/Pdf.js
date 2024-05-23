const cardContainerClass = "bg-white dark:bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center";
const titleClass = "text-lg font-semibold dark:text-dark-900 p-4";
const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const buttonDelClass = "bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded";


const showPDF = (pdf) => {
    window.open(`http://localhost:3001/files/${pdf}`, "_blank", "norefferer, noopener, noreferrer, width=600, height=800");
    console.log(pdf);
}



/*
const addOfPdf = (pdfObject) => {
    addPdf(pdfObject)
        .catch(error => {
            if (!error.response) {
                console.log('Error: Network Error' + error)
            }
        })
}
*/

/*
const eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
   // if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id == registro.id) {
                arreglo.splice(contador, 1);
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    }
};*/
export const Pdf = ({ pdf, id, title, index, eliminarPdf }) => {

    /*const eliminarPdf = (id, pdf, title, index) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento: " + id + " \nCon nombre: " + title);
        if (opcion === true) {
            deletePdf(id, index)
                .catch(error => {
                    if (!error.response) {
                        console.log('Error: Network Error' + error)
                    }
                })
        }
    };*/

    return (
        <div className={cardContainerClass} key={id}>
            <h3 className={titleClass}>{title}</h3>
            <button onClick={() => showPDF(pdf)} className={buttonClass}>Abrir PDF</button>
            <button onClick={() => eliminarPdf(id, pdf, title, index)} className={buttonDelClass}>Borrar PDF</button>
        </div>
    )
}