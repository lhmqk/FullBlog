import React from "react";
import { Link } from "react-router-dom";
import Post from "../img/post.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={Post} alt="" />
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`write?edit=2`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3597/3597093.png"
                alt=""
              />
            </Link>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3597/3597082.png"
              alt=""
            />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
            excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
            ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
            corporis!
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
            excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
            ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
            corporis!
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
            excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
            ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
            corporis!
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
