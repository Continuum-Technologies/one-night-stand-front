import React from "react";
import Card from "../components/card";
import Hero from "../components/hero";
import Layout from "../components/layout";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Card />
    </Layout>
  );
}
