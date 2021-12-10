import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interface';

interface useProductProps {
    product: Product,
    onChange?: (args: onChangeArgs) => void,
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0,initialValues} : useProductProps) => {
    
    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value ,0);
        if(initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        // if(newValue - 1 === initialValues?.maxCount) return;
        setCounter(newValue)
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }
    
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value)
    }, [value])
    useEffect(() => {
        isMounted.current = true;
    }, [])
    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount : initialValues?.maxCount,
        increaseBy,
        reset
    }
}