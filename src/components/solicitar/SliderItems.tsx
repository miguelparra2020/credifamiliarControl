import './SliderItems.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';

const SliderItems: React.FC = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                <IonItem>
                    <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                </IonItem>

                <IonItem>
                    <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                </IonItem>

                <IonItem>
                    <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                </IonItem>

                <IonItem lines="none">
                    <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>Item</IonLabel>
                </IonItem>
                </IonList>
            </IonCardContent>
    </IonCard>
    );
};
export default SliderItems;