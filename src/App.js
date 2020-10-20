
import React, {useState, useEffect} from 'react';
import Film from './Film';
import Title from './Title';
import './App.css';
 const App = () =>{
    const [filmData, setFilmData] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [send, setSend] = useState();
    const [getSeason, setGetSeason] = useState();
    const [getTitle, setGetTitle] = useState();
    const [optionValue, setOptionValue] = useState(1);
    // const [isLoading, setIsLoading] = useState('')
  

    useEffect(() =>{
        const handleFetch = async () =>{
            const response = await fetch(`http://www.omdbapi.com/?t=${send}&Season=${optionValue}&apikey=a192b8d3&`);
            const data = await response.json();
            console.log(data);
            setFilmData(data.Episodes)
            setGetTitle(data.Title)
            setGetSeason(data.Season)
            
        };
       handleFetch();
       return () =>{
          
       } 
    },[send, optionValue]);

    
    const handleOptionChange = (e) =>{
        setOptionValue(e.target.value);

    }
    const handleChange = (e) =>{
        setSearchData(e.target.value);
    }

   
    const handleSearch =  () =>{
        setSend(searchData);
        setSearchData("")
    }
    const handleSelectCss = {
        marginLeft: '.8rem',
        marginTop: '1rem',
        fontSize: '1rem'
    }
    
     return(
        <div>
            <h1 className="filmflix">FilmFlix</h1>
            <div className="button-container">
                <input type="text" value={searchData} onChange={handleChange} placeholder="search for any movie..."/>
                <input type="button" value="search" onClick={handleSearch}/>
            </div>
            <div className="select-button">
                <select value={optionValue} onChange={handleOptionChange} style={handleSelectCss}>
                    <option value="1">season 1</option>
                    <option value="2">season 2</option>
                    <option value="3">season 3</option>
                    <option value="4">season 4</option>
                    <option value="5">season 5</option>
                    <option value="6">season 6</option>
                    <option value="7">season 7</option>
                    
                    
                    
                </select>
            </div>
                {(typeof filmData != "undefined") ? (
                    <div>
                    <Title className="title" bigTitle={getTitle} season={getSeason}/>
                    <div className="handleDisplay">
                    {filmData.map(movie=>(
                        <div key={movie.Title} className="cover">
                            <Film title={movie.Title}
                            number={movie.Episode}
                            release={movie.Released}
                            
                            />
                        </div>
                        
                    ))}
                    </div>
                </div>
                ) : (<h2 className="check-existence">Oops. This movie does not exist in our database!</h2>)}
        </div>
     )
 }
 
 export default App;