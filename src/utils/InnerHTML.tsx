'use client';

import { FC, useEffect, useRef, useState } from 'react';

interface IProps {
    html: string;
    className?: string;
    tag?: string;
}

const InnerHTML: FC<IProps> = ({ html, className }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isMount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);

        const parsedHTML = document
            .createRange()
            .createContextualFragment(html);

        isMount && divRef.current && divRef.current.appendChild(parsedHTML);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMount]);

    return isMount && <div className={className} ref={divRef}></div>;
};

export default InnerHTML;
