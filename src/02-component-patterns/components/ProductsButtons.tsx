import { useContext, CSSProperties, useCallback } from 'react';
import { ProductContext } from "./ProductCard"
import styles from '../assets/styles/styles.module.css' 

const {buttonsContainer, buttonMinus, countLabel, buttonAdd} = styles;

export interface Props {
    className?: string,
    style?: CSSProperties
}
export const ProductButtons = ({className, style}: Props) => {

    const {increaseBy, counter, maxCount} = useContext(ProductContext)

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter,maxCount],
    )
    return (
        <div 
            className={`${buttonsContainer} ${className}`}
            style={style}
        >
        <button 
            className={buttonMinus}
            onClick={() => increaseBy(-1)}
            > - 
        </button>
        <div className={countLabel}>{counter}</div>
        <button 
            className={`${buttonAdd} ${isMaxReached() ? styles.disabled : ''}`}
            onClick={() => increaseBy(1)}
            > + 
        </button>
    </div>
    )
}