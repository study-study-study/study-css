import React from "react";
import type { NextPage } from "next";
import { Example } from "~/presenter/old/CheatSheet/Example";
import { Example as Example2 } from "~/presenter/old/CheatSheet/Example2";
import { StyledComponents } from "~/presenter/old/CheatSheet/StyledComponents";

const Page: NextPage = () => (
  <>
    <Example />
    {/* <Example2 /> */}
    <StyledComponents />
  </>
);

export default Page;
