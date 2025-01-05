# TypeScript

## TypeScript Installation

npx create-next-app@latest app_name --ts

## tsconfig.json

we can config typescript here

// we defined type of props
interface ButtonProps {
text?: string; // not requried
text1:string; // required
text3: string|number| boolean; // we can give multiple type
}
// interface name always capital

//! with typescript
// need to always return jsx

//! React.FC
// it is generic class

// insted of interface we can do like this alos
type props ={
text?: string;
}

React.FC<props>

//======================================= hooks

//in js
const [value,setValue]=useState(0)

// in typescript

- 1 implicit casting
  const [value,setValue]=useState(0)
- 2 explict casting
  const [value,setValue]=useState<number>(0)

  -- with interface
  interface Book {
  name:string,
  value:number,
  }
  const [value,setValue]=useState<Book>({
  name:"fist_book",
  value:100
  })

//======================================= Form Handling
