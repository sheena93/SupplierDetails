import React, {Fragment} from 'react';
import {useStyles} from './BasePage.style';

export enum BASE_PAGE_STYLE_VARIANTS {
    BAR = 'bar',
}

export interface BasePageProps {
    hideNav?: boolean;
    hideFooter?: boolean;
    variant?: BASE_PAGE_STYLE_VARIANTS;
}


export const BasePage: React.FC<BasePageProps> = ({hideNav, hideFooter, variant, children}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                {variant === BASE_PAGE_STYLE_VARIANTS.BAR && <aside className={classes.backgroundBar}/>}
                <section className={classes.body}>{children}</section>
                {!hideFooter && (
                    <section className={classes.footerContainer}>
                        <div className={classes.footerContent}>Footer Content</div>
                    </section>
                )}
            </div>
        </Fragment>
    );
};
