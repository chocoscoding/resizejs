# Resyze

Resyze is a the best alternative for responsive font-size in REACTJS. <br> Bye-Bye to (CSS _media queries_)

## Installation

Use the npm package manager to install resyze.

```bash
npm install resyze
```

## Usage Info

```js
/* r_body === reference body or div which element will resize to
r_ele === the element that will be resized 
r_type === type of text */

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
        r_body: document.body,
        r_ele: appbody.current,
        r_type: "h1",
      },
      {
        r_body: document.body,
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
