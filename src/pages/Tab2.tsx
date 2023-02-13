import { IonContent, IonHeader, IonPage,  IonToolbar } from '@ionic/react';
import './Tab2.css';
import Toolbar from '../components/Toolbar';
import Iframe from 'react-iframe'




const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <Iframe url="https://www.appsheet.com/start/352e0e61-4536-4111-a696-13c94d3effda"
                width="100%"
                height="100%"
                id=""
                allowFullScreen 
                styles={{border: "0px"}}
                className=""
                display="block"
                position="relative"/>
            
      </IonContent>
    </IonPage>
  ); 
};

export default Tab2;
