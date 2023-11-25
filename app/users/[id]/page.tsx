"use client";
import {
  Container,
  Title,
  Grid,
  Badge,
  Avatar,
  Text,
  Image,
  Loader,
} from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../../../types/user";

export default function page({ params: { id } }: { params: { id: string } }) {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true)
    axios
      .get(
        `https://backend.one-night-stand.co/sd_get_user_account_profile_information_back_office/${id}`
      )
      .then((response) => {
        setUser(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container size="sm" mt={5}>
      {loading ? (
        <Loader size={50} />
      ) : (
        <>
          <Title order={1}>
            {`${user?.user_account_first_name} ${user?.user_account_last_name}`}
          </Title>

          <Grid>
            <Grid.Col span={6}>
        

              <Avatar
                src={user?.user_account_profile_picture_url}
                alt={`${user?.user_account_first_name}'s Profile Picture`}
                radius="xl"
                style={{ marginBottom: "16px" }}
              />

              <Text>{`Gender: ${user?.user_account_gender}`}</Text>
              <Text>{`Date of Birth: ${user?.user_account_date_of_birth}`}</Text>
            </Grid.Col>

            <Grid.Col span={6}>
              <Title order={2} style={{ marginBottom: "16px" }}>
                Gallery
              </Title>

              <Grid>
                {/* {user.user_account_gallery_information.map((media: any) => (
                  <Grid.Col key={media.id} span={6}>
                    <Image
                      src={media.user_account_media_url}
                      alt="Gallery Image"
                      radius="lg"
                      style={{ marginBottom: "16px" }}
                    />
                  </Grid.Col>
                ))} */}
              </Grid>
            </Grid.Col>
          </Grid>
        </>
      )}
    </Container>
  );
}
