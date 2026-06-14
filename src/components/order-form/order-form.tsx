"use client";
import {useState} from "react";

export const OrderForm = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        size: "",
        comment: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <form
            className="max-w-xl mx-auto p-6 space-y-4"
        >
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Имя"
                className="border p-2 w-full"
            />

            <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Телефон"
                className="border p-2 w-full"
            />

            <input
                name="size"
                value={form.size}
                onChange={handleChange}
                placeholder="Размер сруба"
                className="border p-2 w-full"
            />

            <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder="Комментарий"
                className="border p-2 w-full"
            />

            <button
                type="submit"
                className="bg-amber-600 text-white px-4 py-2 rounded"
            >
                Отправить заказ
            </button>
        </form>
    );
};