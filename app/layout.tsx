"use client";
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { Space_Grotesk } from "next/font/google";
import { Group, Divider } from "@mantine/core";
import { AppShell, Burger } from "@mantine/core";
import {
  IconUsers,
  IconDashboard,
  IconChartLine,
  IconSettings,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: [],
  weight: "400",
});

export default function RootLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={spaceGrotesk.className}>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            aside={{
              width: 300,
              breakpoint: "md",
              collapsed: { desktop: false, mobile: true },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                one night stand - back office
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <span>
                <IconDashboard /> dashboard
              </span>{" "}
              <Divider my="sm" />
              <Link href={"/users"} style={{ color: 'black', textDecoration: 'none'}}>
                <span>
                  <IconUsers /> users
                </span>{" "}
              </Link>
              <Divider my="sm" />
              <span>
                <IconChartLine /> analytics
              </span>{" "}
              <Divider my="sm" />
              <span>
                <IconSettings /> settings
              </span>{" "}
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
            <AppShell.Aside p="md">Options</AppShell.Aside>
            <AppShell.Footer p="md">
              &copy; onenightstand Inc
            </AppShell.Footer>{" "}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
