import { Accordion } from "@mantine/core";
import React from "react";

const Privacy = () => {
  return (
    <div className=" flex-col flex  w-screen min-h-screen">
      <Accordion>
        <Accordion.Item value="policy">
          <Accordion.Control>Privacy policy</Accordion.Control>
          <Accordion.Panel>
            <p>
              privacy policy goes here.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              voluptatum cum est quae maiores dolor deleniti repudiandae tenetur
              dolores! Fugit temporibus et quae qui doloribus numquam nam?
              Aliquam voluptatibus dignissimos quis impedit! Deleniti et
              recusandae, similique pariatur, tempora amet natus repudiandae
              alias, accusantium sed ex nostrum ipsa aut voluptas autem adipisci
              iure sunt. Soluta, fugit praesentium? Fuga voluptatum minima, nisi
              perspiciatis impedit error assumenda, officia quibusdam rem
              obcaecati odit deserunt illum maiores qui consectetur culpa,
              possimus amet nesciunt ea atque harum dolore adipisci earum
              temporibus! Exercitationem officia mollitia necessitatibus.
              Dolores tempora et enim aut dolorum cum voluptatum quo esse.
              Ipsam?
            </p>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Privacy;
