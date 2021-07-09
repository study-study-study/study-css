import React from "react";
import type { NextPage } from "next";
import * as Tag from "~/presenter/Tag";
import * as Box from "~/presenter/Box";

const Page: NextPage = () => (
  <>
    <Box.Box />
    <Box.Box2 />
    <Box.Box3 />
    <Box.Content />
    <Box.Width />

    <Tag.Article />
    <Tag.Nav />
    <Tag.Aside />
    <Tag.Section />
    <Tag.Sample />
    <Tag.Hgroup />
    <Tag.Article2 />
    <Tag.Paragraph />
    <Tag.Line />
    <Tag.Pre />
    <Tag.Blockquote />
    <Tag.List />
    <Tag.ToolBar />
    <Tag.DetailLIst />
    <Tag.Figure />
    <Tag.Overview />
    <Tag.Link />
    <Tag.Link2 />
    <Tag.Text />
    <Tag.Interactive />
    <Tag.Css1 />
    <Tag.MediaQuery />
  </>
);

export default Page;
