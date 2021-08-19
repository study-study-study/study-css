import React from "react";
import type { NextPage } from "next";
import { Example } from "~/presenter/CheatSheet/Example";
import { Example as Example2 } from "~/presenter/CheatSheet/Example2";
import { StyledComponents } from "~/presenter/CheatSheet/StyledComponents";

const Page: NextPage = () => (
  <>
    <Example />
    {/* <Example2 /> */}
    <StyledComponents />
  </>
);

export default Page;
