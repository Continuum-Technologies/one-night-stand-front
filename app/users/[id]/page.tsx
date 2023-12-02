"use client";
import {
  Grid,
  Card,
  Text,
  Image,
  Loader,
  Modal,
  Button,
  Alert,
  Notification,
  rem,
  Group,
} from "@mantine/core";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import React, { FormEvent, useEffect, useState } from "react";
import { IUser } from "../../../types/user";
import { useRouter } from "next/navigation";
import {
  IconInfoCircle,
  IconX,
  IconArrowLeft,
  IconTrash,
} from "@tabler/icons-react";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const icon = <IconInfoCircle />;
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
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

  const deleteUser = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(
        `https://backend.one-night-stand.co/sd_delete_user_account_profile_information_back_office/${user?.id}`
      )
      .then((res) => {
        if (res.data.status === 200) {
          router.push("/users");
        } else {
          setShowAlert(true);
        }
      })
      .catch((error) => {
        setShowAlert(true);
        console.log(error)
      });
  };
  
  useEffect(() => {
    fetchData();
  }, [showAlert]);


  return (
    <>
      {" "}
      <span>
        <Button onClick={() => router.push("/users")}>
          <IconArrowLeft />
          all users
        </Button>
      </span>
      {loading ? (
        <Group justify="center">
          <Loader size={50} style={{ textAlign: "center" }} type="bars" />
        </Group>
      ) : (
        <>
          {showAlert ? (
            <Alert variant="light" color="red" title="Oops!" icon={icon}>
              We could not delete the requested profile, try again later
            </Alert>
          ) : (
            <>
              <Group justify="center">
                <Modal
                  opened={opened}
                  onClose={close}
                  title="Administrative Consent"
                  centered
                >
                  <form action="" onSubmit={deleteUser}>
                    <h1>
                      Are your sure you want to delete this user&apos;s profile?
                    </h1>
                    <p>
                      This action is destructive and may lead to this user not
                      gaining access to the platfrom. Proceed with caution!
                    </p>
                    <Grid mx={4}>
                      <Grid.Col span={6}>
                        <Button onClick={close} color="red">
                          Cancel
                        </Button>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <Button type="submit">Sure</Button>
                      </Grid.Col>
                    </Grid>
                  </form>
                </Modal>
              </Group>
            </>
          )}

          <Card shadow="sm" padding="md" radius="md" withBorder mt={3}>
            <Card.Section component="a">
              <Image
                src={user?.user_account_profile_picture_url}
                height={260}
                alt="user"
              />
            </Card.Section>
            <Grid>
              <Grid.Col span={6}>
                <h1>
                  {`${user?.user_account_first_name} ${user?.user_account_last_name}`}
                  ||{" "}
                  <span>
                    <Button onClick={open} color="red">
                      <IconTrash /> Delete User
                    </Button>
                  </span>
                </h1>
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
                      {user.user_account_gallery_information.map(
                        (media: any) => (
                          <Grid.Col key={media.id} span={6}>
                            <Image
                              src={media.user_account_media_url}
                              alt="Gallery Image"
                              radius="lg"
                              style={{ marginBottom: "16px" }}
                            />
                          </Grid.Col>
                        )
                      )}
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
          {showNotification && (
            <Notification icon={xIcon} color="red" title="Bummer!">
              Something went wrong
            </Notification>
          )}
        </>
      )}
    </>
  );
}
