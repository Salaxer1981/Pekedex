import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/userName.slice';
import videoHome from "../assets/videoHome.mp4"


const Home = () => {

    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPokedex = () => {
        dispatch(getUsername(name));
        navigate('/pokedex')

    }


    return (

        <div className='home'>
            <div className="overlay"></div>
            <div className='homeContenedor'>
                <video src={videoHome} autoPlay loop muted />
            </div>
            <div className='input_container'>
                <div className='input'>
                    <input placeholder='Ingresa tu nombre' type="text" value={name} onChange={e => setName(e.target.value)} />
                    <div>
                        <button onClick={() => goPokedex()}>Entrar</button>
                    </div>
                </div>
            </div>
        </div>







    );
};

export default Home;