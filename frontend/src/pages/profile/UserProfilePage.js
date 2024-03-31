import React from "react";
import styles from "./UserProfilePage.module.scss";
import SkinCollection from "../../components/profile/SkinCollection";
import ProfileDetails from "../../components/profile/ProfileDetails";
import { TabView, TabPanel } from "primereact/tabview";

const UserProfilePage = () => {
  return (
    <div className={styles.container_section}>
      <TabView className={styles.tabView}>
        <TabPanel
          className={styles.asdf}
          header="Details"
          leftIcon="pi pi-user ml-2"
        >
          <ProfileDetails />
        </TabPanel>
        <TabPanel
          className={styles.asdf}
          leftIcon="pi pi-inbox mr-2"
          header="  Skin Collection"
        >
          <SkinCollection />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default UserProfilePage;
