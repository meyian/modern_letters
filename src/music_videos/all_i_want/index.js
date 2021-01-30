/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import webAudioPlayer from "web-audio-player";
import Dilla from "dilla";
import gsap from "gsap";

import React, { useState, useEffect } from "react";

const songFile = "/sounds/All I Want (Original Mix).mp3";

let audio;
let audioContext = new AudioContext();
let dilla = new Dilla(audioContext, {
  tempo: 116,
  beatsPerBar: 4,
  loopLength: 200,
});

const bounceOpacity = ({ elementId, duration }) => {
  const tl = gsap.timeline();
  tl.fromTo(
    `#${elementId}`,
    { opacity: 0 },
    { opacity: 1, duration: duration / 2 }
  );
  tl.to(`#${elementId}`, { opacity: 0, duration: duration / 2 });
};

const StyledButton = styled.button`
  border-radius: 50px;
  background-color: white;
  color: black;
  border: 2px solid black;
  transition: all 0.2s;
  padding: 5px 2rem;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const events = {
  "1.1.01": {
    name: "a1.start_kick",
    position: "*.*.01",
    function: () => {},
  },
  "8.1.01": {
    name: "b2.fade_out_kick",
    position: "8.1.01",
    function: () => {
      console.log("fading out...");
      gsap.to(document.getElementById("kick-circle__wrapper"), {
        opacity: 0,
        duration: 5,
      });
    },
  },
};

const initMetronome = () => {
  // var high = {
  //   position: "*.1.01",
  // };
  // var low = { freq: 330, duration: 15 };

  dilla.set("metronome", [{ position: "*.*.01" }]);

  dilla.on("step", function (step) {
    console.log("step");
    console.log(step);

    bounceOpacity({ elementId: "kick-circle", duration: 0.2 });

    // if (step.event === "start") {
    let event;
    //   console.log("kick");
    //   bounceOpacity({ elementId: "kick-circle", duration: 0.2 });

    if ((event = events[step.position])) {
      event.function();
    }
  });
};

const AllIWant = () => {
  const [hasAudioFileLoaded, setHasAudioFileLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const playButton = (
    <StyledButton
      onClick={() => {
        if (isFirstPlay) {
          setTimeout(() => {
            dilla.start();
          }, 100);
          setIsFirstPlay(false);
        } else {
          dilla.start();
        }
        audio.play();
        setIsPlaying(true);
      }}
    >
      Play
    </StyledButton>
  );

  const pauseButton = (
    <StyledButton
      onClick={() => {
        console.log("pausing");
        dilla.pause();
        audio.pause();
        setIsPlaying(false);
      }}
    >
      Pause
    </StyledButton>
  );

  const playOrPauseButton = isPlaying ? pauseButton : playButton;
  const loadingOrPlayOrPauseButton = hasAudioFileLoaded ? (
    playOrPauseButton
  ) : (
    <h1>Loading Song</h1>
  );

  useEffect(() => {
    audio = webAudioPlayer(songFile);
    initMetronome();

    audio.on("load", () => {
      setHasAudioFileLoaded(true);
      audio.node.connect(audio.context.destination);
    });
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: baseline;
          background-color: white;
        `}
      >
        <div
          css={css`
            position: relative;
            top: 2rem;
          `}
        >
          {loadingOrPlayOrPauseButton}
        </div>
      </div>
      <div
        id="kick-circle__wrapper"
        css={css`
          position: absolute;
          bottom: 2rem;
          right: 2rem;
        `}
      >
        <div
          id="kick-circle"
          css={css`
            width: 10rem;
            height: 10rem;
            background-color: black;
            opacity: 0;
            border-radius: 100%;
          `}
        ></div>
      </div>
    </div>
  );
};

export default AllIWant;

/*

Todo

+ Play/Pause the tune
  + Play
  + Pause
+ Preload the song
+ Get a fading in/out circle to follow the beat
  - dilla visual metronome
    - dilla metronome
    - dilla console metronome
    - gsap orange circle
  - sync to the beat
* Get lyrics to follow the song
* Add images
  - preloading them
* Time questions
* Play videos


---- Asides ----

To do: 
+ Make the button like Spotify's
+ GSap
  + circle fading in and out
* Intro

-- Sat 30 Jan --

- 4:53 PM -

Man, the beautiful women everywhere on the internet that I try not to get too flustered and panty over. Look, I have great taste in all things, and it isn't by accident that I stumbled through saloon doors into a YouTube harem filled with beautiful and talented women, all graciously ignoring the hearts popping out of my eyes.

Todo

+ Move the button to the top
+ Fade out the kick
* Fade in the tree over 8 measures
  - it is a slide, and slide #1


-- Thu 28 Jan --

- 7:42 PM -

Intro

Title: All I Want (fade in and out)

This is a song I very much enjoy, and I was listening to it while messing around with my computer when the idea of bringing this song to you in a format like this struck me like lightning hitting Thor's hammer. (At least, that what it felt like.) You see, I love music and music videos, but the thought of trying to make one with the only tools I have -- programming tools -- never occurred to me before. I hope to make many more of these, and with enough practice, maybe one day I might be things like these for actual musicians who want interactive pieces like these. Anyway, here goes..
  
Please enjoy the show

way that you in a way that  hoping you enjoy it too. I've always wanted to make a 
 


- 2:31 PM -

In theory, I should be working, but I have questions...

To do: 
+ Make the button like Spotify's
+ GSap
  + circle fading in and out

Next few days:

* Introduction:
  - flying sentences going from right to left at different speeds, different sizes?
  - enjoy the show

Near future:
  - lyrics
  - pictures
  - questions  



-- Tue 26 Jan --

- 7:36 PM -

By the way, this is when I started the project and devised this version of the todo list

+ Play/Pause the tune
  + Play
  + Pause
+ Preload the song
* Get a fading in/out circle to follow the beat
  - dilla visual metronome
  - sync to the beat
* Get lyrics to follow the song
* Add images
  - preloading them
* Time questions
* Play videos


- 5:46 -

I guess I decided today that my health is worth it. So yeah, fuck it. Byby moly. :(

My immediate next goal is to play all i want on this page w/ a play/pause button

Tools


---- Scratchpad ----

Lyrics

I'm up for a real hard time
Now you changed your mind
Knew I'd see the day
Go on, have it any way
Just enough, you say
I'm all yours to take

This is all I want from you
Yours to give and mine to lose
This is all I want from you
All I want from you

I found a feeling that was new
And now we're half way through
You're changin' all the rules
Say, now my friend, if you mind
Your name upon this line
It seemed so black and white

This is all I want from you
Yours to give and mine to lose
This is all I want from you
All I want from you

This is all I want from you
Time to change and time to choose
This is all I want from you
All I want from you

This is all I want from you
Yours to give and mine to lose
This is all I want from you
All I want from you

This is all I want from you
Time to change and time to choose
This is all I want from you
All I want from you

This is all I want from you
Yours to give and mine to lose
This is all I want from you
All I want from you

This is all I want from you
Time to change and time to choose
This is all I want from you
All I want from you



*/
