import React from 'react'
import "./head.css"

const Head = () => {
    return (
        <>
        
            <div className='header-img'>
                <img src="/img/0002.jpg"/>
            </div>
        
            <marquee behavior="scroll" direction="left"
                    scrolldelay='1' scrollamount='7'>
                    <p>
                    Welcome to Aravali Journal of Technical Research(AJTR).....🙏🙏
                    </p>
                    </marquee>
        </>
    )
}

export default Head
