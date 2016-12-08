
import * as React from "react";
import * as ReactDOM from "react-dom";

import * as $ from 'jquery';


interface HelloProps { compiler: string; framework: string; }

const helloProps = { compiler: 'one11', framework: 'two22' };


class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <h1>
                Hello world from {this.props.compiler} and {this.props.framework}!
            </h1>
        );
    }
}

ReactDOM.render(
    <Hello
        compiler={helloProps.compiler}
        framework={helloProps.framework}
        />,
    $('.react-typescript')[0]
);
