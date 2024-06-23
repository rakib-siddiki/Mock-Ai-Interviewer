import React from 'react';
import { DashBoardHeading } from '.';
import { AddButton } from './AddButton';

const DashBoardContainer = () => {
    return (
        <section className='container'>
            <div className='space-y-7 py-24 sm:space-y-10 md:py-28'>
                <DashBoardHeading />
                <AddButton />
            </div>
        </section>
    );
};

export default DashBoardContainer;
