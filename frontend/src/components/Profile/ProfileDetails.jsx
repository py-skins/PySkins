import React, { useState, useRef } from "react";
import styles from "./ProfileDetails.module.scss"; // Import SCSS file
import BasicButton from "../core/button/BasicButton";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

const ProfileDetails = () => {
  const toast = useRef(null);

  const [avatar, setAvatar] = useState(
    "https://svgshare.com/getbyhash/sha1-onbIfR3XhKQe87HRuqOmIcRdSag="
  );
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    budget: 0,
  });

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Information Successfuly Updated",
      life: 3000,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // You can add validation for image type, size, etc. here
    setAvatar(URL.createObjectURL(file));
  };

  return (
    <div className={styles.container}>
      <Toast ref={toast} position="top-center" />
      <div className={styles.leftSection}>
        <div className={styles.avatarContainer}>
          <img
            src={avatar || "placeholder.jpg"} // Placeholder image or uploaded image
            alt="Avatar"
            className={styles.avatar}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles.fileInput}
          />

          {/* <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
          /> */}

          <BasicButton
            onClick={() => {}}
            variant="red"
            // IconLeft={BsChevronLeft}
            title="Choose Image"
          />
        </div>

        <div className={styles.userInfo}>
          <InputText
            id="firstName"
            type="text"
            placeholder="First Name"
            value={userData.firstName}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                firstName: e.target.value,
              }))
            }
          />

          <InputText
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={userData.lastName}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                lastName: e.target.value,
              }))
            }
          />

          <Calendar
            inputId="cal_date"
            placeholder="Date of Birth"
            value={userData.dateOfBirth}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                dateOfBirth: e.value,
              }))
            }
            // showIcon
          />

          <div className="p-inputgroup flex-1">
            <Button icon="pi pi-dollar" />
            <InputText
              disabled
              id="Budget"
              type="text"
              placeholder="Budget"
              value={userData.budget}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  budget: e.target.value,
                }))
              }
            />
          </div>

          <BasicButton
            onClick={() => {
              showSuccess();
            }}
            variant="red"
            // IconLeft={BsChevronLeft}
            title="Update Information"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
