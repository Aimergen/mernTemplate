import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useCurrentUser } from "../hooks/useCurrentUser";
import axios from 'axios';
import {toast} from 'react-toastify';
import {InputGroup} from '../components/InputGroup';
import {Button} from '../components/Button';
import {ButtonLink} from '../components/ButtonLink';

export const LoginScreen =()=>{

    const [email, setEmail]= useState(''); 
    const [password, setPassword]= useState('');
    const navigate =useNavigate(); // huudsuudruu chigluuleh F
    const {setCurrentUser}= useCurrentUser();

    const submitSignIn =()=>{
        axios
            .post('/login',{email, password})
            .then((res)=>{
                const {body}= res.data;
                localStorage.setItem('token', body.token);
                setCurrentUser(body.user);
                toast.success('amjilttai bollo');
                navigate('/');
            })
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sistemd burtguuleh
                        </h1>
                        <form className="space-y-4 md:space-y-6"
                            onSubmit={(e)=>{
                                e.preventDefault();
                                submitSignIn();
                            }}>
                            <InputGroup
                                label="email"
                                placeholder="email@example.com"
                                required={true}
                                type= "email"
                                value= {email}
                                onChange= {setEmail}
                                />
                            <InputGroup
                                label="password"
                                placeholder="********"
                                required= {true}
                                type= "password"
                                value={password}
                                onChange= {setPassword}
                            />
                            <Button type="submit">Nevtreh</Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Burtgelgui hereglegch
                                <Link to={'/register'}>
                                    <ButtonLink>Burtguuleh</ButtonLink>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};