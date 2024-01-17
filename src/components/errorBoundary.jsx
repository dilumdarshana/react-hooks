import React, { Component } from 'react';

class MyErrorBoundary extends Component {
    state = {
        error: null,
        hasError: false,
    };

    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI.
        return { error, hasError: true };
    }

    componentDidCatch(error, info) {
        // Log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log('Error', error);
        console.log('Info', info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export default MyErrorBoundary;
