## Vessel Tracking
This is a simple react application built using Next.js to track a single marine vessel.

It uses [vesselfinder.com](https://vesselfinder.com) to embed an iFrame, passing through parameters as outlined in its [documentation](https://www.vesselfinder.com/embed)

The build scripts package up the application as an export so that it may be hosted on any web server, like Twilio Serverless.

### Configuration parameters

See the `src/page.tsx` for information. The following properties will be passed through

```js
    // Map appearance
    const width="100%";         // width in pixels or percentage
    const height="300";         // height in pixels
    const latitude="0.00";      // center latitude (decimal degrees)
    const longitude="0.00";     // center longitude (decimal degrees)
    const zoom="3";             // initial zoom (between 3 and 18)
    const names=false;          // always show ship names (defaults to false)

    // Single ship tracking
    const mmsi="123456789";     // display latest position (by MMSI)
    const imo="1234567";        // display latest position (by IMO, overrides MMSI)
    const show_track=false;     // display track line (last 24 hours)

    // Fleet tracking
    const fleet="e48ab3d80a0e2a9bf28930f2dd08800c"; // your personal Fleet key (displayed in your User Profile)
    const fleet_name="Carnival"; // display particular fleet from your fleet list
    const fleet_timespan="1440"; // maximum age in minutes of the displayed ship positions
```

