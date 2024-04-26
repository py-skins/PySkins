import React, { useRef, useState, useEffect } from "react";
import { Toast } from "primereact/toast";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SkinCollection.module.scss";
import InventorySkinCard from "./InventorySkinCard";
import { userSkinCollection } from "../../../api/userServices";

const SkinCollection = () => {
  const toast = useRef(null);
  const user = useSelector((state) => state.user);
  const [skins, setSkins] = useState([
    {
      skin_rarity: {
        rarity_name: "Mil Spec",
        weapon_type: "RifleSniper",
        rarity_color: "#4B69FF",
      },
      id: "1536",
      name: "SCAR-20 Fragments Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar_fragments_black_light_large.d6bde287b06ba2380ba07621a0b06c36b13c4025.png",
    },
    {
      skin_rarity: {
        rarity_name: "Covert",
        weapon_type: "Rifle",
        rarity_color: "#EB4B4B",
      },
      id: "1550",
      name: "M4A4 Temukau Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_temukau_light_large.a41eb80c70cbbee5d84e53b5cd1eaa10954c938d.png",
    },
    {
      skin_rarity: {
        rarity_name: "Covert",
        weapon_type: "Rifle",
        rarity_color: "#EB4B4B",
      },
      id: "1549",
      name: "AK-47 Head Shot Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_head_shot_holo_light_large.85be84ba7c07917493b8e8a66c9d95c928ebe8b6.png",
    },
    {
      skin_rarity: {
        rarity_name: "Classified",
        weapon_type: "RifleSniper",
        rarity_color: "#D32EE6",
      },
      id: "1551",
      name: "AWP Duality Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_limbo_snake_light_large.60984ce1e5c1a4ac10e83444a9b7e7f78dd98b1e.png",
    },
    {
      skin_rarity: {
        rarity_name: "Classified",
        weapon_type: "Pistol",
        rarity_color: "#D32EE6",
      },
      id: "1547",
      name: "P2000 Wicked Sick Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_decline_light_large.7f57145674a5e41b3b8e7fe70be4ffbb57ec6f84.png",
    },
    {
      skin_rarity: {
        rarity_name: "Classified",
        weapon_type: "SMG",
        rarity_color: "#D32EE6",
      },
      id: "1546",
      name: "UMP-45 Wild Child Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_clutch_kick_light_large.b57e43c07b433517b1c3bdaa1e52ce44878af481.png",
    },
    {
      skin_rarity: {
        rarity_name: "Restricted",
        weapon_type: "Rifle",
        rarity_color: "#8847FF",
      },
      id: "1541",
      name: "M4A1-S Emphorosaur-S Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_feeding_frenzy_light_large.e1cb803e0e10ae4457e42d34ec8515b1500f4762.png",
    },
    {
      skin_rarity: {
        rarity_name: "Restricted",
        weapon_type: "Pistol",
        rarity_color: "#8847FF",
      },
      id: "1542",
      name: "Glock-18 Umbral Rabbit Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_moon_rabbit_light_large.9063b9745250446c657632eb13a6325f51d101f2.png",
    },
    {
      skin_rarity: {
        rarity_name: "Restricted",
        weapon_type: "SMG",
        rarity_color: "#8847FF",
      },
      id: "1545",
      name: "P90 Neoqueen Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_neoqueen_light_large.fa2a81f8c7906b2683b5eb4b562edd2529ad2cf0.png",
    },
    {
      skin_rarity: {
        rarity_name: "Restricted",
        weapon_type: "Pistol",
        rarity_color: "#8847FF",
      },
      id: "1544",
      name: "R8 Revolver Banana Cannon Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_banana_light_large.50f0b729a36a405d48b41d58463234dbbd15b9cf.png",
    },
    {
      skin_rarity: {
        rarity_name: "Restricted",
        weapon_type: "SMG",
        rarity_color: "#8847FF",
      },
      id: "1543",
      name: "MAC-10 Sakkaku Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_sakkaku_light_large.b590689d0ca099e8a759dd0a86da0710a58bca42.png",
    },
    {
      skin_rarity: {
        rarity_name: "Mil Spec",
        weapon_type: "SMG",
        rarity_color: "#4B69FF",
      },
      id: "1538",
      name: "MP5-SD Liquidation Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_cu_mp5sd_quick_liquidation_light_large.2b446c710928debe38469e33b3b9030bd218c0e3.png",
    },
    {
      skin_rarity: {
        rarity_name: "Mil Spec",
        weapon_type: "Rifle",
        rarity_color: "#4B69FF",
      },
      id: "1539",
      name: "SG 553 Cyberforce Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyberforce_light_large.63aa4e611195d801eb706ac65d38df68f98e2b76.png",
    },
    {
      skin_rarity: {
        rarity_name: "Mil Spec",
        weapon_type: "SMG",
        rarity_color: "#4B69FF",
      },
      id: "1535",
      name: "MP9 Featherweight Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_superlight_light_large.81ad837f4c889f250fa03b227ef74555614de55d.png",
    },
    {
      skin_rarity: {
        rarity_name: "Mil Spec",
        weapon_type: "Pistol",
        rarity_color: "#4B69FF",
      },
      id: "1537",
      name: "P250 Re.built Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_rebuilt_light_large.69d4fcb9a8151d09818d1c26cf4c7b03d046b5a1.png",
    },
    {
      skin_rarity: {
        rarity_name: "Mil Spec",
        weapon_type: "Pistol",
        rarity_color: "#4B69FF",
      },
      id: "1540",
      name: "Tec-9 Rebel Large Rendering",
      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_freedom_light_large.bb79585222a88d4dd3b154915c5527cac7e507d1.png",
    },
    {
      skin_rarity: {
        rarity_name: "Mil Spec",
        weapon_type: "Shotgun",
        rarity_color: "#4B69FF",
      },
      id: "1534",
      name: "MAG-7 Insomnia Large Rendering",

      main_image_url:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_insomnia_light_large.0d971fb17ca0bb1df7baed6a1caa902c56c1ea5b.png",
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const skinCollectionData = await userSkinCollection({
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access}`,
          },
        });

        console.log(skinCollectionData);
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

  return (
    <div className={styles.skin_container}>
      <Toast ref={toast} position="top-center" />
      {skins.map((skinData, index) => {
        return <InventorySkinCard key={index} skinData={skinData} />;
      })}
    </div>
  );
};

export default SkinCollection;
