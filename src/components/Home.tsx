import React, { useState } from "react";
import myPhoto from "./my-photo.jpg";

const Home: React.FC = () => {
    const [name, setName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };
    
      return (
        <div>
          <h1>Welcome to Home, {name}!</h1>