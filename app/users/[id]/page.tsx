"use client";
import {
  Container,
  Grid,
  Card,
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
    setLoading(true);
    axios
      .get(
        `https://backend.one-night-stand.co/sd_get_user_account_profile_information_back_office/${id}`
      )
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <Container size="lg" mt={5}>
      {loading ? (
        <Loader size={50} style={{ textAlign: "center" }} type="bars" />
      ) : (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section component="a">
            <Image
              src={user?.user_account_profile_picture_url}
              height={240}
              alt="user"
            />
          </Card.Section>
          <Grid>
            <Grid.Col span={6}>
              <h1>{`${user?.user_account_first_name} ${user?.user_account_last_name}`}</h1>
              <Text>{`gender: ${user?.user_account_gender}`}</Text>
              <Text>{`DOB: ${user?.user_account_date_of_birth}`}</Text>
              <Text>{`physical Address: ${user?.user_account_physical_address}`}</Text>
              <Text>{`phone number : ${user?.user_account_phone_number}`}</Text>
              <Text>{`profile complete: ${user?.user_account_profile_is_completed}`}</Text>
              <Text>{`user verified: ${user?.user_account_is_verified}`}</Text>
              <Text>{`user online: ${user?.user_account_is_online}`}</Text>
              <Text>{`user active : ${user?.user_account_is_active}`}</Text>
              <Text>{`user locked: ${user?.user_account_is_locked}`}</Text>
              <Text>{`user reported: ${user?.user_account_is_reported}`}</Text>
              <Text>{`user is fake: ${user?.user_account_is_fake}`}</Text>
              <Text>{`user requested inactive status : ${user?.user_account_requested_inactive_status}`}</Text>
            </Grid.Col>

            {user?.user_account_gallery_information && (
              <Grid.Col span={6}>
                <>
                  <h2>Gallery</h2>
                  <Grid>
                    {user.user_account_gallery_information.map((media: any) => (
                      <Grid.Col key={media.id} span={6}>
                        <Image
                          src={media.user_account_media_url}
                          alt="Gallery Image"
                          radius="lg"
                          style={{ marginBottom: "16px" }}
                        />
                      </Grid.Col>
                    ))}
                  </Grid>
                </>
              </Grid.Col>
            )}
            {/* {user?.user_account_lifeStyle_information && (
              <Grid.Col>
                <h1>lifestyle information</h1>

                <>
                  <Text>
                    drinking:{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_drinking
                    }
                  </Text>
                  <Text>
                    smoking :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_smoking
                    }
                  </Text>
                  <Text>
                    marital status :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_marital_status
                    }
                  </Text>
                  <Text>
                    have children :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_have_children
                    }
                  </Text>
                  <Text>
                    have pets :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_have_pets
                    }
                  </Text>
                  <Text>
                    pet name :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_pet_name
                    }
                  </Text>
                  <Text>
                    occupation :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_occupation
                    }
                  </Text>
                  <Text>
                    living situation :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_living_situation
                    }
                  </Text>
                  <Text>
                    employment_status :{" "}
                    {
                      user.user_account_lifeStyle_information
                        ?.user_lifestyle_employment_status
                    }
                  </Text>
                </>
              </Grid.Col>
            )}
            {user?.user_account_background_information && (
              <Grid.Col>
                <>
                  <h1>background information</h1>
                  <Text>
                    nationality:{" "}
                    {
                      user.user_account_background_information
                        ?.user_background_nationality
                    }
                  </Text>
                  <Text>
                    education:{" "}
                    {
                      user.user_account_background_information
                        ?.user_background_education
                    }
                  </Text>
                  <Text>
                    English ability:{" "}
                    {
                      user.user_account_background_information
                        ?.user_background_english_ability
                    }
                  </Text>
                  <Text>
                    french ability:{" "}
                    {
                      user.user_account_background_information
                        ?.user_background_french_ability
                    }
                  </Text>
                  <Text>
                    religion :{" "}
                    {
                      user.user_account_background_information
                        ?.user_background_religion
                    }
                  </Text>
                  <Text>
                    star sign :{" "}
                    {
                      user.user_account_background_information
                        ?.user_background_star_sign
                    }
                  </Text>
                </>
              </Grid.Col>
            )}
            {user?.user_account_appearance_information && (
              <Grid.Col>
                <h1>apperance information</h1>
                <Text>
                  star sign :{" "}
                  {
                    user.user_account_appearance_information
                      ?.user_background_star_sign
                  }
                </Text>
                <Text>
                  star sign :{" "}
                  {
                    user.user_account_appearance_information
                      ?.user_background_star_sign
                  }
                </Text>
                <Text>
                  star sign :{" "}
                  {
                    user.user_account_appearance_information
                      ?.user_background_star_sign
                  }
                </Text>
                <Text>
                  star sign :{" "}
                  {
                    user.user_account_appearance_information
                      ?.user_background_star_sign
                  }
                </Text>
                <Text>
                  star sign :{" "}
                  {
                    user.user_account_appearance_information
                      ?.user_background_star_sign
                  }
                </Text>
                <Text>
                  star sign :{" "}
                  {
                    user.user_account_appearance_information
                      ?.user_background_star_sign
                  }
                </Text>
                <Text>
                  star sign :{" "}
                  {
                    user.user_account_appearance_information
                      ?.user_background_star_sign
                  }
                </Text>
              </Grid.Col>
            )} */}
          </Grid>
        </Card>
      )}
    </Container>
  );
}
