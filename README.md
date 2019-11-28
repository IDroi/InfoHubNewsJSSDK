# InfoHub News SDK for JavaScript

## Quickstart

The InfoHub SDK for JavaScript enables you to browse a list of news with simple setups. Supports the latest versions of the most popular browsers: Chrome, Firefox, and Safari.

There is no standalone files that need to be downloaded to make the InfoHub SDK for JavaScript work. Simply create a `<div>` as the container to display the news, and put a short piece of regular JavaScript in your HTML after the `<body>` tag as follows:

```html
<div id="my-container"></div>
<script>
  window.infohubAsyncInit = function() {
    InfoHub.init({
      containerId: 'my-container'
      language: 'en-GB',
      channelId: 'YOUR_CHANNEL_ID'
      channelUserId: 'USER_ID_FOR_YOUR_CHANNEL',
      infiniteMode: 'ENABLE_INFINITE_SCROLL_OR_NOT',
      finiteLimit='NUMBER_LIMIT_OF_NEWS_IN_FINITE_MODE'
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
