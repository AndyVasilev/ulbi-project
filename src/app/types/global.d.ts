declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png' {
    const PNG: string;
    export default PNG;
}

declare module '*.jpg' {
    const JPG: string;
    export default JPG;
}

declare module '*.jpeg' {
    const JPEG: string;
    export default JPEG;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
