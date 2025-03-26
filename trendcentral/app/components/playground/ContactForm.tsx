import React, { useState } from 'react';

const ContactForm:React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [submitData, setSubmitData] = useState<any>(null);

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitData({ name, email, phone})
    }

    return (
        <div className='text-center p-4'>
            <form onSubmit={handleSubmitForm}>
                <input 
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='px-4 py-2 border border-gray-300 rounded'
                />
                <input 
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='px-4 py-2 border border-gray-300 rounded'
                />
                <input 
                    type='text'
                    placeholder='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='px-4 py-2 border border-gray-300 rounded'
                />
                <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded'>Submit</button>
            </form>

            {submitData && (
                <div className='mt-4'>
                    <h2 className="text-xl">Submitted Data:</h2>
                    <p>Name: {submitData.name}</p>
                    <p>Email: {submitData.email}</p>
                    <p>Phone: {submitData.phone}</p>
                </div>
            )}
            
        </div>
    )
}

export default ContactForm;