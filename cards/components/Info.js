import React from "react";

export default function Info() {
    return (
        <div id="info">
            <img className="info_img" src="../images/person.png" />
            <h3 className="info_name">Laura Smith</h3>
            <p className="info_title">Frontend Developer</p>
            <p className="info_site">laurasmith.website</p>
            <button className="btn_email"><img className="btn_mail_icon" src="../images/Mail.png" />Email</button>
            <button className="btn_linkedin"><img className="btn_linkedin_icon" src="../images/linkedin.png" />Linkedin</button>
        </div>
    )
}