import React from 'react';
import { Button } from 'react-bootstrap';

const About = () =>
    <div>
        Hey! Thanks for using this example. If you like it, consider starring the repo :))
        <div>
            <iframe
                src="https://ghbtns.com/github-btn.html?user=jpsierens&repo=webpack-react-redux&type=star&size=large"
                frameBorder="0"
                allowTransparency="true"
                scrolling="0">
            </iframe>
        </div>
        <Button bsStyle="success" onClick={() => console.log('test')}> Hej Tanja </Button>
    </div>;


export default About;
