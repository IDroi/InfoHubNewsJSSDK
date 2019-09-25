# InfoHub News SDK for JavaScript

## Quickstart

The InfoHub SDK for JavaScript enables you to browse a list of news with simple setups. Supports the latest versions of the most popular browsers: Chrome, Firefox, and Safari.

There is no standalone files that need to be downloaded to make the InfoHub SDK for JavaScript work. Simply create a `<div>` as the container to display the news, and put a short piece of regular JavaScript in your HTML after the `<body>` tag as follows:

```js
<div id="my-container"></div>
<script>
  window.infohubAsyncInit = function() {
    InfoHub.init({
      containerId: 'my-container'
      country: 'GB',
    });
  };
</script>
<script async defer src="https://idroi.github.io/InfoHubNewsJSSDK/sdk.js"></script>
```

This code will load and initialize the SDK. You must provide the ID of your container that you want to show news within. It will load the SDK asynchronously without blocking your page loading.

Available countries:

|Country|Note|
|-|-|
|DE|Germany|
|FR|France|
|GB|United Kingdom of Great Britain and Northern Ireland|
