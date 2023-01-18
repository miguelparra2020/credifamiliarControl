
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonButton, IonChip  } from '@ionic/react';
import './cd1.css';

import Toolbar from '../../components/Toolbar';


const cd1: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido_body">
            <div id='contenido_div'>
            <IonButton href='/solicitud/soloOpciones' >
                <IonChip color="success">Volver</IonChip> 
            </IonButton>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Al esgoger: $100.000 "Cien mil pesos m/cte" 💵</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle>De que forma le queda fácil el pago:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd1mes" color="secondary">
                        <IonLabel>💲Mesual: "Cada mes el pago"</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd1quincena" color="primary">
                        <IonLabel>💲Quincenal: "Cada 15 días el pago"</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            </div>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd1;
