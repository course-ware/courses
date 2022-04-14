import React, { useState, useEffect }  from 'react';
import './paper.css';



export default function Welcome(){

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    const cardStyles =  matches => {

                                        let styles = {    
                                            background: "rgba(255, 255, 255, 0.1)",
                                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1) !important",
                                            backdropFilter: "blur(10px) !important",
                                            borderRadius: "10px",
                                            display: "flex",
                                            height: "420px", 
                                            minWidth: "250px"                                            
                                        }
                                        if(matches) 
                                            return {
                                                ...styles,    
                                                width: "40%", 
                                            }
                                        
                                        return {
                                            ...styles,
                                            width: "85%",
                                            fontSize: "12px",
                                            margin: "10px"
                                        }
    
                                    };  

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )

    return (
        <div 
            style={{
                height: "100%", 
                width: "100%",
                background: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: matches ?"flex-start" :"center",
                overflow: "scroll"
            }}
        >

        <h2 style={{margin: matches ?"20px 0px 0px 20px" : "0", color: '#3E1929', fontSize: "2rem"}}>Welcome to Courseware</h2>
        
        <div style={{
                        display: "flex", 
                        justifyContent: "space-around", 
                        alignItems: "center", 
                        height: matches ?"40%": "auto",
                        flexDirection: matches ? "row" :"column",
                        marginTop: matches ?"150px" :"80px"
                    }}
        >

            <div className="card" style={cardStyles(matches)}>

            <div className="card-body" style={{display: "flex", flexDirection: 'column', justifyContent: "space-evenly"}}>
                <h3 className="card-title" style={{color: '#3E1929'}}>Core Java</h3>
                <h5 className="card-subtitle" style={{color: "#1c2c3b"}}>Beginner Level</h5>
                <div className="card-text" style={{color: '#495867'}}>
                    This course path introduces a newbie to the world of java. The main course is divided into
                    5 different modules and each module is a course in itself. The course is designed in such a way that
                    each module introduces and strenthens a particular concept of java. The objective of this course is  
                    to build and grow the understanding of java from ground up. Checkout the course page for more info!
                </div>
                <button 
                    className="btn-small"
                    onClick = {() => window.location.href="/core-java"}
                    style={{background: "#3E1929", alignSelf:"flex-start", margin: "0"}}>
                        Take me to the course!
                </button>
            </div>
            </div>


            <div className="card" style={cardStyles(matches)}>

            <div className="card-body" style={{display: "flex", flexDirection: 'column', justifyContent: "space-evenly"}}>
                <h3 className="card-title" style={{color: '#3E1929'}}>Frontend </h3>
                <h5 className="card-subtitle" style={{color: "#1c2c3b"}}>Beginner Level</h5>
                <p className="card-text" style={{color: '#495867'}}>
                    The course introduces the techcologies and tools to design and program the frontend. The course
                    will take you on a journey to the land of HTML, CSS and Javascript. After completing this course
                    you should be able to build websites and web tools. The couse is divided into 4 modules and each module
                    is a course in itself. Checkout the course page for more info! 
                </p>
                <button 
                    className="btn-small"
                    onClick = {() => window.location.href="/frontend-intro"}
                    style={{background: "#3E1929", alignSelf:"flex-start", margin: "0"}}
                >
                    Take me to the course!
                </button>

            </div>
            </div>


        </div>

        



    </div>




    )



}







