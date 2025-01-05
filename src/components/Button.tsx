import React from "react";

//! with js
// const Button = () => {
//   return (
//     <>
//       <button>ABC</button>
//     </>
//   );
// };

//! with typescript
// need to always return jsx

//! React.FC
// it is generic class

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button onClick={props?.onClick}>{props?.text}</button>
    </>
  );
};

export default Button;
