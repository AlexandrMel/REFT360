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
import "./RequestFeedback.scss";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  helpOutline,
  starHalfOutline,
  personAddOutline,
  personRemoveOutline,
  thumbsUpOutline,
  thumbsDownOutline,
  earOutline,
} from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";

interface AboutProps {}

const RequestFeedback: React.FC<AboutProps> = () => {
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
              <IonTitle className="ion-text-center center-title">
                REFT360
              </IonTitle>
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
              <div className="big-circle-pic-req">
                <IonButton
                  className="advice_btn"
                  shape="round"
                  expand="block"
                  color="secondary"
                  fill="outline"
                >
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonIcon icon={earOutline}></IonIcon>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <p>Advice</p>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonButton>
                <IonButton
                  className="rating_btn"
                  shape="round"
                  expand="block"
                  color="secondary"
                  fill="outline"
                >
                  <IonIcon icon={starHalfOutline}></IonIcon>
                </IonButton>
                <IonButton
                  className="plus_minus_btn"
                  shape="round"
                  expand="block"
                  color="secondary"
                  fill="outline"
                >
                  <IonIcon icon={thumbsUpOutline}></IonIcon>
                  <IonIcon icon={thumbsDownOutline}></IonIcon>
                </IonButton>
                <div>
                  <IonButton
                    className="but"
                    shape="round"
                    color="secondary"
                    expand="block"
                  >
                    <h5>REQUEST</h5>
                  </IonButton>
                </div>
              </div>
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

export default React.memo(RequestFeedback);
