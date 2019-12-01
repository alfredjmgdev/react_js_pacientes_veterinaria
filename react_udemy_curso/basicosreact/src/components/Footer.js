import React, { Fragment } from 'react';

const Footer = (props) => (
    <footer>
        <p>
            Todos los derechos reservados &copy {props.fecha};
        </p>
    </footer>
);

export default Footer;