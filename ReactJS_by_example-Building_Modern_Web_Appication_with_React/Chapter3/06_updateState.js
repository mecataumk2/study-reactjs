var RecentChangesTable = React.createClass({
    render: function () {
        return (
            <div>
                <h1> Recent Changes</h1>
                <table className='table'>
                    {this.props.children}
                </table>
            </div>
        );
    }
});

RecentChangesTable.Heading = React.createClass({
    render: function () {
        var headingStyle = {
            backgroundColor: 'FloralWhite',
            fontSize: '19px'
        }
        return <th style={headingStyle}>{this.props.heading}</th>;
    }
});

RecentChangesTable.Headings = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (name, index) {
            return <RecentChangesTable.Heading key={index} heading={name} />;
        });

        return <thead><tr>{headings}</tr></thead>;
    }
});

RecentChangesTable.Row = React.createClass({
    render: function () {
        var trStyle = { backgroundColor: 'aliceblue' }
        return <tr style={trStyle}>
            <td>{this.props.changeSet.when}</td>
            <td>{this.props.changeSet.who}</td>
            <td>{this.props.changeSet.description}</td>
        </tr>;
    }
});

RecentChangesTable.Rows = React.createClass({
    render: function () {
        var rows = this.props.changeSets.map(function (changeSet, index) {
            return <RecentChangesTable.Row key={index} changeSet={changeSet} />;
        });
        return <tbody>{rows}</tbody>;
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            changeSets: [],
            headings: ['Updated At', 'Author', 'Change']
        };
    },

    handleEvent: function (data) {
        this.setState({ changeSets: data.changeSets });
    },

    getDefaultProps: function () {
        return {
            headings: ['When happened', 'Who did it', 'What they change']

        };
    },

    propTypes: {
        headings: function (props, propName, componentName) {
            if (propName == 'headings')
                return Error('Failed Validation in headings')
        },
        changeSets: function (props, propName, componentName) {
            if (propName == 'changeSets')
                return Error('Failed Validation in changeSets')
        }
    },

    render: function () {
        console.log(this.state.changeSets, this.state.headings);
        return (<RecentChangesTable>
            <RecentChangesTable.Headings headings={this.props.headings} />
            <RecentChangesTable.Rows changeSets={this.props.changeSets} />
        </RecentChangesTable>);
    }
});

var data = [{
    "when": "2 minutes ago",
    "who": "Jill Dupre",
    "description": "Created new account"
},
{
    "when": "1 hour ago",
    "who": "Lose White",
    "description": "Added fist chapter"
},
{
    "when": "2 hours ago",
    "who": "Jordan Whash",
    "description": "Created new account"
}];

var headings = ['When', 'Who', 'Description'];
/*var props = { headings: headings, changeSets: data };*/
var props = { changeSets: data };

ReactDOM.render(<App {...props} />, document.getElementById('container'));
/*ReactDOM.render(<App
    {...props} headings={['Updated at', 'Author', 'Change']} />, document.getElementById('container'));*/