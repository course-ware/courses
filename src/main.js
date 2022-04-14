import React from 'react';
import './App.css';
import './paper.css';


export default function Main(props){

    return (
        <div className={props.data.bg}>
            
            <header>
                <h1 className={props.data.bg + "-theme"}>{props.data.heading}</h1>
                <button className={"btn-small transparent " + props.data.bg + "-theme"}  onClick={() => window.location.href = '/courses/' + props.data.file}>
                    Download Course Pdf
                </button>
            </header>
            <div  className="content">

            {
                props
                    .data
                    .courses
                    .map((course, idx) => (
                            <ul 
                                className="card course transparent" 
                                key={"card-" + idx}
                            >
            
                                <h3 className={props.data.bg + "-theme"}>{course.heading}</h3>
                                <ul>
                                    
                                    {
                                        course
                                            .content
                                            .map((outline, idx) => <li 
                                                                        style={{
                                                                            color: props.data.bg === 'colorful' ? "#495867" : "#FFF6EA"
                                                                        }}
                                                                        key= {outline + "-" +idx}
                                                                    >
                                                                        {outline}
                                                                    </li>)
                                    }
                                    
                                </ul>
            
                            </ul>
                    ))
            }
                        </div>


        </div>

    )


}