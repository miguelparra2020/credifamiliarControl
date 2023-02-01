import { IonButton } from '@ionic/react';
import './Footer.css';
// import { IonIcon} from '@ionic/react';
// import {  flagOutline } from 'ionicons/icons';
const Footer: React.FC = () => {
    return (
        <div id='footer_content'>
            <div id='footer_copy'>
                <div>
                <img src="https://onwidget.com/favicon/favicon-32x32.png" alt="Favicon Copy" />
                </div>
                <div>
                Copy right: 
                <IonButton >
                Miguel páez
                </IonButton>
                · All rights reserved.
                
                </div>
            </div>
        </div>
    );
};
export default Footer;