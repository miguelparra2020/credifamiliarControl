
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage } from '@ionic/react';
import './cd2mes.css';

import Toolbar from '../../components/Toolbar';


const cd2mes: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido">
            <IonButton expand="block" color="secondary" href='/solicitud/cd2'>Volver</IonButton>
            <IonCard id='car'>
                <IonCardHeader>
                    <IonCardTitle>Ya Escogió: $200.000 "Docientos mil pesos m/cte" 💵</IonCardTitle>
                    <IonCardTitle>💲Para pagar de manera Mesual</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>Tiene la opción de escoger cuantas cuotas desea pagar:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd2mes1cm" color="secondary">
                            <IonLabel>👉 1 cuota mensual</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd2mes2cm" color="primary">
                            <IonLabel>👉 2 cuotas mensuales</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd2mes3cm" color="tertiary">
                        <IonLabel>👉 3 cuotas mensuales</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd2mes;
