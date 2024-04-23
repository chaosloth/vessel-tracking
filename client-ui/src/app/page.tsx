"use client";
import { CustomizationProvider } from "@twilio-paste/core/customization";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import { Heading } from "@twilio-paste/core/heading";
import { Topbar, TopbarActions } from "@twilio-paste/core/topbar";

export default function Home() {
  // Map appearance
  const width = "100%"; // width in pixels or percentage
  const height = "100%"; // height in pixels
  // const latitude = "0.00"; // center latitude (decimal degrees)
  // const longitude = "0.00"; // center longitude (decimal degrees)
  const latitude = "-6.6080799858794315"; // center latitude (decimal degrees)
  const longitude = "131.3046664840962"; // center longitude (decimal degrees)
  const zoom = "5"; // initial zoom (between 3 and 18)
  const names = true; // always show ship names (defaults to false)

  // Single ship tracking
  // const mmsi = "123456789"; // display latest position (by MMSI)
  const mmsi = "512009491"; // display latest position (by MMSI)
  // const mmsi = "";
  const imo = ""; // display latest position (by IMO, overrides MMSI)
  // const imo = "9814739";
  const show_track = true; // display track line (last 24 hours)

  // Fleet tracking
  var fleet = "false"; // your personal Fleet key (displayed in your User Profile)
  var fleet_name = "false"; // display particular fleet from your fleet list
  var fleet_timespan = "1440"; // maximum age in minutes of the displayed ship positions

  let finderUrl =
    `https://www.vesselfinder.com/aismap?` +
    `zoom=${zoom}` +
    `&lat=${latitude}` +
    `&lon=${longitude}` +
    `&width=${encodeURIComponent("100%")}` +
    `&height=${encodeURIComponent("100%")}` +
    `&names=${names}` +
    `&mmsi=${mmsi}` +
    `&imo=${imo}` +
    `&track=${show_track}` +
    `&fleet=${fleet}` +
    `&fleet_name=${fleet_name}` +
    `&fleet_timespan=${fleet_timespan}` +
    `&fleet_hide_old_positions=true` +
    `&clicktoact=false` +
    `&store_pos=true` +
    `&ra=${encodeURIComponent("testingonly")}`;

  return (
    <CustomizationProvider baseTheme="default" style={{ height: "100vh" }}>
      <Box minWidth="size80">
        <Topbar id="topbar">
          <Heading as="h1" variant="heading20" marginBottom="space0">
            Tracking Svanika
          </Heading>

          <TopbarActions justify="end">
            <Button
              variant={"secondary"}
              onClick={() =>
                window.open(
                  `https://www.marinetraffic.com/en/ais/details/ships/shipid:6909911/mmsi:${mmsi}/imo:${imo}/vessel:SVANIKA`,
                  "_blank"
                )
              }
            >
              View on Marine Traffic
            </Button>

            <Button
              variant={"primary"}
              onClick={() => window.location.reload()}
            >
              Refresh
            </Button>
          </TopbarActions>
        </Topbar>
      </Box>
      <Box height={"100%"}>
        <iframe
          name="vesselfinder"
          id="vesselfinder"
          width={width}
          height={height}
          frameBorder="0"
          src={finderUrl}
          style={{ minHeight: "100%" }}
        />
      </Box>
    </CustomizationProvider>
  );
}
