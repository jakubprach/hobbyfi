import React, { useState, useRef } from "react";
import "./PostShare.css";
import "../../App.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import Image from '../../img/profileImg.jpg'
import {Posts} from '../../postData'
import useWindowSize from "../../components/utils/useWindowSize";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [posts, setPosts] = useState(Posts)

  const addPost = () => {
    const obj = {
      id:4,
      title: "Adam Prośniewski",
      date: "April 14, 2022",
      initials: "AP",
      text_short: "Association football, more commonly known as simply football or soccer,[a] is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport.",
      text_long: "Football is played in accordance with a set of rules known as the Laws of the Game. The ball is 68–70 cm (27–28 in) in circumference and known as the football. The two teams compete to get the ball into the other team's goal (between the posts and under the bar), thereby scoring a goal. ",
      image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
    Posts.push(obj)

    console.log(Posts)
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  
  const { width } = useWindowSize();


  return (
    
    <div>
    {width > 700 && (
      
    <div className="PostShare">
      <img src={Image} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button onClick={addPost} className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
    )}
    {width <= 700 &&(

    <div className="PostShare">
    <img src={Image} alt="" />
    <div>
      <input type="text" placeholder="What's happening" />
      <div className="postOptions">
        <div className="option" style={{ color: "var(--photo)" }}
        onClick={()=>imageRef.current.click()}
        >
          <UilScenery />
          Photo
        </div>
        <button onClick={addPost} className="button ps-button">Share</button>
        <div style={{ display: "none" }}>
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </div>
    {image && (

      <div className="previewImage">
        <UilTimes onClick={()=>setImage(null)}/>
        <img src={image.image} alt="" />
      </div>

    )}


    </div>
  </div>
    )}
    </div>
  );
};

export default PostShare;
