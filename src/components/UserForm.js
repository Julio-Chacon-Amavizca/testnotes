function InputField({ id, label, type, placeholder }) {
    return (
        <div className="mb-4">
            <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type={type} placeholder={placeholder} />
        </div>
    );
}

export default function UserForm() {


    return (
        <div className="flex-1 flex flex-col items-center justify-start p-10 bg-zinc-100">
            <div className="w-full max-w-lg mb-8">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <InputField id="username" label="Username" type="text" placeholder="Username" />
                    <InputField id="name" label="Name" type="text" placeholder="Full Name" />
                    <InputField id="password" label="Password" type="password" placeholder="******************" />
                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
