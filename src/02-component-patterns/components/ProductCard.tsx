import {createContext, CSSProperties} from 'react'
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interface';
import styles from '../assets/styles/styles.module.css';

const {productCard} = styles;


export interface Props {
    children?: (args: ProductCardHandlers) => JSX.Element,
    product: Product,
    classCSS?: string,
    style?: CSSProperties,
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}
export const  ProductContext = createContext({} as ProductContextProps);
export const {Provider} = ProductContext;

export const ProductCard = ({children, product, classCSS, style, onChange, value, initialValues} : Props) => {
    
    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues})
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={`${productCard} ${classCSS}`}
                 style={style}
            >
                {children!({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}