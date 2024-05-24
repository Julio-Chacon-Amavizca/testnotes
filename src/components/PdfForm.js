import { useState } from "react"
import "./PdfStyles.css"

export default function PdfForm({ addThePDF }) {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);

    /*
    const [allImages, setAllImages] = useState(null);
    /*
    /*
        useEffect(() => {
            getPdf();
        }, []);
    
      */
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    /*
        const getPdf = async () => {
            const result = await axios.get('http://localhost:3001/api/get-files');
    
            setAllImages(result.data.data);
        };
    */

    const submitImage = (event) => {
        event.preventDefault();
        const pdfObject = new FormData();
        pdfObject.append('title', title);
        pdfObject.append('file', file);

        if (title !== null && file !== null) {
            addThePDF(pdfObject)
            setFile(null);
            setTitle('');
            pdfObject.delete('title');
            pdfObject.delete('file');
        } else {
            alert('Por favor, seleccione un nuevo archivo PDF');
        }
    }



    return (
        <div className="flex-1 flex flex-col items-center justify-start p-10 bg-zinc-100">
            <div className="w-full max-w-lg mb-8">
                <form key={'a'}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8"
                    onSubmit={submitImage}>
                    <div className="mb-4">
                        <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Ingrese un título"
                            value={title}
                            onChange={handleTitleChange}
                            required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="file-upload">
                            Upload PDF
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="file"
                            id="file-upload"
                            name="file-upload"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            required />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Upload File
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/*
<div className={containerClasses}>
<h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">Cargar Archivo PDF</h2>
<form onSubmit={submitImage}>
    <label htmlFor="title" className={labelClasses}>Título del documento</label>
    <input
        type="text"
        id="title"
        name="title"
        className={inputTextClasses}
        placeholder="Ingrese un título"
        value={title}
        onChange={handleTitleChange}
        required
    />
    <label htmlFor="file-upload" className={`${labelClasses} mt-4`}>Subir archivo PDF</label>
    <input
        type="file"
        id="file-upload"
        name="file-upload"
        className="mt-1 block w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 cursor-pointer dark:text-zinc-400 dark:bg-zinc-700 dark:border-zinc-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        onChange={handleFileChange}
        required
    />
    <div className="flex justify-center">
        <button type="submit" className={buttonClasses}>Enviar</button>
    </div>
</form>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {allImages == null
        ? ""
        : allImages.map(item => (
            <div className={cardContainerClass} key={item.id}>
                <img className="w-16 h-16 mb-4" src={item.imageUrl} alt="PDF Icon" />
                <h3 className="text-lg font-semibold dark:text-white">{item.title}</h3>
                <p className={`${textColorClass} mb-4`}>{item.description}</p>
                <button onClick={() => showPDF(item.pdf)} className={buttonClass}>Abrir PDF</button>
            </div>
        ))}
</div>
</div>*/