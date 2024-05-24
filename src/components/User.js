const cardContainerClass = "bg-white dark:bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center";
const titleClass = "text-lg font-semibold dark:text-dark-900 p-4";
const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const buttonDelClass = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded";


export const User = ({ id, username, name, index, deleteUser, editUser }) => {

    return (
        <div className={cardContainerClass} key={id}>
            <h3 className={titleClass}>{username}</h3>
            <h3 className={titleClass}> {id}</h3>
            <h3 className={titleClass}> {name}</h3>
            <button className={buttonClass} onClick={() =>editUser(id, username, name, index)} >Editar contraseña</button>
            <button className={buttonDelClass} onClick={() => deleteUser(id, index, username)} >Eliminar Usuario</button>
        </div>
    )
}

/*
    return (
        <div className={cardContainerClass} key={id}>
            <h3 className={titleClass}>{username}</h3>
            <button onClick={() => showPDF(pdf)} className={buttonClass}>Abrir PDF</button>
            <button onClick={() => eliminarPdf(id, pdf, title, index)} className={buttonDelClass}>Borrar PDF</button>
        </div>
    )
}*/