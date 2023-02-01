import {  IonContent, IonHeader, IonPage } from '@ionic/react';
import './Tab4.css';
import Toolbar from '../components/Toolbar';
const Tab4: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
            Tab 4
        </IonContent>
        </IonPage>
    );
};

export default Tab4;