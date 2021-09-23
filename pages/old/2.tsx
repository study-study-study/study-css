import React from "react";
import type { NextPage } from "next";
import * as Components from "~/presenter/old/Components";

const Page: NextPage = () => (
  <>
    <Components.Header />
    <Components.Breadcrumb />
    <Components.Main />
    <Components.Bottom />
    <Components.Footer />
  </>
);

export default Page;
