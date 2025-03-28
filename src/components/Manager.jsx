import React, { useState, useRef, useEffect } from 'react'

const Manager = () => {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordsArray;
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        if (ref.current.src.includes('eyecross.png')) {
            ref.current.src = 'eye_icon.webp'
        }
        else {
            ref.current.src = 'eyecross.png'
        }
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className='mycontainer'>
                <h1 className='text-4xl font-bold text-center'><span className='text-green-500'>&lt;</span>
                    Password-
                    <span className='text-green-500'>MANAGER/&gt;</span></h1>
                <p className='text-center text-green-900 text-lg'>Your own Password Manager</p>
                <div className=' flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} className='rounded-full border border-green-500 px-4 py-1 w-full bg-white' type="text" name='site' id='' placeholder='Enter website URL' />
                    <div className='flex justify-between gap-8 w-full'>
                        <input value={form.username} onChange={handleChange} name='username' className='rounded-full border border-green-500 w-full px-4 py-1 bg-white' type="text" placeholder='Enter Username' />
                        <div className="relative">
                            <input value={form.password} onChange={handleChange} name='password' className='rounded-full border border-green-500 w-full px-4 py-1 bg-white' type="text" placeholder='Enter Password' />
                            <span className="absolute right-0 top-0 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className='p-1' width={40} src="eyecross.png" alt="eye" />
                            </span>
                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 border hover:bg-green-300 rounded-full w-fit px-8 py-2 cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>Save</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table class="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='text-center w-32 py-2'><a href={item.site} target='_blank'>{item.site}</a></td>
                                        <td className='text-center w-32 py-2'>{item.username}</td>
                                        <td className='text-center w-32 py-2'>{item.password}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager

