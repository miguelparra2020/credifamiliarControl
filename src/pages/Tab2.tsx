import { IonContent, IonHeader, IonPage,  IonToolbar } from '@ionic/react';
import './Tab2.css';
import Toolbar from '../components/Toolbar';




const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Tab 2
            
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
