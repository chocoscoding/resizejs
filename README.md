# Resyze

Resyze is a the best alternative for responsive font-size in REACTJS. <br> Bye-Bye to (CSS _media queries_)

## Installation

Use the npm package manager to install resyze.

```bash
npm install resyze
```

## Usage Info

```js
/*
r_ele === the element that will be resized
r_type === type of text
r_ext = this is the additional amount of font size you want to add (it measures finally in px)
*r_ext must be a number*
 */

//there are different types for different r_type's ;
"h1";
"h2";
"h3";
"h4";
"h5";
"ignore";
"normal";
"tiny";
"text";
"big"; (for only SB)
```

## Usage

```js
import React, { useEffect, useRef } from "react";
import resyze from "resyze";

const appbody = useRef(0);
const appbody2 = useRef(0);

useEffect(() => {
  function resyzef() {
    resyze([
      {
        r_ele: appbody.current,
        r_type: "h1",
        r_ext: 10,
      },
      {
        r_ele: appbody2.current,
        r_type: "text",
      },
    ]);
  }

  window.addEventListener("resize", resyzef);
  window.addEventListener("load", resyzef);
});

return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p ref={appbody}>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        ref={appbody2}
      >
        Learn React
      </a>
    </header>
  </div>
);
```

## License

MIT
