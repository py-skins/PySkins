import React, { useState } from "react";
import styles from "./UserProfilePage.module.scss";
import SkinCollection from "../../components/profile/SkinCollection";

const UserProfilePage = () => {
  const [activeTab, setactiveTab] = useState(1);

  return (
    <div className={styles.container_section}>
      <h1>Profile</h1>

      <div className={styles.tabView}>
        <ul>
          <li onClick={() => setactiveTab(1)}>
            <i className={`${styles.pi} pi pi-user ml-2`} />
            Details
          </li>
          <li onClick={() => setactiveTab(2)}>
            <i className={`${styles.pi} pi pi-inbox mr-2`} />
            Skin Collection
          </li>
        </ul>
        <div className={styles.content}>
          {activeTab === 1 && <div>Details Content</div>}
          {activeTab === 2 && <SkinCollection />}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
