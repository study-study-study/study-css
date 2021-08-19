import React from "react";

/**
 * SSR無効化用コンテナ
 */
const SafeHydrate: React.FC = (props) => <>{props.children}</>;

export default SafeHydrate;
