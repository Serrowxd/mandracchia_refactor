# Mandracchia Law (Refactor)

### An Attorney Website by Jared Cooper and Kevin Jolley.

### Front-End Design & </> - `Kevin Jolley`

### Back-End Auth & </> - `Jared Cooper`

## TODO

- Footer
- Secondary Pages
- Connect Routes
- Reactive Layout (LESS?)
- Refactor some old code
- Contact Field will need to take in inputs ~ Axios?
- Global Gutter needs to be implemented somehow to handle the gap on the sides - currently 10rem.

### Colors:

#### Backgrounds

`Background || OLD`: #bec7fd **[TEMP]** // index.css + app.css **_TEMP DISABLED_**

`Background`: #F8F9FA || Located: `App.css` & Public>`Index.css`

`white-background`: #eeeeee || Located: `LowerHeader.css`

### Fonts:

`font-family`: Segoe UI Light `!important` -- located in `index.css` // modifies `body`

## Notes with Randall

```JS
import React from 'react';

const Skill = (props) => (
  <Fragment>
    <h2>{props.title}</h2>
    <p>{props.children}</p>
  </Fragment>
);

export default Skill;
```

Fragments don't show up, they are just able to export functional components.

```JS
const add = (x, y) => x + y;

(same as)

const add = (x, y) => {
  return x + y;
};
```

Arrow Functions don't have `this` keywords, where as Functions do.

`props.children` is whatever comes inside of the tags that it's being used on.

So `<Skill title={title}> Children </Skill>` Children would be the props.children passing it in.

**CREATE AN INDEX REDUCER THAT CONTAINS ALL THE OTHER REDUCERS**
