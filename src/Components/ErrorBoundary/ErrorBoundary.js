import React, { Component } from "react";

const ErrorBoundary = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      };
    }
    static getDerivedStateFromError(error) {
      return {
        hasError: true,
      };
    }
    componentDidCatch(info, error) {
      console.log("info", info);
      console.log("error", error);
    }
    render() {
      const { hasError } = this.state;

      if (hasError) {
        return <div>Somthing went wrong please go back to HOME</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default ErrorBoundary;
