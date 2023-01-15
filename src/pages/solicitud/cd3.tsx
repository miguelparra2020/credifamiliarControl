
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage } from '@ionic/react';
import './cd3.css';

import Toolbar from '../../components/Toolbar';


const cd3: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido">
            <IonButton expand="block" color="success" href='/solicitud/soloOpciones'>Volver</IonButton>
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Al esgoger: $300.000 "Trescientos mil pesos m/cte" 💵</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>De que forma le queda fácil el pago:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd3mes" color="secondary">
                        <IonLabel>💲Mesual: "Cada mes el pago"</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd3quincena" color="primary">
                        <IonLabel>💲Quincenal: "Cada 15 días el pago"</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd3;


