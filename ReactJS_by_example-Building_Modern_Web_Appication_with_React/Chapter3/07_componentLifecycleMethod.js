console.log('Start')
var App = React.createClass({
    componentWillMount: function () {
        console.log('componentWillMount');
    },

    componentDidMount: function () {
        console.log('componentDidMount');
    },

    getInitialState: function () {
        console.log('getInitialState')
        return { status: true }
    },

    getDefaultProps: function () {
        console.log('getDefaultProps')
        return { name: 'John' };
    },

    componentWillReceiveProps: function (nextProps) {
        console.log('componentWillReceiveProps');
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log(this.props, nextProps, this.state, nextState)
        return true;
    },

    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    },

    render: function () {
        console.log('render');
        return <h1 onClick={this.toggleState}>
            {this.state.status.toString()}
        </h1>
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount')
    },


    toggleState: function () {
        console.log('toggleState')
        this.setState({ status: !this.state.status })
    }
});

// componentWillMount
// componentDidMount
// componentWillReceiveProps(object nextProps)
// boolean shouldComponentUpdate(object nextProps, object nextState)
// componentWillUpdate(object nextProps, object nextState)
// componentDidUpdate(object prevProps, object prevState)
// componentWillUnmount()
// React.unmountComponentAtNode(document.body)
React.render(<App name='Jane' />, document.body);
