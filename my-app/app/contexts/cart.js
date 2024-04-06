
"use client"
import { createContext, useContext, useEffect, useState } from "react";
import {
    delUserCart,
    delUserCartAll,
    fetchUserCart,
    postUserCart
} from "../helpers/backend";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useUser } from "./user";
import { useAction } from "../helpers/hooks";

const CartContext = createContext({});
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const { user } = useUser()
    const [items, setItems] = useState([]);
    const { push } = useRouter()

    useEffect(() => {
        if (user?._id) {
            fetchUserCart().then((data) => {
                if (!data.error) {
                    setItems(data.data)
                }
            })
        }
    }, [user?._id])

    const getUserCart = async () => {
        const data = await fetchUserCart()
        if (!data.error && user?._id) {
            setItems(data.data)
        }
    }

    const getCartLength = () => {
        if (!!items[0]?.product?._id) {
            return items?.length
        }
    }

    const addToCart = async (item, count) => {
        if (user?._id) {
            const addCart = await useAction(postUserCart, { items: [{ productId: item, quantity: count }] })
            getUserCart()
        } else {
            message.error("Please login to add to cart")
            push("/login")
        }
    }

    const removeFromCart = async (item) => {
        if (item?._id) {
            const removeCart = await useAction(delUserCart, { productId: item._id })
            getUserCart()
            getCartLength()
        }
    }

    const getQuantity = (item) => {
        return items.find((i) => i.product._id === item._id)?.product.quantity
    }

    const clearCart = () => {
        if (user?._id) {
            const clear = delUserCartAll()
            if (!clear.error) {
                setItems([])
            }
        } else {
            push("/login")
        }
    }

    const updateCart = () => {
        if (user?._id) {
            postUserCart({
                items: JSON.parse(localStorage.getItem("cart"))
            }).then((data) => {
                if (!data.error) {
                }
            })
        } else {
            setItems([]);
            push("/login")
        }
    }

    return (
        <CartContext.Provider value={{
            items, addToCart, removeFromCart, getQuantity, clearCart, updateCart, getUserCart, getCartLength, setItems
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;