import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const SectionA = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./27715-login-anim.json')
        })
    }, [])

    return (
        <div>
            
            <div className="container" ref={container}></div>
        </div>
    )
}

export default SectionA
