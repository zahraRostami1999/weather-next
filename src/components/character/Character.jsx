import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


function Character() {
    return (
        <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
            <Player
                autoplay
                loop
                src="/animations/walking.json" 
                style={{ height: '100%', width: '100%' }}
            />
        </div>
    )
}

export default Character
