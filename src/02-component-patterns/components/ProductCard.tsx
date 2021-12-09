import {createContext, CSSProperties, ReactElement} from 'react'
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interface';
import styles from '../assets/styles/styles.module.css';

const {productCard} = styles;


export interface Props {
    children?: ReactElement | ReactElement[],
    product: Product,
    classCSS?: string,
    style?: CSSProperties,
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}
export const  ProductContext = createContext({} as ProductContextProps);
export const {Provider} = ProductContext;

export const ProductCard = ({children, product, classCSS, style, onChange, value} : Props) => {
    
    const {counter, increaseBy} = useProduct({onChange, product, value})
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