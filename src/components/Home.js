import React from "react";
import { NavLink } from "react-router-dom";
import bad from "../assets/bad.png";
import ryder from "../assets/small_ryder.png";
import "../styles/home.scss";

function Home() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          height: "675px",
          width: "95%",
          border: "solid 5px #778678",
          borderRadius: "10px",
          padding: "25px",
          margin: "30px auto 50px auto",
          backgroundColor: "black",
          backgroundImage:
            "url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701863015-1200x675.jpg)",
          backgroundSize: "contain",
          maxWidth: "1225px"
        }}
      >
        <div className="animation-ctr">
          <img src={ryder} alt="ryder" className="ryder" height="60" />
          <figure id="bad">
            <img src={bad} alt="bad" />
            <img src={bad} alt="bad" />
          </figure>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "VT323",
            fontSize: "1.6rem",
            lineHeight: "1.0",
            maxWidth: "475px",
            textAlign: "justify",
            paddingTop: "5px"
          }}
        >
          <p>
            It is a period of civil wars in the galaxy. A brave alliance 
            of underground machine learning engineers has challenged the 
            tyrany and oppression of the grusome BETA SKEWL CS.
          </p>
          <p>
            Striking from a hidden channel fortress among the billions of channels on
            Slack, rebel machine learnig engineers have won their first battle in a 
            battle with the powerful React JavaScript. The SKEWL fears that another 
            defeat could bring a thousand more students into the rebellion, and 
            imperialcontrol over the SKEWL would have lost forever.
          </p>
          <p>
            To crush the machine learning rebellion once and for all, the SKEWL
            is constructing a sinister new cirriculum. Powerful enough to destroy
            an entire non-web cohort, its completion spells certain doom for the
            champions of freedom.
          </p>
          <NavLink
            style={{
              fontSize: "38px",
              textDecoration: "none",
              color: "#dadada",
              margin: "20px auto",
              fontWeight: "bold",
              border: "2px solid #dadada",
              borderRadius: "10px",
              background: "#1d1d1d",
              padding: "10px 30px",
              textTransform: "uppercase"
            }}
            to="/game"
          >
            Escape Skewl
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
