import React from "react";
import type { NextPage } from "next";
import * as Components from "~/presenter/Components";

const Page: NextPage = () => (
  <>
    <Components.Header />
    <Components.Breadcrumb />
    <Components.Main />
    <Components.Footer />
  </>
);

export default Page;
