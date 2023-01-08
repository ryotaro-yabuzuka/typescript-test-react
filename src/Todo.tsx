import { FC } from "react";
import { TodoType } from "./types/Todo";

//?がしてあるtypeの場合は、初期値を入れると良い
//Pickを使用することで、大元のtypeから必要な型のみを引き出すことができる
//Omitを使用すると、使わない型を指定できる
export const Todo: FC<Omit<TodoType, "id">> = (
  // props: Pick<TodoType, "userId" | "completed" | "title">
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};
