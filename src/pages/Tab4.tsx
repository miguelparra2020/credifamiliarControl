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
        Solicitudes de prestamos
        </IonContent>
        </IonPage>
    );
};

export default Tab4;