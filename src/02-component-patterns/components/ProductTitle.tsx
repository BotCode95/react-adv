import { useContext, CSSProperties } from 'react';
import { ProductContext } from "./ProductCard"
import styles from '../assets/styles/styles.module.css' 

const { productDescription}  = styles;

export interface Props {
    title? : string,
    className?: string,
    style?: CSSProperties 
}

export const ProductTitle = ({title, className, style} : Props) => {
    const {product}  = useContext(ProductContext)
    return (
        <span 
            className={`${productDescription} ${className}`}
            style={style}
        >
            {title ?? product.title}
        </span>
    )
}
