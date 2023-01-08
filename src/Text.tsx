import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//FCで関数自体に方を指定できる
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
