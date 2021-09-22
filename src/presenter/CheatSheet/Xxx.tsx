import React from "react";

type State = {
  name: string;
};

type Props = {
  render: (s: State) => JSX.Element;
  suffix: string;
};

// https://www.sitepoint.com/react-architecture-best-practices/
// 5. Render Props
export const RenderProps: React.VFC<Props> = (props) => {
  const [state, setState] = React.useState<State>({ name: "abc" });

  return props.render({
    ...state,
    name: `${state.name}${props.suffix}`,
  });
};
