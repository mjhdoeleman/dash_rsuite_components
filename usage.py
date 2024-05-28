import dash_rsuite_components
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_rsuite_components.CheckTreePicker(
            id="test-tree",
        ),
        html.Div(id="output"),
    ]
)


@callback(Output("output", "children"), Input("test-tree", "selected"))
def display_output(selected):
    return "You have selected the following key(s): {}".format(selected)


if __name__ == "__main__":
    app.run_server(debug=True)
