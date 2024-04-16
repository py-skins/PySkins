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
    <>
      {!user.isAuthenticated && (
        <div className={styles.container_section}>
          <Layout>
            <p className={styles.message}>Login to see your profile</p>
          </Layout>
        </div>
      )}
      {user.isAuthenticated && (
        <div className={styles.container_section}>
          <Layout>
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
          </Layout>
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
