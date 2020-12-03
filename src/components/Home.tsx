import * as React from 'react';
import LaunchData from './LaunchData';
export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return (  
        <div className="landing-page">
            <div className="landing-page__left-content">
                <div className="landing-image"></div>
            </div>
            <div className="landing-page__right-content">
                <LaunchData/>
            </div>
        </div>
    );
}
 
export default Home;