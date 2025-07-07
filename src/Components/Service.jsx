import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoItems from "./VideoItems";

let Service = ({State,Video,play}) =>{
    
    return(
        <div>
            <article>
                <aside className="mainplayer">
                    <VideoPlayer data={Video}></VideoPlayer>
                </aside>

                <aside className="videolists">
                    {
                        State.map((data)=>{
                            return <VideoItems key={data.id} play={play} data={data}></VideoItems>
                        }) 
                    }
                </aside>
            </article>
        </div>
    )
}

export default Service 