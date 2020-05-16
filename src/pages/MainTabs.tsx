import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people, homeOutline, peopleOutline, checkboxOutline, checkmarkDoneOutline } from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import MapView from './MapView';
import About from './About';
import RequestFeedback from './RequestFeedback';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/schedule" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/tabs/schedule" render={() => <SchedulePage />} exact={true} />
        <Route path="/tabs/speakers" render={() => <SpeakerList />} exact={true} />
        <Route path="/tabs/speakers/:id" component={SpeakerDetail} exact={true} />
        <Route path="/tabs/schedule/:id" component={SessionDetail} />
        <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
        {/* <Route path="/tabs/map" render={() => <MapView />} exact={true} /> */}
        <Route path="/tabs/about" render={() => <About />} exact={true} />
        <Route path="/tabs/requestFeed" render={() => <RequestFeedback />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/tabs/schedule">
        <IonBadge color="danger">3</IonBadge>
          <IonIcon icon={peopleOutline} />
          <IonLabel>Recieved Feedback</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/about">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tabs/speakers">
          <IonIcon icon={checkmarkDoneOutline} />
          <IonLabel>Given Feedback</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;