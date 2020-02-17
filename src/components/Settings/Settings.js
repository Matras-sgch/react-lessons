import React from 'react';
import s from './Settings.module.css'


const Settings = (props) => {
  return(
    <div className={s.Settings}>
      <div className={s.Setting}>Settings</div>
      <div className={s.AdditionalSettings}>Additional Settings</div>
    </div>
  );
}
export default Settings;
