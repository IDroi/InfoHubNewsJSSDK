# InfoHub News SDK for JavaScript

## Quickstart

The InfoHub SDK for JavaScript enables you to browse a list of news with simple setups. Supports the latest versions of the most popular browsers: Chrome, Firefox, and Safari.

There is no standalone files that need to be downloaded to make the InfoHub SDK for JavaScript work. Simply create a `<div>` as the container to display the news, and put a short piece of regular JavaScript in your HTML after the `<body>` tag as follows:

```html
<div id="my-container"></div>
<script>
  window.infohubAsyncInit = function() {
    InfoHub.init({
      // Required
      containerId: 'my-container',
      channelUserId: 'USER_ID_FOR_YOUR_CHANNEL',

      // Optional
      language: 'en-GB', // If not set, then retreive from browser's setting || 'en-US'
      channelId: 'YOUR_CHANNEL_ID', // If not set, then is equal to 'test'
      infiniteMode: false, // Default: true
      finiteLimit: 5, // Required if infiniteMode: false
      largeNewsRepeatIndex: 4, // Default: 0 (e.g. if 4, then 1 large news layout for every 4 news)
      useBackupLanguage: true, // Default: false
      onInitialized: function(error) { // Error callback function on Initialization
        if (error) {
          // Handle error
          console.log(error);
        } else {
          // Handle success
          console.log("success");
        }
      }
    });
  };
</script>
<!-- Specify your target SDK version, or omit the version by simply using `latest`. -->
<script async defer src="https://idroi.github.io/InfoHubNewsJSSDK/infohub-news-latest.js"></script>
```

This code will load and initialize the SDK. You must provide the ID of your container that you want to show news within. It will load the SDK asynchronously without blocking your page loading.

Available languages must comply the `[language]-[COUNTRY]` pattern. Refer available languages via http://www.lingoes.net/en/translator/langcode.htm.

## Release notes

|Version|Note|
|-|-|
|0.0.0|Initial version|
|0.1.0|Event tracking enabled|
|0.2.0|Configurable channel user identifier; load more news on scrolling|
|0.2.1|Thumbnail gradient removed; description cropped|
|0.2.2|Mobile news layout fine-tuned|
|0.2.3|Mobile news layout modified; duplicate news removed|
|0.2.4|New API updated|
|0.2.5|New API updated|
|0.2.6|FiniteMode updated|
|0.2.7|Initialization error callback enabled|
|0.2.8|Initialization error callback doc updated|
|0.2.9|Taboola SDK commented|
|0.3.0|Locale parsing error fixed; Non-supported locale error messages enabled|
|0.3.1|Taboola's error for empty ads array enabled|
|0.3.2|Backup language option enabled|
|0.3.3|Logic for news content optimized|
|0.3.4|Infohub demo page enabled|
|0.3.5|Bugs fixed and Taboola's safeguard enabled|
|0.3.6|Default locale and channel enabled|
|0.3.7|Taboola duplicate news removed|
|0.3.8|Game button enabled|
|0.3.9|Large news layout enabled|
|0.4.0|Banner ads enabled|
|0.4.1|Redundant features removed|
|0.4.2|Large news layout option enabled|
|0.4.3|Automatic locale and channelId detection enabled|
|0.4.4|Moblile phone news layout enabled|
|0.4.5|Locale-dependent date dispaly format enabled|
|0.4.6|RWD refined|
|0.4.7|CSS issues fixed|
