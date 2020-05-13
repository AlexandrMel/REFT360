import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover,
  IonAvatar,
  IonItemDivider,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
} from "@ionic/react";
import "./About.scss";
import { ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();
  const [location, setLocation] = useState<
    "madison" | "austin" | "chicago" | "seattle"
  >("madison");
  const [conferenceDate, setConferenceDate] = useState(
    "2047-05-17T00:00:00-05:00"
  );

  const selectOptions = {
    header: "Select a Location",
  };

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  // momentjs would be a better way to do this https://momentjs.com/
  function displayDate(date: string, format: string) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date(date);
    const year = d.getFullYear();

    if (format === "y") {
      return year;
    } else {
      const month = monthNames[d.getMonth()];
      const day = d.getDate();

      return month + " " + day + ", " + year;
    }
  }

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
              <IonTitle className="ion-text-center center-title">REFT360</IonTitle>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={presentPopover}>
                <IonIcon
                  slot="icon-only"
                  ios={ellipsisHorizontal}
                  md={ellipsisVertical}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
          <div className="big-circle-pic">
<div className="smaller-circle-pic">
<img src="https://img.icons8.com/bubbles/100/000000/about-me-female.png"/>
</div>
          </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <h1 className="profile-name">Rebecca Miller</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <p className="profile-position">CEO</p>
            </IonCol>
          </IonRow>
            <IonRow>
              <IonCol>
          <div className="profile-divider"><p>My Profile</p></div>
              </IonCol>
            </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton expand="block" color="secondary" fill="outline">
                Request Feedback
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block">
                Give Feedback
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(About);
