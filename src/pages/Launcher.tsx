
/**
 * File Name: Launcher.tsx
 * Author: BunnyGamez
 * Date: October 1st 2023
 * 
 * Description:
 * This is the main launcher component that displays the launcher
 * 
 * Copyright (c) 2024 BunnyGamez
 * 
 * This file is part of the Effectue project.
 */


import '../styles/Launcher.scss';
import effectue_faviconImg from "../assets/Launcher/effectue_favicon.svg"
//import plusImg from "../assets/Launcher/plus.png"

import controllerImg from "../assets/Launcher/sidebar/game.png"
import puzzleImg from "../assets/Launcher/sidebar/Versions.png"

import globeImg from "../assets/Launcher/sidebar/globe.png"
import newsImg from "../assets/Launcher/sidebar/news.png"
import gearsImg from "../assets/Launcher/sidebar/gears.png"
import { Component, Match, Switch, createEffect, createSignal } from 'solid-js';
import Home from './components/Home';
import Versions from './components/Versions';
import Clients from './components/Clients';
import { OverlayTrigger, Popover } from 'solid-bootstrap';


const Launcher: Component = () => {
  const [pageIndex, setPageIndex] = createSignal(0);
  const [versionsDisplayStyle, setVersionsDisplay] = createSignal("display:none");
  const [clientName, setClient] = createSignal({name: 'Effectue', themeColor: '#771AD0'})
  const [launchDet, setLaunchDet] = createSignal({useEffectueMods: true, allowEffectueMods:true, useExistingMods: false, allowExistingMods: true})
  const [selectedVersion, setselectedVersion] = createSignal({"id": "1.20", "type": "release", "url": "", "time": "", "releaseTime": ""})
  
  // CONTINUITY - For different pages to look the same
  const [launchingText, setLaunchingText] = createSignal("Launch Effectue 1.20")
  let launching = false 
  
  createEffect(()=>{
   
    if (launching === false){
    setLaunchingText(`Launch ${clientName().name} ${selectedVersion().id}`)
    // console.log(launchingText())
  }
  
  })
  
  
  
  // const computePage = () => {
  //   if (pageIndex() == 0){
  //     return <Home/>
  //   }else{
  //     return <></>
  //   }
  // }
  

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function changePage(el: Element, value: number) {
    el.addEventListener("click",()=>{
      setPageIndex(value);
    })
    
  }


  createEffect(()=>{
    if (pageIndex() == 1){
      setVersionsDisplay("display: block")
    }else{
      setVersionsDisplay("display: none")
    }
  })

  const checkPageIndex = (page:Number) => {
    if (page == pageIndex()){
      return true;
    }else{
      return false;
    }
  }

  return (
    <>
    {/* <center> */}
    {/* <div class="hero"> */}
      <div style="     height: 100vh;
    overflow: hidden;display: flex;padding: 0.7rem;padding-top: 0;  padding-left: var(--sidebarPadding);">
        <div style="display: flex; flex-direction: column;padding-top: 1.6rem;">
          <img src={effectue_faviconImg} alt="" width="70" height="70"/>
          <div class="sidebar" id="sidebar">
            
            <OverlayTrigger
              trigger="hover"
              offset={[0, 10]}
              placement="right"
              delay={{ show: 130, hide: 150 }}
              overlay={
                
                <Popover id="popover-basic">
                  <div class="sidebarTooltip">
              
              <p>Play</p>
                    </div>
                </Popover>
              }
            >
              <img src={controllerImg} alt="" use:changePage={0} style={{"filter": `${ checkPageIndex(0) ? "drop-shadow(2px 4px 6px #5a1fb2)" : "drop-shadow(0px 0px)"}`}}/>
            </OverlayTrigger>
            <OverlayTrigger
              trigger="hover"
              offset={[0, 10]}
              placement="right"
              delay={{ show: 130, hide: 150 }}
              overlay={
                
                <Popover id="popover-basic">
                  <div class="sidebarTooltip" style="font-size: 15px;">
              
              <p>Versions</p>
                    </div>
                </Popover>
              }
            >
            <img src={puzzleImg} alt="" use:changePage={1} style={{"filter": `${ checkPageIndex(1) ? "drop-shadow(2px 4px 6px #5a1fb2)" : "drop-shadow(0px 0px)"}`}}/>
            </OverlayTrigger>
            <OverlayTrigger
              trigger="hover"
              offset={[0, 10]}
              placement="right"
              delay={{ show: 130, hide: 150 }}
              overlay={
                
                <Popover id="popover-basic">
                  <div class="sidebarTooltip" style="font-size: 10px;line-height: 12px;">
              
              <p>Servers & Modpacks</p>
                    </div>
                </Popover>
              }
            >
            <img src={globeImg} alt="" use:changePage={2} style={{"filter": `${ checkPageIndex(2) ? "drop-shadow(2px 4px 6px #5a1fb2)" : "drop-shadow(0px 0px)"}`}}/>
            </OverlayTrigger>
            <OverlayTrigger
              trigger="hover"
              offset={[0, 10]}
              placement="right"
              delay={{ show: 130, hide: 150 }}
              overlay={
                
                <Popover id="popover-basic">
                  <div class="sidebarTooltip">
              
              <p>??</p>
                    </div>
                </Popover>
              }
            >
            <img src={newsImg} alt="" use:changePage={3} style={{"filter": `${ checkPageIndex(3) ? "drop-shadow(2px 4px 6px #5a1fb2)" : "drop-shadow(0px 0px)"}`}}/>
            </OverlayTrigger>
            <OverlayTrigger
              trigger="hover"
              offset={[0, 10]}
              placement="right"
              delay={{ show: 130, hide: 150 }}
              overlay={
                
                <Popover id="popover-basic">
                  <div class="sidebarTooltip">
              
              <p>Settings</p>
                    </div>
                </Popover>
              }
            >
            <img src={gearsImg} alt="" style="position: absolute;
    bottom: 4rem;"/></OverlayTrigger>
            <h6 style="position: absolute;
    bottom: 2rem; margin-left: 13px;color: var(--sidebarColor);">av0.0.1</h6>

          </div>
        </div>
        <div style="transition:1s;">
        <Switch fallback={<div style="position: relative;top: -20rem;left: 38vw;padding-top: 90vh;" id="loadingDIV"><h1>Loading...</h1></div>}>
        <Match when={pageIndex() == 0}>
            <Home version={selectedVersion().id} clientName={[clientName,setClient]} launchDetails={[launchDet, setLaunchDet]} launchingText={[launchingText, setLaunchingText]}/>
          </Match>
          <Match when={pageIndex() == 1}>
            <></>
          </Match>
          <Match when={pageIndex() == 2}>
            <Clients/>
          </Match>
          <Match when={pageIndex() == 3}>
            <div style="position: relative;top: -20rem;left: 32vw;padding-top: 90vh;" id="loadingDIV"><h1>...</h1></div>
          </Match>
        </Switch>
        <div style={versionsDisplayStyle()}>
          <Versions selectedVersion={[selectedVersion, setselectedVersion]} launchingText={[launchingText, setLaunchingText]}/>
        </div>
        
        </div>
      </div>
    
    
    
    </>
  )
}

export default Launcher
