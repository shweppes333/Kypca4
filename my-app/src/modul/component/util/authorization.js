import React, { useState } from 'react';
import '../../style/reg_auth.css';
import { Link } from 'react-router-dom';

const Authorization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { email, password };

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
            } else {
                throw new Error('Ошибка при входе');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="registration" style={{ display: 'flex', gap: '15px', height: '300px' }}>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <input className="inputReg" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="inputReg" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className='but' style={{ width: '100px', fontSize: '16px' }} type="submit">Войти</button>
            </form>
            <Link to="/registration">
                <p style={{ fontSize: '12px' }} >Нет аккаунта?</p>
            </Link>
        </div>
    );
};

export default Authorization;