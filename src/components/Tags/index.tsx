import { TagContainer } from "./style";

export type Props = {
  children: string;
};

const Tag = ({ children }: Props) => {
  return <TagContainer children={children} />;
};

export default Tag;
