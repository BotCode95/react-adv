import {lazy, LazyExoticComponent} from 'react';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent ;
    name: string;
}

const LazyLayout= lazy(() => import(/*webpackChunkName: "LazyPage1" */ '../01-lazyload/layout/LazyLayout'))
const NoLazy= lazy(() => import(/*webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/NoLazy'))
export const routes: Route[]= [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'No-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    {
        to: '/',
        path: '',
        Component: ShoppingPage,
        name: 'Shopping Pages'
    },

]