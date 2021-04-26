import React, { useEffect } from 'react';
import Conatiner from './Container';

function Page(props) {
    useEffect(() => {
        document.title = `${props.title} | ComplexApp`;
        window.scroll(0, 0);
    }, [props.title]);
    return <Conatiner wide={props.wide}>{props.children}</Conatiner>;
    props;
}

export default Page;
