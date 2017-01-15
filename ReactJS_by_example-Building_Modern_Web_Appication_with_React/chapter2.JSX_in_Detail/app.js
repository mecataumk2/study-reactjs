var Heading = React.createClass({
    render: function () {
        return <th>{this.props.heading}</th>;
    }
});

var Headings = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (name) {
            return <Heading heading={name} />;
        });

        return <thead><tr>{headings}</tr></thead>;
    }
});

var Row = React.createClass({
    render: function () {
        /* Multi line 
        comment */
        return <tr>
            <td>
                {this.props.changeSet.when}</td> {// single line comment in child element.
                <td>{this.props.changeSet.who}</td>
                <td>{this.props.changeSet.description}</td>
                {/* Multi line comment 
                    in child element*/}
        </tr>;
    }
});

var Rows = React.createClass({
    render: function () {
        var rows = this.props.changeSets.map(function (changeSet) {
            return <Row changeSet={changeSet} />;
        });
        return <tbody>{rows}</tbody>;
    }
});

var App = React.createClass({
    render: function () {
        return <table className='table'>
            <Headings headings={this.props.headings} />
            <Rows changeSets={this.props.changeSets} />
        </table>;
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
// Single line comment
var headings = ['When', 'Who', 'Description'];



ReactDOM.render(<App /* Multi line comment
in JSX tag 
*/
    headings={headings} changeSets={data} />, document.getElementById('container'));