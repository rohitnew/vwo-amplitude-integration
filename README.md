# VWO Amplitude integration plugin

This plugin allows to send VWO data to Amplitude using amplitude-js.

## Package Installation

For NodeJs/JavasScript SDK

```bash
# via npm
npm install vwo-amplitude-integration

# via yarn
yarn add vwo-amplitude-integration
```

## Usage

Initialize  VWOAmplitudePlugin with your amplitude Instance:

**In your App.js file**
```js
import amplitude from "amplitude-js";
import { VWOAmplitudePlugin } from 'vwo-amplitude-integration';
amplitude.getInstance().init(API_KEY, null, {
// optional configuration options
    includeUtm: true,
    includeGclid: true,
    includeReferrer: true,
});

VWOAmplitudePlugin({amplitude}); 

```

For more details around Amplitude js plugin, refer to this [document](https://www.npmjs.com/package/amplitude-js)

## Code of Conduct

[Code of Conduct](https://github.com/wingify/vwo-amplitude-integration/blob/master/CODE_OF_CONDUCT.md)

## License

[Apache License, Version 2.0](https://github.com/wingify/vwo-amplitude-integration/blob/master/LICENSE)

Copyright 2023-2024 Wingify Software Pvt. Ltd.
