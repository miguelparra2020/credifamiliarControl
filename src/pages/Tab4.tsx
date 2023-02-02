import {  IonContent, IonHeader, IonPage } from '@ionic/react';
import './Tab4.css';
import Toolbar from '../components/Toolbar';
import Iframe from 'react-iframe'
const Tab4: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <Iframe url="https://www.appsheet.com/start/33e88794-aa19-4bc4-8699-c2824835688d"
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

export default Tab4;