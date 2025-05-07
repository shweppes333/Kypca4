import React, { useState } from 'react';
import '../../style/reg_auth.css';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        const userData = { email, password };

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                throw new Error('Ошибка при регистрации');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="registration" style={{ display: 'flex', gap: '15px' }}>
            <h2>Регистрация</h2>
            <div style={{ display: 'flex' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                        <input className='inputReg' type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input className='inputReg' type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <input className='inputReg' type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <button className='but' style={{ width: '100px', fontSize: '16px' }} type="submit">Войти</button>
                </form>
            </div>
            <Link to="/authorization">
                <p style={{ fontSize: '12px' }}>Есть аккаунт?</p>
            </Link>
        </div>
    );
};

export default Registration;