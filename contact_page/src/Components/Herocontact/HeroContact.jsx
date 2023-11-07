import styles from "./HeroContact.module.css";
import Button from "../Buttons/Buttons";
import { MdOutlineMessage } from "react-icons/Md";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { BiLogoAudible, BiLogoGmail } from "react-icons/Bi";
import { useState } from "react";

function HeroContact() {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[text,setText]=useState("");

  function Submit(eve) {
    eve.preventDefault();
    setName(eve.target[0].value);
    setEmail(eve.target[1].value);
    setText(eve.target[2].value);
  }
  return (
    <section className={styles.main}>
      <div className={styles.contact_form}>
        <div className={styles.btns}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="27px" />}
          />
          <Button
            text="VIA CALL"
            icon={<BsFillTelephoneFill fontSize="24px" />}
          />
        </div>
        <div className={styles.butn}>
          <Button
            outline={true}
            text="VIA EMAIL FORM"
            icon={<BiLogoGmail fontSize="27px" />}
          />
        </div>
        <form onSubmit={Submit}>
          <label className={styles.name} htmlFor="name">
            Name
          </label>
          <input type="text" name="name" />
          <label className={styles.email} htmlFor="email">
            Email
          </label>
          <input type="email" name="email" />
          <label className={styles.text} htmlFor="text">
            Text
          </label>
          <textarea type="text" rows="3" name="text" />
          <div style={{
            display:"flex",
            justifyContent:"end",
          }}><Button text="SUBMIT" /></div>
          {name}{email}{text}
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src="images/service.svg" alt="service image here" />
      </div>
    </section>
  );
}
export default HeroContact;
