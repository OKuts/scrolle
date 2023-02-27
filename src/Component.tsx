import React, {useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';

export const Component = () => {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    const [view, setView] = useState(inView)

    useEffect(()=> {
        setView(inView)
    }, [inView])

    return (
        <div ref={ref}>
            <div className = {view ? 'red' : 'green'}></div>
        </div>
    );
};