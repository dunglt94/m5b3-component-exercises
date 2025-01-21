import React, {Component} from 'react';

class ExpandCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    expand = () => {
        this.setState({isExpanded: true});
    }

    collapse = () => {
        this.setState({isExpanded: false});
    }

    render() {
        if (this.state.isExpanded) {
            return (
                <div className={"w-75"}>
                    <button onClick={this.collapse}>Đóng giới thiệu</button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lectus vitae leo interdum
                        iaculis sed eu augue. Etiam aliquam et orci at volutpat. Vivamus lorem leo, condimentum vel
                        interdum eu, lacinia eu est. Fusce bibendum porttitor leo, a malesuada felis elementum nec.
                        Nulla egestas euismod massa, in sodales neque sagittis sed. Sed pretium metus arcu, sed cursus
                        ipsum pretium vitae. Nullam accumsan metus ac ligula mollis pretium.

                        Phasellus ullamcorper bibendum consectetur. Suspendisse potenti. Donec vel risus finibus,
                        porttitor velit ac, vehicula elit. Proin sagittis tortor id nibh vestibulum, ut dapibus libero
                        condimentum. Etiam ut sapien in est semper vulputate. Nulla fringilla augue vel nulla imperdiet
                        rutrum. Nulla auctor lorem et risus imperdiet, et suscipit neque placerat. Aenean ut elit nulla.
                        Integer dapibus elit ac quam eleifend pharetra. Vivamus ornare ex a est rutrum placerat.
                    </p>
                </div>

            )
        } else {
            return (
                <div>
                    <button onClick={this.expand}>Xem giới thiệu</button>
                </div>
            )
        }

    }
}

export default ExpandCollapse;