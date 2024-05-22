import React from "react";
import styles from "./UserProfilePage.module.scss";
import SkinCollection from "../../components/Profile/SkinCollections/SkinCollection";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { TabView, TabPanel } from "primereact/tabview";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";

const UserProfilePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles.container_section}>
      <Layout>
        {!user.isAuthenticated && (
          <p className={styles.message}>Login to see your profile</p>
        )}
        {user.isAuthenticated && (
          <TabView className={styles.tabView}>
            <TabPanel
              header="Details"
              leftIcon="pi pi-user ml-2"
              className={styles.tabPanel}
            >
              <ProfileDetails />
            </TabPanel>
            <TabPanel
              leftIcon="pi pi-inbox mr-2"
              header="  Skin Collection"
              className={styles.tabPanel}
            >
              <SkinCollection />
            </TabPanel>
          </TabView>
        )}
      </Layout>
    </div>
  );
};

export default UserProfilePage;
