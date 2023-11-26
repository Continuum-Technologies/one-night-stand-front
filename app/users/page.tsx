"use client";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Loader,
  Divider
} from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger } from "@mantine/core";
import { IUser } from "../../types/user";
import {
  IconUsers,
  IconDashboard,
  IconChartLine,
  IconSettings,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure();
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(
        "https://backend.one-night-stand.co/sd_get_user_account_profiles_information_back_office"
      )
      .then((response) => {
        setUsers(response.data.user_account_information);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
          <span>
            <IconUsers /> users
          </span>{" "}
          <Divider my="sm" />
          <span>
            <IconChartLine /> analytics
          </span>{" "}
          <Divider my="sm" />
          <span>
            <IconSettings /> settings
          </span>{" "}
        </AppShell.Navbar>

        <AppShell.Main>
          {loading ? (
            <div style={{ justifyContent: "center", alignContent: "center" }}>
              <Loader size={50} type="bars" />
            </div>
          ) : (
              <Grid>
                {users.map((user) => (
                  <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={user.id}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section component="a">
                        <Image
                          src={user.user_account_profile_picture_url}
                          height={240}
                          alt="user"
                        />
                      </Card.Section>

                      <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{user.user_account_first_name}</Text>
                        {user.user_account_is_verified === true ? (
                          <Badge color="green" variant="light">
                            Verified
                          </Badge>
                        ) : (
                          <Badge color="pink" variant="light">
                            Not Verified
                          </Badge>
                        )}
                      </Group>

                      <Text size="sm" c="dimmed">
                        {user.user_account_email_address}
                      </Text>

                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md"
                        onClick={() => router.push(`users/${user.id}`)}
                      >
                        View Profile
                      </Button>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
          )}
        </AppShell.Main>
        <AppShell.Aside p="md">Options</AppShell.Aside>
        <AppShell.Footer p="md">&copy; onenightstand Inc</AppShell.Footer>
      </AppShell>
    </>
  );
}
