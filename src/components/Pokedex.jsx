import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetPokemons from './GetPokemons';
import Sugestions from './Sugestions';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState({})
    const [search, setSearch] = useState("")
    const userName = useSelector(state => state.userName)
    const navigate = useNavigate();
    const username = useSelector(state => state.username);
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        getAllPokemons();

    }, [])

    const getAllPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
            .then(resp => setPokemons(resp.data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getAllPokemons()
        let test
        if (search != "") {
            test = pokemons.results?.filter(pokemon =>
                pokemon.name.startsWith(search));
            setSuggestions(test?.map((poke) => poke.name));
        }
    }, [search])

    const initialValues = () => {
        setSuggestions([])
        setSearch("")
    }

    return (
        <div className='pokedex'>
            <div className="welcome">
                <p>Hola <span>{userName}</span>, aca podrás encontrar tus Pokemones favoritos!</p>
                <div className='search__container'>
                    <button className='button_go-home' onClick={() => navigate(-1)}>Go Home</button>
                    <input placeholder='Buscar pokemon por nombre' type="text" value={search} onChange={e => setSearch(e.target.value.toLowerCase())} />
                    <button onClick={() => navigate(`/pokedex/${search}`)}><i className='bx bx-search bx-sm'></i></button>
                    {search != "" &&
                        <Sugestions suggestions={suggestions} setSearch={setSearch} />}
                </div>

            </div>
            <GetPokemons pokemons={pokemons} setPokemons={setPokemons} initialValues={initialValues} />
        </div>
    );
};

export default Pokedex;