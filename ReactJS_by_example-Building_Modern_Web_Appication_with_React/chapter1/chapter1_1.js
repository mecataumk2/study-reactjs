var App = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (heading) {
            return (<th>
                {heading}
            </th>);
        });

        var rows = this.props.data.map(function (change) {
            return (<tr>
                <td>{change.when}</td>
                <td>{change.who}</td>
                <td>{change.description}</td>
            </tr>)
        })

        return <div>
            <h1>
                {this.props.title}
            </h1>
            <table>
                <thead>
                    {headings}
                </thead>
                {rows}

            </table></div>
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

var headings = ["Last updated at", "By Author", "Summary"]
var title = "Recent Change";

React.render(<App headings={headings} data={data} title={title} />, document.body);