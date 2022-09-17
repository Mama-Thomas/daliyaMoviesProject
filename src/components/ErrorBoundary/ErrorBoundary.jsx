import React from 'react';

import './ErrorBoundary';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div id="ErrorImageOverlay">
          <div id="ErrorImageContainer"></div>
          <h2 id="ErrorImageText">Sorry this page is broken</h2>
        </div>
      );
    }

    return this.props.children;
  }
};


export default ErrorBoundary;