import * as React from 'react';
import axios from "axios";
import ListData from './ListData';
export interface LaunchDataProps {
    
}
 
const LaunchData: React.SFC<LaunchDataProps> = () => {
    const [items, setItems] = React.useState([]) as any;
    const [selectedItem, setSelectedItem] = React.useState([] as any);

    React.useEffect(() => {
        const getApiData = async () => {
          const response = await axios("https://api.spacexdata.com/v3/launches");
          setItems(response.data);
        };
        getApiData();
    }, []);

    return (  
        <div className="section-content">
            <ListData items={items}/>
        </div>
    );
}
 
export default LaunchData;