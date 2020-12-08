import * as React from 'react';
import axios from "axios";
import LaunchDetails from './LaunchDetails';
export interface LaunchDataProps {
    
}
 
const LaunchData: React.SFC<LaunchDataProps> = () => {
    const [items, setItems] = React.useState([]) as any;

    React.useEffect(() => {
        const getApiData = async () => {
          const response = await axios("https://api.spacexdata.com/v3/launches");
          setItems(response.data);
        };
        getApiData();
    }, []);

    return (  
        <div className="section-content">
            <LaunchDetails items={items}/>
        </div>
    );
}
 
export default LaunchData;