# ghostBuster
> Basic search functionality for [ghost](https://ghost.org/)

ghostBuster has at its core [lunr.js](http://lunrjs.com). And thanks to this powerful search engine, ghostBuster provides full text searching.
This plugin was inspired in [ghostHunter](), although, it has additioanl features, fixes, templating, and it is also neatly hooked up with grunt & bower.

## Features
This plugins allows you to add search boxes wherever you may need them, and perform localized searches (ie: on the actual page); Or redirect all those search results to a global search page. This search page can also be accessed, for your convenience, by `/search/?query`

## Usage
First of all, after including jQuery, include lunr and after that, ghostBuster.
Initialize the plugin like so:

```js
<script src="{{asset "js/lunr.min.js"}}"></script>
<script src="{{asset "js/ghostBuster.js"}}"></script>
```

Next, realize that there are two types of input fields one can generate. One will make an actual search and display the results in some div of your chosing; The other one is an input that will be connected to a static search page, that will preform the actual search.

#### Creating a search input with results on the same page

In this use case, the default ghostBuster functionality shall suffice. In your theme you'll need an `<input>` for the search query, the input should be in a `<form>` and you can use the form's submit functionality to call the search. This will work whether you have a standard submit button or if you use submit() in javascript.

```html
<form>
  <input id="search-field" />
  <input type="submit" value="search">
</form>
```

You'll also need an area for the search results to show up. Just add it on the same template:

```html
<section id="results"></section>
```

Use these ghostBuster Settings
```js
<script>

    $("#search-field").ghostBuster({
        results   : "#results",     // the div ID where the resuts will be added
    });

</script>
```

#### Hooking ghostBuster with a search page

First you'll need to publish your own static page, check [here](http://support.ghost.org/publish-a-static-page/) how to do it; 
Then add an input field and a results area on it, like so:

```html
<form style="text-align:center">
    <input id="search-field" />
    <input type="submit" value="search">
</form>
<section id="results" style="text-align:center"></section>
```

Add extra input fields wherever you want, all with the same class, like so:

```html
<form style="text-align:center">
    <input class="search-redirect" />
    <input type="submit" value="search">
</form>
```

Use these ghostBuster settings

```js
<script>

    $("#search-field").ghostBuster({
        results   : "#results",     // the div ID where the resuts will be added
        path: "/search/",           // the pathname of the search page
        direct: '.search-redirect'  // the class of the search buttons, outside of the global search page
    });

</script>
```

Voilá.
Everytime a search is made on the search page the results will be shown there, and when a search is preformed on another search field, let's say in the navigation bar, it will redirect it to the search page to display the results.
You can also share search results since the search page is triggered through an URL, like so:

```
../search/?query
```