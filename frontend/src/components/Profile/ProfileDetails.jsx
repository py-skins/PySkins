import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ProfileDetails.module.scss"; // Import SCSS file
import BasicButton from "../core/button/BasicButton";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import {
  userGetProfileDetails,
  userUpdateProfileDetails,
} from "../../api/userServices";
import { update } from "../../app/features/userSlice";

const ProfileDetails = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
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

  useEffect(() => {
    (async () => {
      try {
        const profileDetails = await userGetProfileDetails({
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access}`,
          },
        });

        const userDetails = {
          username: profileDetails.username ? profileDetails.username : "",
          firstName: profileDetails.first_name ? profileDetails.first_name : "",
          lastName: profileDetails.last_name ? profileDetails.last_name : "",
          dateOfBirth: profileDetails.date_of_birth
            ? profileDetails.date_of_birth
            : "",
          profilePicture: profileDetails.profile_picture
            ? profileDetails.profile_picture
            : avatar,
        };

        dispatch(update(userDetails));
        setUserData((prevData) => ({
          ...prevData,
          ...userDetails,
        }));
      } catch (error) {
        toast.current.show({
          severity: "warn",
          summary: error?.messages[0]?.message,
          detail: "Fail Fetching Details Data",
          life: 2000,
        });
      }
    })();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // You can add validation for image type, size, etc. here
    setAvatar(URL.createObjectURL(file));
  };

  const UpdateInformationHandler = async (event) => {
    event.preventDefault();

    try {
      const updatedData = await userUpdateProfileDetails({
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access}`,
        },
      });

      console.log(updatedData);

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Information Successfuly Updated",
        life: 3000,
      });
    } catch (error) {
      toast.current.show({
        severity: "warn",
        summary: error?.messages[0]?.message,
        detail: "Fail Fetching Details Data",
        life: 2000,
      });
    }
  };

  return (
    <div className={styles.container}>
      <Toast ref={toast} position="top-center" />
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
        <BasicButton onClick={() => {}} variant="red" title="Choose Image" />
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
          onClick={UpdateInformationHandler}
          variant="red"
          title="Update Information"
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
