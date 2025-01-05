"use client";
import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {
  interface Book {
    name: string;
    value: number;
  }

  const [book, setBook] = useState<Book>({
    name: "fist book",
    value: 100,
  });
  return (
    <div>
      <h3>
        {`Book Details -   name : ${book?.name}   and value :${book?.value}`}
      </h3>
      <Button
        onClick={() =>
          setBook((state) => {
            return { ...state, value: state?.value + 1 };
          })
        }
        text={"First Button"}
      />
    </div>
  );
}
