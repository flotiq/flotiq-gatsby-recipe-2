import React from 'react';
import { Header, Image } from 'flotiq-components-react';

const HeaderImageWithText = ({ recipe, headerText1, headerText2, headerText3 }) => (
    <div className="relative">
        <div className="px-10 py-5 md:p-20 flex flex-col items-start justify-end
        w-7/12 h-full absolute bg-gradient-to-r from-primary to-transparent"
        >
            <Header
                text={headerText1}
                additionalClasses={['block text-white font-normal '
            + 'text-olive-green !text-2xl md:!text-6xl !p-0 mb-1 md:mb-3']}
            />
            <Header
                text={headerText2}
                additionalClasses={['block text-white font-normal '
            + '!text-2xl md:!text-6xl !p-0 mb-1 md:mb-3']}
            />
            <Header
                text={headerText3}
                additionalClasses={['block text-white font-normal '
            + '!text-2xl md:!text-6xl !p-0']}
            />
        </div>
        <Image url={recipe.image[0] && recipe.image[0].localFile.publicURL} />
    </div>
);

export default HeaderImageWithText;
