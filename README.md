# Ganescha-cssmin
A simple minfied port of YUI cssmin. 
No extras so small an simple as posible.
Only `3.35 KB`

```javascript
const cssmin = require('ganescha-cssmin');
const output = cssmin('input as css');
```

```javascript
$ ganescha-cssmin ./style.css ./style.min.css
ganescha-cssmin done
```