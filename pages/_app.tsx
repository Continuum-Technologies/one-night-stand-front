import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, MantineProvider, Switch } from "@mantine/core";
import BottomNav from "../components/BottomNav";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [lightThemeActive, setlightThemeActive] = useState(true);

  return (
    <>
      <Head>
        <title>ONE NIGHT STAND</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: lightThemeActive ? "light" : "dark",
        }}
      >
        <div className="w-screen min-h-[90vh] font-mono site pb-[10vh] pt-[2vh] ">
          <Switch
            onChange={() => setlightThemeActive(!lightThemeActive)}
            size="md"
            onLabel={<LightModeIcon fontSize="small" />}
            offLabel={<DarkModeIcon fontSize="small" />}
            className=" fixed top-0 right-0 mr-2 z-50"
          />
          <Component {...pageProps} />
          <BottomNav />
        </div>
      </MantineProvider>
    </>
  );
}
