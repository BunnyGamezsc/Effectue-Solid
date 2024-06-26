/**
 * File Name: Setup.tsx
 * Author: BunnyGamez
 * Created Date: May 23rd 2024
 * 
 * Description:
 * Setup contains the first time initialization for authentication and paths
 * 
 * Copyright (c) 2024 BunnyGamez
 * 
 * This file is part of the Effectue project.
 */

import { Component } from 'solid-js';
import '../styles/Setup.scss';
// type SetupProps = {
//   banner: string;
// };
const Setup: Component = () => {

  function chooseBanner(){
    const random = Math.floor(Math.random() * 12);
    if (random >= 0 && random <= 3){
      return "banner2"
    }
    if (random >= 4 && random <= 7){
      return "banner3"
    }
    if (random >= 8 && random <= 11){
      return "banner4"
    }
    
    
  }

    
  return (<>
    <div id="loginpage" class={"hero " + chooseBanner()}>
        <div class="form-box" >
        <h1>Effectue Admin</h1>
            
            <div class="input-group">
                <input placeholder="Username" type="text" class="input-field" id="nameField"/>
                <input placeholder="Password" type="text" class="input-field" id="usernameField"/>
            </div>
        </div>
    </div>
    <button></button>
    </>
  )
}

export default Setup

/*
Allocated memory for minecraft
game resolution
DETECT: language
DETECT: Java Executable






*/