import { useState } from "react"
import "./PdfStyles.css"

const containerClasses = "p-4 max-w-lg mx-auto";
const labelClasses = "block text-sm font-medium text-zinc-700 dark:text-gray-950";
const inputTextClasses = "mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white";
const buttonClasses = "mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";


export default function PdfForm() {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form data here, e.g., send to a backend server or log to console
        console.log('Title:', title);
        console.log('File:', file);
    };

    return (
        <div className={containerClasses}>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">Cargar Archivo PDF</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" className={labelClasses}>Título del documento</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className={inputTextClasses}
                    placeholder="Ingrese un título"
                    value={title}
                    onChange={handleTitleChange}
                />
                <label htmlFor="file-upload" className={`${labelClasses} mt-4`}>Subir archivo PDF</label>
                <input
                    type="file"
                    id="file-upload"
                    name="file-upload"
                    className="mt-1 block w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 cursor-pointer dark:text-zinc-400 dark:bg-zinc-700 dark:border-zinc-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    onChange={handleFileChange}
                />
                <button type="submit" className={buttonClasses}>Enviar</button>
            </form>
        </div>
    );
}