import React from "react";
import "./styles.css";
import DarkMode from "../Components/DarkMode/DarkMode";

const About = () => {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <a href="/">Work</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <DarkMode />
      </nav>
      <div className="main-section">
        <h1>Welcome to my home page!</h1>
        <div className="image"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          eget scelerisque neque, quis scelerisque erat. Quisque venenatis
          molestie sapien, dapibus viverra nulla hendrerit eget. Pellentesque
          egestas ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla
          facilisi. Suspendisse gravida sem eu odio mattis ullamcorper.
          Curabitur feugiat ipsum vel vulputate ultricies.
        </p>
        <p>
          Praesent pulvinar faucibus risus in iaculis. Sed erat felis, pretium
          sit amet ultricies non, porta et lacus. Curabitur a urna mi. Sed
          eleifend sed erat eget viverra. Quisque sit amet purus viverra massa
          posuere congue. Suspendisse efficitur venenatis enim, id hendrerit
          enim ultrices sed. Nam sed dapibus nisi.
        </p>
        <p>
          Praesent pulvinar faucibus risus in iaculis. Sed erat felis, pretium
          sit amet ultricies non, porta et lacus. Curabitur a urna mi. Sed
          eleifend sed erat eget viverra. Quisque sit amet purus viverra massa
          posuere congue. Suspendisse efficitur venenatis enim, id hendrerit
          enim ultrices sed. Nam sed dapibus nisi.
        </p>
      </div>
    </div>
  );
};

export default About;
