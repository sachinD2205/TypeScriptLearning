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

  interface FormData {
    name: string;
  }

  const [name, setName] = useState("");
  const [formData, setFormData] = useState<FormData>({ name: "" });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e?.target?.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ name: name });
  };

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
      <hr />
      <hr />
      <h1> Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeName}
          value={name}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <h3> Submited Data :{formData?.name}</h3>
    </div>
  );
}
