const Footer = () => {
    return (
        <div className="bg-indigo-50 p-5 mt-10">
            <div className="text-center w-8/12 mx-auto text-xl mt-10">
                <span className="font-bold">Welcome to </span><span className="font-bold text-2xl text-blue-500">S</span>
                <span className="text-indigo-500">3</span>
                <span className="font-bold text-2xl text-violet-600">B</span>
                <span>ucky</span>, your ultimate file sanctuary! Our bucket services provide a secure haven for your files, 
                <span className="text-indigo-700 font-bold text-2xl animate-pulse">Accessible Anytime</span>,
                <span className="text-indigo-700 font-bold text-2xl animate-pulse">Anywhere</span>.
                Unleash the power of <span className="font-bold text-2xl text-blue-500">S</span>
                <span className="text-indigo-500">3</span>
                <span className="font-bold text-2xl text-violet-600">B</span>
                <span>ucky</span> by joining our community.
                Register now and embark on a seamless journey to <span className="text-indigo-700 font-bold text-2xl animate-pulse">File Freedom!</span>
            </div>
            <div className="text-center mx-auto mt-5 text-gray-500 mb-10">
                    Copyright &copy; {new Date().getFullYear()} S3Bucky, Inc. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer;