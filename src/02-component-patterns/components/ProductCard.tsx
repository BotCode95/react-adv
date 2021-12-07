import {createContext, CSSProperties, ReactElement} from 'react'
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interface';
import styles from '../assets/styles/styles.module.css';

const {productCard} = styles;


export interface Props {
    children?: ReactElement | ReactElement[],
    product: Product,
    classCSS?: string,
    style?: CSSProperties
}
export const  ProductContext = createContext({} as ProductContextProps);
export const {Provider} = ProductContext;

export const ProductCard = ({children, product, classCSS, style} : Props) => {
    
    const {counter, increaseBy} = useProduct()
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${productCard} ${classCSS}`}
                 style={style}
            >
                {children}
            </div>
        </Provider>
    )
}