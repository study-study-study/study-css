import React from "react";
import type { ReactNode, ErrorInfo } from "react";

type Props = {
  children: ReactNode;
};
type State = { hasError: boolean };
export class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  state: State = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ error });
    console.error({ errorInfo });
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong.</h1>
    ) : (
      this.props.children
    );
  }
}
