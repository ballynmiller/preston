import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render(){
        if(this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong. Please refresh browser!</h1>
                </div>   
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
