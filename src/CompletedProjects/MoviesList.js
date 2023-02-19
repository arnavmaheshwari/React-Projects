import React, { useState } from "react";
import './MoviesListStyle.css';



function MoviesList()
{

    // const [display,setDisplay] = useState('hidden')
    // const [movies,setMovie]=useState(["Amsterdam","Everything Everywhere All At Once","The 40-Year-Old Virgin","Crazy Stupid Love","Palm Springs","Ali","Apollo 13"])

    const [movies,setMovie]=useState([
        {
            movie:"Amsterdam",
            watched:false
        },
        {
            movie:"Everything Everywhere All At Once",
            watched: false
        },
        {
            movie: "The 40-Year-Old Virgin",
            watched: false
        },
        {
            movie: "Crazy Stupid Love",
            watched: false
        },
        {
            movie: "Palm Springs",
            watched: false
        },
        {
            movie: "Ali",
            watched: false
        },
        {
            movie: "Apollo 13",
            watched: false
        }
    ])

    const [text,setText]=useState('')

    const addAndRemove=()=>{

        setText('')

        const movie_name={
            movie:text,
            watched:false
        }
        setMovie(prev=>{
            return(
                [...prev,movie_name]
            )
        })
    }

    const remove=(index)=>{
        setMovie((prev)=>{
            return [...prev.slice(0,index),...prev.slice(index+1)]
        })
    }

    const watchedIt=(index)=>{
        setMovie((array)=>{
            return array.map((element,ind)=>{
                if(ind==index)
                {
                    return{...element,watched:!element.watched}
                }
                else
                {
                    return element
                }
            })
        })
    }



    return(
        <div>
            <h1 style={{fontWeight:'1500',textAlign:'center'}}>To Watch</h1>
            <br />
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <input type="text" className="textbox2" value={text} onChange={(event)=>setText(event.target.value)}/>
                <br />
                <button className="button3" onClick={addAndRemove}>Add</button>
            </div>
            <hr />
            <div className="complete_list">
            {
                movies.map((element,index)=>{
                    return(
                        <div key={index} className="single_movie">
                            <div style={{display: 'flex'}}>
                                <div style={{width:'30px'}}>
                                    <input type="checkbox" className='view' checked={element.watched} onChange={()=>watchedIt(index)}/>
                                </div>  
                                <span style={{textDecoration: element.watched==true?"line-through":"none"}}>{element.movie}</span>
                            </div>    
                            <button className='button3 view' onClick={()=>remove(index)}>Delete</button>
                        </div>)
                    })
                }
                </div>
        </div>
    )
}



export default MoviesList