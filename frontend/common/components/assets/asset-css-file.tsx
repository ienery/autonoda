import * as React from "react";

interface AssetCssProps { hrefCss: string };

class AssetCssFile extends React.Component<AssetCssProps, undefined> {
    render() {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href= {this.props.hrefCss}
                />
            </div>
        );
    }
}

export default AssetCssFile;
