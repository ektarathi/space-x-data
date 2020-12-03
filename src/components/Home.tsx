import React from 'react'
export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return (  
        <div className="landing-page">
            <div className="landing-page__left-content">
                <div className="landing-image"></div>
            </div>
            <div className="landing-page__right-content">
                <h2>This is a homepage</h2>
            </div>
        </div>
    );
}
 
export default Home;