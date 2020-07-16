import React, { Component } from 'react';

class MyErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null,
    };

    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI.
        return { error: error };
    }

    componentDidCatch(error, info) {
        // Log the error to an error reporting service
        // logErrorToMyService(error, info);
        // console.log('info', info)
    }

    render() {
        if (this.state.error) {
            // You can render any custom fallback UI
            return <p><i>Something broken. Captured by Error Boundaries</i></p>;
        }
        return this.props.children;
    }
}

export default MyErrorBoundary;
