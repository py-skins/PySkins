import React from "react";
import styles from "./UserProfilePage.module.scss";
import SkinCollection from "../../components/Profile/SkinCollection";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { TabView, TabPanel } from "primereact/tabview";
import { useSelector } from "react-redux";

const UserProfilePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {!user.isAuthenticated && (
        <div className={styles.container_section}>
          <p className={styles.message}>Login to see your profile</p>
        </div>
      )}
      {user.isAuthenticated && (
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
      )}
    </>
  );
};

export default UserProfilePage;
